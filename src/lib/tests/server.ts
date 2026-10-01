import { createHmac, timingSafeEqual } from 'node:crypto';
import { neon } from '@neondatabase/serverless';
import { TESTS_BY_ID } from './bank';
import type { PracticeAttempt, PracticeQuestionState, PracticeRun, TestQuestion } from './types';

export const TESTS_ADMIN_COOKIE = 'episte_teacher';
const SESSION_SECONDS = 8 * 60 * 60;
const MAX_EXPLANATION = 2000;

let schemaReady: Promise<void> | null = null;

export class TestsApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function secret() {
  const key = process.env.TESTS_ADMIN_KEY;
  if (!key || key.length < 8) {
    throw new Error('Falta configurar TESTS_ADMIN_KEY con al menos 8 caracteres.');
  }
  return key;
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function signature(expires: string) {
  return createHmac('sha256', secret())
    .update(`teacher:${expires}`)
    .digest('hex');
}

export function checkAdminKey(value: string) {
  return safeEqual(value, secret());
}

export function issueAdminToken() {
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return {
    token: `${expires}.${signature(expires)}`,
    maxAge: SESSION_SECONDS,
  };
}

export function isAdminTokenValid(token?: string | null) {
  if (!token) return false;

  const [expires, sig] = token.split('.');
  const expiresNumber = Number(expires);

  if (!Number.isFinite(expiresNumber)) return false;
  if (expiresNumber < Math.floor(Date.now() / 1000)) return false;
  if (!sig) return false;

  return safeEqual(sig, signature(expires));
}

function requiredText(value: unknown, max: number, label: string) {
  if (typeof value !== 'string' || !value.trim() || value.length > max) {
    throw new TestsApiError(400, `El campo ${label} no es válido.`);
  }
  return value.trim();
}

function optionalDate(value: unknown) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value !== 'string') throw new TestsApiError(400, 'Fecha no válida.');

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new TestsApiError(400, 'Fecha no válida.');
  return date.toISOString();
}

function sanitizeAttempt(value: unknown, question: TestQuestion): PracticeAttempt {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TestsApiError(400, 'Intento no válido.');
  }

  const attempt = value as Record<string, unknown>;
  const optionId = requiredText(attempt.optionId, 80, 'optionId');
  const option = question.options.find((item) => item.id === optionId);
  if (!option) throw new TestsApiError(400, 'Alternativa no válida.');

  const explanation = typeof attempt.explanation === 'string'
    ? attempt.explanation.slice(0, MAX_EXPLANATION)
    : '';

  return {
    optionId,
    correct: option.correct,
    explanation,
    answeredAt: optionalDate(attempt.answeredAt) || new Date().toISOString(),
  };
}

function sanitizeQuestionState(value: unknown, question: TestQuestion): PracticeQuestionState {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TestsApiError(400, 'Estado de pregunta no válido.');
  }

  const state = value as Record<string, unknown>;
  const attemptsRaw = Array.isArray(state.attempts) ? state.attempts : [];
  if (attemptsRaw.length > 20) {
    throw new TestsApiError(400, 'Demasiados intentos para una pregunta.');
  }

  const attempts = attemptsRaw.map((attempt) => sanitizeAttempt(attempt, question));
  const everRevealed = Boolean(state.everRevealed);
  const status: PracticeQuestionState['status'] = everRevealed
    ? 'revealed'
    : attempts.some((attempt) => attempt.correct)
      ? 'solved'
      : attempts.length
        ? 'in_progress'
        : 'unanswered';

  return {
    status,
    attempts,
    everRevealed,
  };
}

export function sanitizeRun(participantId: string, value: unknown): PracticeRun {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TestsApiError(400, 'Práctica no válida.');
  }

  const run = value as Record<string, unknown>;
  const runParticipantId = requiredText(run.participantId, 128, 'run.participantId');

  if (runParticipantId !== participantId) {
    throw new TestsApiError(400, 'El participante de la práctica no coincide.');
  }

  if (!run.questions || typeof run.questions !== 'object' || Array.isArray(run.questions)) {
    throw new TestsApiError(400, 'Preguntas no válidas.');
  }

  const testId = requiredText(run.testId, 80, 'run.testId');
  const test = TESTS_BY_ID[testId];
  if (!test) throw new TestsApiError(400, 'Test no válido.');

  const questionEntries = Object.entries(run.questions as Record<string, unknown>);
  if (questionEntries.length > 100) {
    throw new TestsApiError(400, 'Demasiadas preguntas en la práctica.');
  }

  const questions = Object.fromEntries(
    questionEntries.map(([questionId, state]) => {
      const cleanId = requiredText(questionId, 128, 'questionId');
      const question = test.questions.find((item) => item.id === cleanId);
      if (!question) throw new TestsApiError(400, 'Pregunta no válida.');
      return [cleanId, sanitizeQuestionState(state, question)];
    })
  );

  return {
    id: requiredText(run.id, 128, 'run.id'),
    participantId: runParticipantId,
    testId,
    startedAt: optionalDate(run.startedAt) || new Date().toISOString(),
    finishedAt: optionalDate(run.finishedAt),
    abandonedAt: optionalDate(run.abandonedAt),
    questions,
  };
}

export async function testsDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('Falta configurar DATABASE_URL.');

  const sql = neon(url);

  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS epistemologia_test_runs (
          id TEXT PRIMARY KEY,
          participant_id TEXT NOT NULL,
          test_id TEXT NOT NULL,
          started_at TIMESTAMPTZ NOT NULL,
          finished_at TIMESTAMPTZ,
          abandoned_at TIMESTAMPTZ,
          payload JSONB NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS epistemologia_test_runs_participant_test_idx
        ON epistemologia_test_runs (participant_id, test_id, updated_at DESC)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  await schemaReady;
  return sql;
}

export function shortParticipantId(id: string) {
  return String(id || '').replace(/-/g, '').slice(0, 8).toUpperCase();
}

export function apiError(error: unknown) {
  console.error('[tests]', error);

  if (error instanceof TestsApiError) {
    return { status: error.status, message: error.message };
  }

  return {
    status: 500,
    message: 'No se pudo completar la operación. Revisa la configuración del servidor.',
  };
}

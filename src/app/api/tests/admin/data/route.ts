import { NextRequest, NextResponse } from 'next/server';
import {
  apiError,
  isAdminTokenValid,
  shortParticipantId,
  TESTS_ADMIN_COOKIE,
  testsDb,
} from '@/lib/tests/server';
import type { PracticeQuestionState, PracticeRun } from '@/lib/tests/types';

interface DbRow {
  id: string;
  participant_id: string;
  test_id: string;
  started_at: string | Date;
  finished_at: string | Date | null;
  abandoned_at: string | Date | null;
  updated_at: string | Date;
  payload: PracticeRun;
}

interface QuestionStats {
  questionId: string;
  responded: number;
  resolved: number;
  revealed: number;
  firstAttempts: number;
  firstAttemptCorrect: number;
  totalAttempts: number;
  explanationCount: number;
  firstChoiceCounts: Record<string, number>;
  firstChoiceReasons: Record<string, Array<{ participantLabel: string; text: string }>>;
}

interface TestStats {
  testId: string;
  participants: number;
  completed: number;
  active: number;
  abandoned: number;
  totalAttempts: number;
  explanationCount: number;
  questions: Record<string, QuestionStats>;
}

function completed(state?: PracticeQuestionState) {
  if (!state) return false;
  return state.status === 'solved' || state.status === 'revealed';
}

function summarize(row: DbRow) {
  const states = Object.values(row.payload?.questions || {});
  const completedQuestions = states.filter(completed).length;
  const attempts = states.reduce((count, state) => count + state.attempts.length, 0);
  const revealed = states.filter((state) => state.everRevealed).length;
  const explanations = states.reduce(
    (count, state) => count + state.attempts.filter((attempt) => attempt.explanation.trim()).length,
    0
  );

  return {
    id: row.id,
    participantId: row.participant_id,
    participantLabel: shortParticipantId(row.participant_id),
    testId: row.test_id,
    startedAt: new Date(row.started_at).toISOString(),
    finishedAt: row.finished_at ? new Date(row.finished_at).toISOString() : null,
    abandonedAt: row.abandoned_at ? new Date(row.abandoned_at).toISOString() : null,
    updatedAt: new Date(row.updated_at).toISOString(),
    status: row.abandoned_at ? 'abandoned' : row.finished_at ? 'completed' : 'active',
    completedQuestions,
    totalQuestions: states.length,
    attempts,
    revealed,
    explanations,
  };
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(TESTS_ADMIN_COOKIE)?.value;
    if (!isAdminTokenValid(token)) {
      return NextResponse.json({ error: 'Sesión docente no iniciada.' }, { status: 401 });
    }

    const sql = await testsDb();
    const result = await sql`
      SELECT id, participant_id, test_id, started_at, finished_at, abandoned_at, updated_at, payload
      FROM epistemologia_test_runs
      ORDER BY updated_at DESC
    `;
    const rows = result as unknown as DbRow[];

    const latest = new Map<string, DbRow>();
    for (const row of rows) {
      const key = `${row.participant_id}|${row.test_id}`;
      if (!latest.has(key)) latest.set(key, row);
    }

    const current = [...latest.values()];
    const runs = current.map(summarize);
    const tests: Record<string, TestStats> = {};

    for (const row of current) {
      const summary = summarize(row);
      const test = tests[summary.testId] ||= {
        testId: summary.testId,
        participants: 0,
        completed: 0,
        active: 0,
        abandoned: 0,
        totalAttempts: 0,
        explanationCount: 0,
        questions: {},
      };

      test.participants += 1;
      if (summary.status === 'completed') test.completed += 1;
      if (summary.status === 'active') test.active += 1;
      if (summary.status === 'abandoned') test.abandoned += 1;
      test.totalAttempts += summary.attempts;
      test.explanationCount += summary.explanations;

      for (const [questionId, state] of Object.entries(row.payload?.questions || {})) {
        const question = test.questions[questionId] ||= {
          questionId,
          responded: 0,
          resolved: 0,
          revealed: 0,
          firstAttempts: 0,
          firstAttemptCorrect: 0,
          totalAttempts: 0,
          explanationCount: 0,
          firstChoiceCounts: {},
          firstChoiceReasons: {},
        };

        const attempts = state.attempts || [];

        if (attempts.length) question.responded += 1;
        if (completed(state)) question.resolved += 1;
        if (state.everRevealed) question.revealed += 1;

        question.totalAttempts += attempts.length;
        question.explanationCount += attempts.filter((attempt) => attempt.explanation.trim()).length;

        const first = attempts[0];
        if (first) {
          question.firstAttempts += 1;
          if (first.correct) question.firstAttemptCorrect += 1;

          question.firstChoiceCounts[first.optionId] =
            (question.firstChoiceCounts[first.optionId] || 0) + 1;

          if (first.explanation.trim()) {
            const reasons = question.firstChoiceReasons[first.optionId] ||= [];
            reasons.push({
              participantLabel: shortParticipantId(row.participant_id),
              text: first.explanation,
            });
          }
        }
      }
    }

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      tests,
      runs,
      totalStoredRuns: rows.length,
    });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}

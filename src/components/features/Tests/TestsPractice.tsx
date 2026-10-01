'use client';

import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TESTS, TESTS_BY_ID } from '@/lib/tests/bank';
import { loadRuns, participantId, saveRun, syncRun, syncSavedRuns } from '@/lib/tests/client';
import type {
  PracticeAttempt,
  PracticeQuestionState,
  PracticeRun,
  TestOption,
} from '@/lib/tests/types';
import { IconArrowRight, IconBook } from '@/components/ui/Icons';

function emptyQuestionState(): PracticeQuestionState {
  return {
    status: 'unanswered',
    attempts: [],
    everRevealed: false,
  };
}

function newRun(testId: string): PracticeRun {
  const test = TESTS_BY_ID[testId];
  return {
    id: crypto.randomUUID(),
    participantId: participantId(),
    testId,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    abandonedAt: null,
    questions: Object.fromEntries(
      test.questions.map((question) => [question.id, emptyQuestionState()])
    ),
  };
}

function hashString(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function orderedOptions(runId: string, questionId: string, options: TestOption[]) {
  return [...options].sort((left, right) => {
    const a = hashString(`${runId}:${questionId}:${left.id}`);
    const b = hashString(`${runId}:${questionId}:${right.id}`);
    return a - b;
  });
}

function completed(state: PracticeQuestionState) {
  return state.status === 'solved' || state.status === 'revealed';
}

export default function TestsPractice() {
  const router = useRouter();
  const [run, setRun] = useState<PracticeRun | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [activeAttemptIndex, setActiveAttemptIndex] = useState<number | null>(null);
  const [teacherAccessOpen, setTeacherAccessOpen] = useState(false);
  const [teacherKey, setTeacherKey] = useState('');
  const [teacherStatus, setTeacherStatus] = useState('');
  const [teacherBusy, setTeacherBusy] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const test = run ? TESTS_BY_ID[run.testId] : null;
  const question = test ? test.questions[questionIndex] : null;
  const questionState = question && run ? run.questions[question.id] : null;

  const options = useMemo(() => {
    if (!run || !question) return [];
    return orderedOptions(run.id, question.id, question.options);
  }, [run?.id, question?.id]);

  useEffect(() => {
    void syncSavedRuns();

    return () => {
      if (syncTimer.current) clearTimeout(syncTimer.current);
    };
  }, []);

  const persist = (next: PracticeRun, immediate = true) => {
    setRun(next);
    saveRun(next);

    if (syncTimer.current) clearTimeout(syncTimer.current);

    if (immediate) {
      void syncRun(next);
      return;
    }

    syncTimer.current = setTimeout(() => {
      void syncRun(next);
    }, 700);
  };

  const startTest = (testId: string) => {
    const next = newRun(testId);
    setQuestionIndex(0);
    setSelectedOptionId(null);
    setActiveAttemptIndex(null);
    persist(next);
  };

  const returnToTests = () => {
    if (run && !run.finishedAt && !run.abandonedAt) {
      const next = { ...run, abandonedAt: new Date().toISOString() };
      saveRun(next);
      void syncRun(next);
    }

    setRun(null);
    setQuestionIndex(0);
    setSelectedOptionId(null);
    setActiveAttemptIndex(null);
  };

  const updateQuestionState = (
    questionId: string,
    updater: (state: PracticeQuestionState) => PracticeQuestionState,
    immediate = true
  ) => {
    if (!run) return;

    const next: PracticeRun = {
      ...run,
      questions: {
        ...run.questions,
        [questionId]: updater(run.questions[questionId]),
      },
    };

    persist(next, immediate);
  };

  const checkAnswer = () => {
    if (!question || !questionState || !selectedOptionId) return;

    const option = question.options.find((item) => item.id === selectedOptionId);
    if (!option) return;

    const attempt: PracticeAttempt = {
      optionId: option.id,
      correct: option.correct,
      explanation: '',
      answeredAt: new Date().toISOString(),
    };

    const nextAttemptIndex = questionState.attempts.length;

    updateQuestionState(question.id, (state) => ({
      ...state,
      status: option.correct ? 'solved' : 'in_progress',
      attempts: [...state.attempts, attempt],
    }));

    setActiveAttemptIndex(nextAttemptIndex);
    setSelectedOptionId(null);
  };

  const updateExplanation = (value: string) => {
    if (!question || !questionState || activeAttemptIndex === null || !run) return;

    const attempts = questionState.attempts.map((attempt, index) =>
      index === activeAttemptIndex ? { ...attempt, explanation: value } : attempt
    );

    const next: PracticeRun = {
      ...run,
      questions: {
        ...run.questions,
        [question.id]: {
          ...questionState,
          attempts,
        },
      },
    };

    persist(next, false);
  };

  const revealAnswer = () => {
    if (!question || !questionState) return;

    updateQuestionState(question.id, (state) => ({
      ...state,
      status: 'revealed',
      everRevealed: true,
    }));
  };

  const nextQuestion = () => {
    if (!test || !run) return;

    if (questionIndex < test.questions.length - 1) {
      setQuestionIndex((value) => value + 1);
      setSelectedOptionId(null);
      setActiveAttemptIndex(null);
      return;
    }

    const next = {
      ...run,
      finishedAt: new Date().toISOString(),
    };
    persist(next);
    setQuestionIndex(test.questions.length);
    setSelectedOptionId(null);
    setActiveAttemptIndex(null);
  };

  const handleTeacherLogin = async (event: FormEvent) => {
    event.preventDefault();
    setTeacherStatus('');

    if (!teacherKey.trim()) {
      setTeacherStatus('Escribe la clave.');
      return;
    }

    setTeacherBusy(true);

    try {
      const response = await fetch('/api/tests/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: teacherKey }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setTeacherStatus(data.error || 'No se pudo iniciar.');
        return;
      }

      router.push('/tests/docente');
    } catch {
      setTeacherStatus('Este acceso no está disponible en este entorno.');
    } finally {
      setTeacherBusy(false);
    }
  };

  const renderFooter = () => (
    <footer className="mt-16 border-t border-gray-700 pt-4 pb-2 flex flex-wrap items-start gap-4 text-xs text-[#7f8b9c]">
      <span>Epistemología y Metodología</span>
      <button
        type="button"
        onClick={() => {
          setTeacherAccessOpen((value) => !value);
          setTeacherStatus('');
        }}
        className="ml-auto text-[10px] uppercase tracking-[0.08em] text-gray-600 underline underline-offset-4 hover:text-gray-300"
      >
        Debug
      </button>

      {teacherAccessOpen && (
        <form
          onSubmit={handleTeacherLogin}
          className="w-full border-t border-gray-700 pt-3"
        >
          <div className="flex flex-wrap gap-2">
            <input
              type="password"
              value={teacherKey}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setTeacherKey(event.target.value)}
              autoComplete="current-password"
              aria-label="Clave"
              className="min-w-[240px] max-w-sm flex-1 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={teacherBusy}
              className="rounded-lg border border-gray-600 px-3 py-2 text-[10px] uppercase tracking-[0.06em] text-gray-300 hover:border-gray-500 hover:text-white disabled:opacity-50"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => {
                setTeacherAccessOpen(false);
                setTeacherStatus('');
              }}
              className="rounded-lg border border-gray-600 px-3 py-2 text-[10px] uppercase tracking-[0.06em] text-gray-300 hover:border-gray-500 hover:text-white"
            >
              Cerrar
            </button>
          </div>
          {teacherStatus && (
            <p className="mt-2 text-xs text-red-300">{teacherStatus}</p>
          )}
        </form>
      )}
    </footer>
  );

  if (!run || !test) {
    const latestByTest = new Map<string, PracticeRun>();
    for (const saved of [...loadRuns()].reverse()) {
      if (!latestByTest.has(saved.testId)) latestByTest.set(saved.testId, saved);
    }

    return (
      <div className="mx-auto max-w-5xl py-4 md:py-10">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="flex justify-center mb-6 text-teal-400/45">
            <IconBook size={44} />
          </div>
          <p className="section-label mb-3">Práctica formativa</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Preguntas de práctica
          </h1>
          <p className="mt-5 text-base text-gray-400">
            Preguntas breves para revisar los contenidos de cada clase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTS.map((item) => {
            const previous = latestByTest.get(item.id);
            const previousCompleted = Boolean(previous?.finishedAt);

            return (
              <article
                key={item.id}
                className="min-h-[190px] rounded-xl border border-white/10 bg-gray-900/45 p-6 backdrop-blur-sm flex flex-col hover:border-teal-400/35 hover:bg-gray-900/65 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="section-label">{item.title}</span>
                  <span className="text-xs text-gray-500">
                    {item.questions.length} preguntas
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {item.title.replace(/^Sesión \d+ · /, '')}
                </h2>

                <div className="mt-auto pt-7 flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-500">
                    {previousCompleted ? 'Práctica realizada anteriormente' : 'Sin calificación'}
                  </span>
                  <button
                    type="button"
                    onClick={() => startTest(item.id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-800/70 px-4 py-2 text-sm font-medium text-gray-200 hover:border-teal-400/40 hover:text-teal-200"
                  >
                    Comenzar
                    <IconArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {renderFooter()}
      </div>
    );
  }

  if (questionIndex >= test.questions.length) {
    const states = Object.values(run.questions);
    const solved = states.filter((state) => state.status === 'solved').length;
    const revealed = states.filter((state) => state.everRevealed).length;
    const attempts = states.reduce((count, state) => count + state.attempts.length, 0);

    return (
      <div className="mx-auto max-w-3xl py-4 md:py-10">
        <p className="section-label mb-3">Práctica completada</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
          {test.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
          <div className="rounded-xl border border-white/10 bg-gray-900/45 p-5">
            <strong className="font-display text-3xl text-white">{solved}</strong>
            <span className="mt-1 block text-xs uppercase tracking-[0.08em] text-gray-500">
              Resueltas sin solución
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-900/45 p-5">
            <strong className="font-display text-3xl text-white">{revealed}</strong>
            <span className="mt-1 block text-xs uppercase tracking-[0.08em] text-gray-500">
              Soluciones consultadas
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-900/45 p-5">
            <strong className="font-display text-3xl text-white">{attempts}</strong>
            <span className="mt-1 block text-xs uppercase tracking-[0.08em] text-gray-500">
              Intentos
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={returnToTests}
            className="rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-sm text-gray-300 hover:border-gray-500 hover:text-white"
          >
            Volver a práctica
          </button>
          <button
            type="button"
            onClick={() => startTest(test.id)}
            className="rounded-lg bg-teal-400 px-4 py-2 text-sm font-semibold text-[#04211f] hover:bg-teal-300"
          >
            Practicar de nuevo
          </button>
        </div>

        {renderFooter()}
      </div>
    );
  }

  if (!question || !questionState) return null;

  const wrongOptionIds = new Set(
    questionState.attempts
      .filter((attempt) => !attempt.correct)
      .map((attempt) => attempt.optionId)
  );
  const resolved = completed(questionState);
  const latestAttempt = activeAttemptIndex === null
    ? questionState.attempts.at(-1)
    : questionState.attempts[activeAttemptIndex];
  const feedbackOption = latestAttempt
    ? question.options.find((option) => option.id === latestAttempt.optionId)
    : null;
  const correctOption = question.options.find((option) => option.correct);

  return (
    <div className="mx-auto max-w-4xl py-2 md:py-6">
      <header className="border-b border-gray-700 pb-5 mb-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="section-label">{test.title}</p>
            <h1 className="font-display text-3xl font-bold text-white mt-1">
              {test.title.replace(/^Sesión \d+ · /, '')}
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Pregunta {questionIndex + 1} de {test.questions.length}
            </p>
          </div>
          <button
            type="button"
            onClick={returnToTests}
            className="text-sm text-gray-400 hover:text-teal-300"
          >
            Volver a práctica
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {test.questions.map((item, index) => {
            const state = run.questions[item.id];
            const current = index === questionIndex;
            const done = completed(state);

            return (
              <span
                key={item.id}
                className={`grid h-8 w-8 place-items-center rounded-md border text-xs font-semibold ${
                  current
                    ? 'border-teal-400/50 bg-teal-400/10 text-teal-200'
                    : done
                      ? 'border-teal-400/20 text-teal-100'
                      : 'border-gray-700 text-gray-500'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            );
          })}
        </div>
      </header>

      <section className="rounded-xl border border-gray-700/70 bg-gray-800/30 p-5 md:p-7">
        <h2 className="measure text-2xl md:text-[1.7rem] font-semibold leading-snug tracking-tight text-white">
          {question.text}
        </h2>

        <div className="mt-6 grid gap-2.5">
          {options.map((option, index) => {
            const wrong = wrongOptionIds.has(option.id);
            const correct = resolved && option.correct;
            const selected = selectedOptionId === option.id;
            const disabled = resolved || wrong;

            return (
              <button
                key={option.id}
                type="button"
                disabled={disabled}
                onClick={() => setSelectedOptionId(option.id)}
                className={`grid grid-cols-[28px_1fr] gap-3 rounded-lg border px-4 py-3 text-left leading-relaxed transition-colors ${
                  correct
                    ? 'border-teal-400/60 bg-teal-400/10 text-teal-50'
                    : wrong
                      ? 'border-red-400/60 bg-red-400/10 text-red-100'
                      : selected
                        ? 'border-teal-400 bg-teal-400/10 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:text-white'
                }`}
              >
                <span className="grid h-6 w-6 place-items-center rounded-md border border-current text-[10px] font-semibold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option.text}</span>
              </button>
            );
          })}
        </div>

        {feedbackOption && latestAttempt && (
          <div
            className={`measure mt-5 rounded-lg border px-4 py-3 text-sm leading-relaxed ${
              latestAttempt.correct
                ? 'border-teal-400/30 bg-teal-400/10 text-gray-200'
                : 'border-red-400/30 bg-red-400/10 text-gray-200'
            }`}
          >
            <strong className="block text-white mb-1">
              {latestAttempt.correct ? 'Correcta.' : 'Incorrecta.'}
            </strong>
            <p>{feedbackOption.feedback}</p>
          </div>
        )}

        {latestAttempt && activeAttemptIndex !== null && (
          <div className="measure mt-4 rounded-lg border border-white/10 bg-gray-900/35 p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <label htmlFor="student-explanation" className="text-sm font-medium text-gray-200">
                ¿Por qué elegiste esa alternativa?
              </label>
              <span className="text-[10px] uppercase tracking-[0.08em] text-gray-500">
                Opcional
              </span>
            </div>
            <textarea
              id="student-explanation"
              rows={3}
              maxLength={2000}
              value={latestAttempt.explanation}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateExplanation(event.target.value)}
              onBlur={() => run && void syncRun(run)}
              placeholder="Explícalo con tus palabras"
              className="w-full resize-y rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm leading-relaxed text-white placeholder:text-gray-600 focus:border-teal-400"
            />
          </div>
        )}

        {questionState.status === 'revealed' && correctOption && (
          <div className="measure mt-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm leading-relaxed text-gray-200">
            <strong className="block text-amber-200 mb-1">Respuesta correcta</strong>
            <p className="text-white">{correctOption.text}</p>
            <p className="mt-1">{correctOption.feedback}</p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            {!resolved && questionState.attempts.length > 0 && (
              <button
                type="button"
                onClick={revealAnswer}
                className="text-sm text-gray-400 underline underline-offset-4 hover:text-amber-200"
              >
                Mostrar respuesta
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {!resolved && (
              <button
                type="button"
                disabled={!selectedOptionId}
                onClick={checkAnswer}
                className="rounded-lg bg-teal-400 px-4 py-2 text-sm font-semibold text-[#04211f] hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
              >
                Comprobar
              </button>
            )}

            {resolved && (
              <button
                type="button"
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 text-sm font-semibold text-[#04211f] hover:bg-teal-300"
              >
                {questionIndex === test.questions.length - 1 ? 'Ver cierre' : 'Siguiente'}
                <IconArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {renderFooter()}
    </div>
  );
}

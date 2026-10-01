'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TESTS, TESTS_BY_ID } from '@/lib/tests/bank';
import type { PracticeRun } from '@/lib/tests/types';

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

interface RunSummary {
  id: string;
  participantId: string;
  participantLabel: string;
  testId: string;
  startedAt: string;
  finishedAt: string | null;
  abandonedAt: string | null;
  updatedAt: string;
  status: 'completed' | 'active' | 'abandoned';
  completedQuestions: number;
  totalQuestions: number;
  attempts: number;
  revealed: number;
  explanations: number;
}

interface DashboardData {
  generatedAt: string;
  tests: Record<string, TestStats>;
  runs: RunSummary[];
  totalStoredRuns: number;
}

interface RunDetail {
  id: string;
  participantId: string;
  testId: string;
  startedAt: string;
  finishedAt: string | null;
  abandonedAt: string | null;
  updatedAt: string;
  payload: PracticeRun;
}

function percent(value: number, total: number) {
  if (!total) return '0 %';
  return `${Math.round((value / total) * 100)} %`;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString('es-CL');
}

export default function TeacherDashboard() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [view, setView] = useState<'all' | string>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [details, setDetails] = useState<RunDetail[]>([]);
  const [detailLoading, setDetailLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/tests/admin/data', { cache: 'no-store' });
      if (response.status === 401) {
        router.replace('/');
        return;
      }

      const next = await response.json();
      if (!response.ok) throw new Error(next.error || 'No se pudieron cargar los datos.');
      setData(next);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'No se pudieron cargar los datos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, []);

  const logout = async () => {
    await fetch('/api/tests/admin/logout', { method: 'POST' }).catch(() => null);
    router.replace('/');
  };

  const participantRows = useMemo(() => {
    if (!data) return [];

    const map = new Map<
      string,
      { id: string; label: string; runs: Record<string, RunSummary> }
    >();

    for (const run of data.runs) {
      let person = map.get(run.participantId);
      if (!person) {
        person = {
          id: run.participantId,
          label: run.participantLabel,
          runs: {},
        };
        map.set(run.participantId, person);
      }
      person.runs[run.testId] = run;
    }

    return [...map.values()];
  }, [data]);

  const openParticipant = async (participantId: string) => {
    if (!data) return;

    const summaries = data.runs.filter(
      (run) =>
        run.participantId === participantId &&
        (view === 'all' || run.testId === view)
    );

    setSelectedParticipant(participantId);
    setDetailLoading(true);
    setDetails([]);

    try {
      const responses = await Promise.all(
        summaries.map(async (summary) => {
          const response = await fetch(
            `/api/tests/admin/run?id=${encodeURIComponent(summary.id)}`,
            { cache: 'no-store' }
          );
          const body = await response.json();
          if (!response.ok) throw new Error(body.error || 'No se pudo cargar la práctica.');
          return body as RunDetail;
        })
      );
      setDetails(responses);
    } catch (detailError) {
      setError(
        detailError instanceof Error
          ? detailError.message
          : 'No se pudo cargar la práctica.'
      );
    } finally {
      setDetailLoading(false);
    }
  };

  const renderQuestion = (testId: string, questionId: string, index: number) => {
    const test = TESTS_BY_ID[testId];
    const question = test.questions.find((item) => item.id === questionId);
    const stats = data?.tests[testId]?.questions[questionId];

    if (!question) return null;

    const responded = stats?.responded || 0;
    const firstCorrect = stats?.firstAttemptCorrect || 0;

    return (
      <details
        key={question.id}
        className="border-t border-gray-700/70 last:border-b"
      >
        <summary className="grid cursor-pointer list-none grid-cols-1 gap-3 py-4 lg:grid-cols-[minmax(0,2fr)_110px_110px_110px] lg:items-center">
          <div className="grid min-w-0 grid-cols-[34px_1fr] gap-3">
            <span className="pt-0.5 text-[10px] font-semibold tracking-[0.08em] text-teal-300">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <strong className="block text-sm font-medium leading-snug text-white">
                {question.text}
              </strong>
            </div>
          </div>
          <div>
            <strong className="block text-sm font-medium text-white">{responded}</strong>
            <span className="text-[9px] uppercase tracking-[0.05em] text-gray-500">
              Respondieron
            </span>
          </div>
          <div>
            <strong className="block text-sm font-medium text-white">
              {percent(firstCorrect, responded)}
            </strong>
            <span className="text-[9px] uppercase tracking-[0.05em] text-gray-500">
              Acierto inicial
            </span>
          </div>
          <div>
            <strong className="block text-sm font-medium text-white">
              {stats?.revealed || 0}
            </strong>
            <span className="text-[9px] uppercase tracking-[0.05em] text-gray-500">
              Soluciones
            </span>
          </div>
        </summary>

        <div className="pb-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-700 bg-gray-700 md:grid-cols-4">
            {[
              ['Primera respuesta correcta', firstCorrect],
              ['Resueltas', stats?.resolved || 0],
              ['Intentos', stats?.totalAttempts || 0],
              ['Explicaciones', stats?.explanationCount || 0],
            ].map(([label, value]) => (
              <div key={String(label)} className="bg-gray-900/80 p-3">
                <span className="block text-[9px] uppercase tracking-[0.07em] text-gray-500">
                  {label}
                </span>
                <strong className="mt-1 block text-lg font-medium text-white">
                  {value}
                </strong>
              </div>
            ))}
          </div>

          <p className="mt-6 mb-2 text-xs font-medium text-gray-300">
            Distribución de la primera respuesta
          </p>

          <div className="space-y-2">
            {question.options.map((option) => {
              const count = stats?.firstChoiceCounts?.[option.id] || 0;
              const reasons = stats?.firstChoiceReasons?.[option.id] || [];

              return (
                <details
                  key={option.id}
                  className={`overflow-hidden rounded-lg border ${
                    option.correct
                      ? 'border-teal-400/25'
                      : 'border-white/10'
                  }`}
                >
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 hover:bg-gray-800/35">
                    <div className="text-sm leading-relaxed text-gray-300">
                      {option.text}
                      {option.correct && (
                        <span className="ml-2 text-[9px] uppercase tracking-[0.07em] text-teal-300">
                          Clave
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-3 whitespace-nowrap">
                      <strong className="text-sm text-white">{count}</strong>
                      <span className="text-xs text-gray-500">
                        {percent(count, responded)}
                      </span>
                    </div>
                  </summary>

                  <div className="border-t border-gray-700 px-4 py-2">
                    {reasons.length ? (
                      reasons.map((reason, reasonIndex) => (
                        <div
                          key={`${reason.participantLabel}-${reasonIndex}`}
                          className="grid grid-cols-[78px_1fr] gap-3 border-b border-gray-800 py-3 last:border-b-0"
                        >
                          <span className="text-[10px] text-gray-500">
                            {reason.participantLabel}
                          </span>
                          <p className="text-sm leading-relaxed text-gray-300">
                            {reason.text}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="py-2 text-xs text-gray-500">
                        No hay explicaciones escritas para esta alternativa.
                      </p>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </details>
    );
  };

  const renderParticipantDetail = () => {
    if (!selectedParticipant) return null;

    const person = participantRows.find((item) => item.id === selectedParticipant);
    if (!person) return null;

    return (
      <section className="mt-10 border border-teal-400/20 bg-gray-900/40 rounded-xl overflow-hidden">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-700 p-5">
          <div>
            <p className="section-label">Participante {person.label}</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Recorrido de respuesta</h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedParticipant(null);
              setDetails([]);
            }}
            className="rounded-lg border border-gray-600 px-3 py-2 text-xs text-gray-300 hover:text-white"
          >
            Cerrar detalle
          </button>
        </header>

        <div className="p-4">
          {detailLoading && (
            <p className="py-5 text-sm text-gray-400">Cargando detalle...</p>
          )}

          {!detailLoading && details.length === 0 && (
            <p className="py-5 text-sm text-gray-500">No hay prácticas para esta vista.</p>
          )}

          {details.map((detail) => {
            const test = TESTS_BY_ID[detail.testId];
            if (!test) return null;

            return (
              <details
                key={detail.id}
                open
                className="mb-3 overflow-hidden rounded-lg border border-gray-700"
              >
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-gray-200">
                  {test.title}
                </summary>
                <div className="border-t border-gray-700 px-4">
                  {test.questions.map((question, questionIndex) => {
                    const state = detail.payload.questions[question.id];
                    const attempts = state?.attempts || [];

                    return (
                      <div
                        key={question.id}
                        className="border-b border-gray-800 py-4 last:border-b-0"
                      >
                        <strong className="text-sm text-gray-200">
                          Pregunta {questionIndex + 1}
                        </strong>
                        <p className="mt-1 text-sm leading-relaxed text-gray-400">
                          {question.text}
                        </p>

                        {attempts.length ? (
                          <div className="mt-3 space-y-3">
                            {attempts.map((attempt, attemptIndex) => {
                              const option = question.options.find(
                                (item) => item.id === attempt.optionId
                              );

                              return (
                                <div key={`${question.id}-${attemptIndex}`}>
                                  <div className="flex flex-wrap items-start justify-between gap-3 text-xs">
                                    <span className="text-gray-300">
                                      Intento {attemptIndex + 1} · {option?.text || attempt.optionId}
                                    </span>
                                    <span
                                      className={
                                        attempt.correct ? 'text-teal-300' : 'text-red-300'
                                      }
                                    >
                                      {attempt.correct ? 'Correcta' : 'Incorrecta'}
                                    </span>
                                  </div>
                                  {attempt.explanation.trim() && (
                                    <p className="mt-2 border-l-2 border-gray-600 pl-3 text-sm leading-relaxed text-gray-400">
                                      {attempt.explanation}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="mt-2 text-xs text-gray-600">Sin respuesta registrada.</p>
                        )}

                        {state?.everRevealed && (
                          <p className="mt-2 text-xs text-amber-200">Solución consultada</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b1017] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-sm text-gray-400">
          Cargando respuestas...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1017] text-white">
      <header className="border-b border-gray-700 bg-gray-900">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-5">
          <div className="text-sm font-semibold text-white">
            Epistemología y Metodología
            <span className="ml-2 font-normal text-gray-500">Respuestas</span>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-lg border border-gray-600 px-3 py-2 text-xs text-gray-400 hover:text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <section className="flex flex-wrap items-end justify-between gap-5 border-b border-gray-700 pb-6">
          <div>
            <p className="section-label">Estado actual</p>
            <h1 className="font-display mt-1 text-4xl md:text-5xl font-bold tracking-tight text-white">
              Respuestas
            </h1>
            {data && (
              <p className="mt-2 text-xs text-gray-500">
                Actualizado {formatDate(data.generatedAt)}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => void loadData()}
            className="rounded-lg border border-gray-600 px-3 py-2 text-xs text-gray-300 hover:text-white"
          >
            Actualizar
          </button>
        </section>

        {error && (
          <p className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
            {error}
          </p>
        )}

        <nav className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView('all')}
            className={`rounded-lg border px-3 py-2 text-xs ${
              view === 'all'
                ? 'border-teal-400/40 bg-teal-400/10 text-teal-200'
                : 'border-gray-700 text-gray-400 hover:text-white'
            }`}
          >
            Vista general
          </button>
          {TESTS.map((test) => (
            <button
              key={test.id}
              type="button"
              onClick={() => setView(test.id)}
              className={`rounded-lg border px-3 py-2 text-xs ${
                view === test.id
                  ? 'border-teal-400/40 bg-teal-400/10 text-teal-200'
                  : 'border-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {test.title}
            </button>
          ))}
        </nav>

        <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {TESTS.map((test) => {
            const stats = data?.tests[test.id];
            return (
              <article
                key={test.id}
                className="rounded-xl border border-white/10 bg-gray-900/45 p-4"
              >
                <strong className="block text-sm text-white">{test.title}</strong>
                <div className="mt-3 space-y-1 text-xs text-gray-500">
                  <p>{stats?.participants || 0} participantes</p>
                  <p>{stats?.completed || 0} completaron</p>
                  <p>{stats?.explanationCount || 0} explicaciones escritas</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-8 rounded-xl border border-gray-700/70 bg-gray-900/30 overflow-hidden">
          <header className="border-b border-gray-700 p-5">
            <h2 className="text-lg font-semibold text-white">
              {view === 'all' ? 'Todas las preguntas' : TESTS_BY_ID[view]?.title}
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              La distribución principal usa solo la primera respuesta de cada participante.
            </p>
          </header>

          <div className="px-5 pb-5">
            {(view === 'all' ? TESTS : [TESTS_BY_ID[view]]).map((test) => (
              <div key={test.id}>
                {view === 'all' && (
                  <h3 className="pt-6 pb-1 text-xs font-semibold tracking-[0.05em] text-teal-300">
                    {test.title}
                  </h3>
                )}
                {test.questions.map((question, index) =>
                  renderQuestion(test.id, question.id, index)
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-gray-700/70 bg-gray-900/30 overflow-hidden">
          <header className="border-b border-gray-700 p-5">
            <h2 className="text-lg font-semibold text-white">Participantes</h2>
            <p className="mt-1 text-xs text-gray-500">
              {view === 'all'
                ? 'Vista integrada de los cuatro tests.'
                : 'Selecciona una fila para revisar el recorrido de respuesta.'}
            </p>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-xs">
              <thead>
                <tr className="text-left text-[9px] uppercase tracking-[0.07em] text-gray-500">
                  <th className="border-b border-gray-700 px-4 py-3">ID</th>
                  {view === 'all' ? (
                    TESTS.map((test) => (
                      <th key={test.id} className="border-b border-gray-700 px-4 py-3">
                        {test.title}
                      </th>
                    ))
                  ) : (
                    <>
                      <th className="border-b border-gray-700 px-4 py-3">Avance</th>
                      <th className="border-b border-gray-700 px-4 py-3">Intentos</th>
                      <th className="border-b border-gray-700 px-4 py-3">Explicaciones</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {participantRows
                  .filter((person) => view === 'all' || person.runs[view])
                  .map((person) => (
                    <tr
                      key={person.id}
                      onClick={() => void openParticipant(person.id)}
                      className="cursor-pointer hover:bg-gray-800/30"
                    >
                      <td className="border-b border-gray-800 px-4 py-3 font-medium text-gray-200">
                        {person.label}
                      </td>
                      {view === 'all' ? (
                        TESTS.map((test) => {
                          const run = person.runs[test.id];
                          return (
                            <td key={test.id} className="border-b border-gray-800 px-4 py-3 text-gray-400">
                              {run ? (
                                <>
                                  <span className="block text-gray-300">
                                    {run.completedQuestions} de {run.totalQuestions}
                                  </span>
                                  <span className="mt-1 block text-[10px] text-gray-600">
                                    {run.explanations} explicaciones
                                  </span>
                                </>
                              ) : (
                                'Sin intento'
                              )}
                            </td>
                          );
                        })
                      ) : (
                        <>
                          <td className="border-b border-gray-800 px-4 py-3 text-gray-400">
                            {person.runs[view].completedQuestions} de {person.runs[view].totalQuestions}
                          </td>
                          <td className="border-b border-gray-800 px-4 py-3 text-gray-400">
                            {person.runs[view].attempts}
                          </td>
                          <td className="border-b border-gray-800 px-4 py-3 text-gray-400">
                            {person.runs[view].explanations}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {renderParticipantDetail()}
      </div>
    </main>
  );
}

import type { PracticeRun } from './types';

const PARTICIPANT_KEY = 'episte-participant';
const RUNS_KEY = 'episte-test-runs';

export function participantId(): string {
  if (typeof window === 'undefined') return '';

  let id = window.localStorage.getItem(PARTICIPANT_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(PARTICIPANT_KEY, id);
  }

  return id;
}

export function loadRuns(): PracticeRun[] {
  if (typeof window === 'undefined') return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(RUNS_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveRun(run: PracticeRun) {
  if (typeof window === 'undefined') return;

  const runs = loadRuns();
  const index = runs.findIndex((item) => item.id === run.id);

  if (index >= 0) runs[index] = run;
  else runs.push(run);

  window.localStorage.setItem(RUNS_KEY, JSON.stringify(runs));
}

export async function syncRun(run: PracticeRun) {
  saveRun(run);

  try {
    await fetch('/api/tests/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ participantId: run.participantId, run }),
      keepalive: true,
    });
  } catch {
    // El almacenamiento local conserva el intento para un próximo sync.
  }
}

export async function syncSavedRuns() {
  const runs = loadRuns();
  await Promise.allSettled(runs.map((run) => syncRun(run)));
}

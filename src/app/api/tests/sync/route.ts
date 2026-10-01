import { NextRequest, NextResponse } from 'next/server';
import { apiError, sanitizeRun, testsDb } from '@/lib/tests/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const participantId = typeof body?.participantId === 'string'
      ? body.participantId.trim()
      : '';

    if (!participantId || participantId.length > 128) {
      return NextResponse.json({ error: 'Participante no válido.' }, { status: 400 });
    }

    const run = sanitizeRun(participantId, body?.run);
    const sql = await testsDb();
    const payload = JSON.stringify(run);

    await sql`
      INSERT INTO epistemologia_test_runs
        (id, participant_id, test_id, started_at, finished_at, abandoned_at, payload, updated_at)
      VALUES
        (${run.id}, ${run.participantId}, ${run.testId}, ${run.startedAt}, ${run.finishedAt}, ${run.abandonedAt}, ${payload}::jsonb, NOW())
      ON CONFLICT (id) DO UPDATE SET
        participant_id = EXCLUDED.participant_id,
        test_id = EXCLUDED.test_id,
        started_at = EXCLUDED.started_at,
        finished_at = EXCLUDED.finished_at,
        abandoned_at = EXCLUDED.abandoned_at,
        payload = EXCLUDED.payload,
        updated_at = NOW()
    `;

    return NextResponse.json({ ok: true, runId: run.id });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}

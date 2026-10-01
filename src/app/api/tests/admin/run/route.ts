import { NextRequest, NextResponse } from 'next/server';
import {
  apiError,
  isAdminTokenValid,
  TESTS_ADMIN_COOKIE,
  testsDb,
} from '@/lib/tests/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(TESTS_ADMIN_COOKIE)?.value;
    if (!isAdminTokenValid(token)) {
      return NextResponse.json({ error: 'Sesión docente no iniciada.' }, { status: 401 });
    }

    const id = request.nextUrl.searchParams.get('id') || '';
    if (!id || id.length > 128) {
      return NextResponse.json({ error: 'Práctica no válida.' }, { status: 400 });
    }

    const sql = await testsDb();
    const rows = await sql`
      SELECT id, participant_id, test_id, started_at, finished_at, abandoned_at, updated_at, payload
      FROM epistemologia_test_runs
      WHERE id = ${id}
      LIMIT 1
    `;

    if (!rows.length) {
      return NextResponse.json({ error: 'Práctica no encontrada.' }, { status: 404 });
    }

    const row = rows[0];
    return NextResponse.json({
      id: row.id,
      participantId: row.participant_id,
      testId: row.test_id,
      startedAt: new Date(row.started_at).toISOString(),
      finishedAt: row.finished_at ? new Date(row.finished_at).toISOString() : null,
      abandonedAt: row.abandoned_at ? new Date(row.abandoned_at).toISOString() : null,
      updatedAt: new Date(row.updated_at).toISOString(),
      payload: row.payload,
    });
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}

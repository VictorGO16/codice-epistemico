import { NextRequest, NextResponse } from 'next/server';
import {
  apiError,
  checkAdminKey,
  issueAdminToken,
  TESTS_ADMIN_COOKIE,
} from '@/lib/tests/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const key = typeof body?.key === 'string' ? body.key : '';

    if (!key || !checkAdminKey(key)) {
      return NextResponse.json({ error: 'Clave incorrecta.' }, { status: 401 });
    }

    const session = issueAdminToken();
    const response = NextResponse.json({ ok: true });

    response.cookies.set(TESTS_ADMIN_COOKIE, session.token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL),
      maxAge: session.maxAge,
      path: '/',
    });

    return response;
  } catch (error) {
    const result = apiError(error);
    return NextResponse.json({ error: result.message }, { status: result.status });
  }
}

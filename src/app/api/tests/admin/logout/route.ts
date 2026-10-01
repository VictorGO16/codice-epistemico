import { NextResponse } from 'next/server';
import { TESTS_ADMIN_COOKIE } from '@/lib/tests/server';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(TESTS_ADMIN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL),
    maxAge: 0,
    path: '/',
  });
  return response;
}

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import TeacherDashboard from '@/components/features/Tests/TeacherDashboard';
import { isAdminTokenValid, TESTS_ADMIN_COOKIE } from '@/lib/tests/server';

export const metadata: Metadata = {
  title: 'Respuestas · Epistemología y Metodología',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TeacherTestsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(TESTS_ADMIN_COOKIE)?.value;

  if (!isAdminTokenValid(token)) redirect('/');

  return (
    <div className="h-dvh w-full overflow-y-auto overscroll-y-contain">
      <TeacherDashboard />
    </div>
  );
}

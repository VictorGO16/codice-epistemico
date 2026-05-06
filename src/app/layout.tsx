import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "El Códice Epistémico",
  description: "Explora la filosofía de la ciencia y psicología a través de una interfaz interactiva. Conversa con grandes pensadores, simula debates filosóficos y analiza paradigmas científicos.",
  keywords: "filosofía, ciencia, psicología, epistemología, paradigmas, debates filosóficos",
  authors: [{ name: "El Códice Epistémico" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-900 text-white`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

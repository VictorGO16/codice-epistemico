import type { GlossaryEntry } from '@/types/philosophical';
import { glossary } from './corpus';

export type { GlossaryEntry };

/**
 * Términos que se marcan en el texto con [[clave]] o [[clave|texto visible]].
 * Cada módulo del corpus aporta los suyos y aquí se consultan.
 */
export { glossary };

export function getGlossaryEntry(key: string): GlossaryEntry | undefined {
  return glossary[key];
}

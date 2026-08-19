import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

import * as antiguedad from './01-antiguedad';
import * as revolucion from './02-revolucion-cientifica';
import * as modernidad from './03-racionalismo-empirismo';
import * as criticismo from './04-kant-hegel';
import * as sospecha from './05-sospecha-y-conciencia';
import * as cienciaSiglo20 from './06-filosofia-de-la-ciencia';
import * as contemporaneos from './07-poder-y-construccion';
import * as cognicion from './08-cognicion-y-metodos';

/* ==========================================================================
   El corpus se agrupa por cadenas de transmisión, es decir, tramos que llevan
   un mismo problema adelante, y no por siglo suelto: Kant no se escribe bien
   sin Hume a la vista.

   Cada módulo exporta `expositions`, `voices` y `glossary`.
   ========================================================================== */

const modules = [
  antiguedad,
  revolucion,
  modernidad,
  criticismo,
  sospecha,
  cienciaSiglo20,
  contemporaneos,
  cognicion,
];

export const expositions: Record<string, ConceptExposition> = Object.assign(
  {},
  ...modules.map((m) => m.expositions),
);

export const voices: Record<string, AuthorVoice> = Object.assign(
  {},
  ...modules.map((m) => m.voices),
);

export const glossary: Record<string, GlossaryEntry> = Object.assign(
  {},
  ...modules.map((m) => m.glossary),
);

export function getExposition(conceptId: string): ConceptExposition | undefined {
  return expositions[conceptId];
}

export function getVoice(conceptId: string): AuthorVoice | undefined {
  return voices[conceptId];
}

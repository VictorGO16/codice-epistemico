import { MODEL_WRITER, MODEL_ROUTER } from './models';

/**
 * Cuota por sesión de trabajo.
 *
 * No es un control de acceso: sin cuentas, un contador en el navegador se
 * salta borrando el almacenamiento. Es un techo de costo para el uso normal,
 * y por eso el estado vive en sessionStorage y se reinicia solo.
 */

/** Turnos de diálogo en calidad alta. */
export const DIALOGUE_LIMIT = 5;

/**
 * Debate y análisis comparten una cuota propia, separada de la del diálogo.
 * Una ronda de debate son varias llamadas (una por participante más el
 * moderador) y un análisis es una sola llamada larga, así que se cuenta en
 * operaciones y no en turnos.
 */
export const HEAVY_LIMIT = 3;

export type QuotaKind = 'dialogue' | 'heavy';

export interface Tier {
  /** Modelo que redacta lo que se ve en pantalla. */
  writer: string;
  /** Modelo que comprende y selecciona material. */
  router: string;
  /** Esta operación ya sale en calidad reducida. */
  degraded: boolean;
  /** Operaciones de calidad alta consumidas antes de esta. */
  used: number;
  limit: number;
  /** Cuántas de calidad alta quedarán después de esta. */
  remaining: number;
  /** Después de esta queda exactamente una. */
  warn: boolean;
}

export function limitFor(kind: QuotaKind): number {
  return kind === 'dialogue' ? DIALOGUE_LIMIT : HEAVY_LIMIT;
}

/**
 * @param used Operaciones de calidad alta ya consumidas, sin contar la actual.
 */
export function resolveTier(used: number, kind: QuotaKind = 'dialogue'): Tier {
  const limit = limitFor(kind);
  const safeUsed = Number.isFinite(used) && used > 0 ? Math.floor(used) : 0;
  const degraded = safeUsed >= limit;
  const remaining = degraded ? 0 : limit - safeUsed - 1;

  return {
    writer: degraded ? MODEL_ROUTER : MODEL_WRITER,
    router: MODEL_ROUTER,
    degraded,
    used: safeUsed,
    limit,
    remaining,
    warn: !degraded && remaining === 1,
  };
}

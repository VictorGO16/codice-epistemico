/**
 * Feature flags de la aplicación.
 *
 * Debate competitivo:
 * - false: oculta y deja de pedir métricas, puntuaciones y conclusiones de "ganador".
 * - true: restaura la experiencia evaluativa original.
 *
 * Mantener este flag como booleano estático permite cambiar el comportamiento
 * desde código sin depender de variables de entorno ni de configuración externa.
 */
export const SHOW_DEBATE_METRICS_AND_WINNER = false;

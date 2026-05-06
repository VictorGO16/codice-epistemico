'use client';

import React from 'react';

/**
 * Códice — sistema de iconos de línea (1.25px stroke)
 * Sin emojis. Todos los iconos heredan currentColor y se controlan con tamaño/clase.
 */
type IconProps = {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
};

const base = (size: number | string = 18, sw = 1.25): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: sw,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const IconHome = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 10v9h12v-9" />
  </svg>
);

export const IconForum = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Dos voces concéntricas (debate)
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M5 7h9a3 3 0 013 3v0a3 3 0 01-3 3h-4l-3 3v-3H5z" />
    <path d="M19 17h-3l-2 2v-2a2 2 0 01-2-2v-1" />
  </svg>
);

export const IconParadigm = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Compás abierto — análisis paradigmático
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="5" r="1.4" />
    <path d="M12 6.4v3" />
    <path d="M12 9.4l-5 9.6" />
    <path d="M12 9.4l5 9.6" />
    <path d="M8.5 16h7" />
  </svg>
);

export const IconBook = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Códice / página
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3V4z" />
    <path d="M5 17a3 3 0 013-3h10" />
  </svg>
);

export const IconMind = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Órbita — psicología (sin cerebro literal)
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <ellipse cx="12" cy="12" rx="9" ry="4" />
    <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(45 12 12)" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMethod = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Retorta / método científico
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M9 4h6" />
    <path d="M10 4v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V4" />
    <path d="M7.5 14h9" />
  </svg>
);

export const IconDialogue = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Diálogo (ex-oráculo) — voces enfrentadas
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M4 6h9a2 2 0 012 2v4a2 2 0 01-2 2H8l-4 3V6z" />
    <path d="M20 18h-7" />
  </svg>
);

export const IconPerson = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
  </svg>
);

export const IconConcept = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Estrella mínima
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="12" r="2" />
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
  </svg>
);

export const IconScientist = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Sextante
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M3 19h18" />
    <path d="M5 19a8 8 0 0114-5" />
    <path d="M5 19l8-13 6 8" />
  </svg>
);

export const IconArrowRight = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconClose = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M6 6l12 12M18 6l-12 12" />
  </svg>
);

export const IconSearch = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4-4" />
  </svg>
);

export const IconWarning = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v5" />
    <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconScale = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Balanza — moderador / argumentos
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M12 4v16" />
    <path d="M5 8h14" />
    <path d="M5 8l-2 6h4z" />
    <path d="M19 8l-2 6h4z" />
  </svg>
);

export const IconAnalysis = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Diagrama de barras
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-8" />
    <path d="M22 20H2" />
  </svg>
);

export const IconLink = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M10 14a3.5 3.5 0 005 0l3-3a3.5 3.5 0 00-5-5l-1 1" />
    <path d="M14 10a3.5 3.5 0 00-5 0l-3 3a3.5 3.5 0 005 5l1-1" />
  </svg>
);

export const IconLightbulb = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Concepto / idea — sin literal lightbulb
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="10" r="5" />
    <path d="M9 18h6" />
    <path d="M10 21h4" />
  </svg>
);

export const IconEye = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const IconStructure = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Pilares — estructura / paradigma
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M3 6h18" />
    <path d="M5 6v14" />
    <path d="M19 6v14" />
    <path d="M12 6v14" />
    <path d="M3 20h18" />
  </svg>
);

export const IconFlex = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  // Flexibilidad / cambio
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <path d="M4 12c4-8 12-8 16 0" />
    <path d="M4 12c4 8 12 8 16 0" />
  </svg>
);

export const IconTarget = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSettings = ({ size, className, strokeWidth, ...rest }: IconProps) => (
  <svg {...base(size, strokeWidth)} className={className} aria-hidden {...rest}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

/**
 * Mapeo legado: para los puntos del código que aún piden type === 'philosopher' etc.
 */
export const TypeIcon: React.FC<{ type?: string; className?: string; size?: number }> = ({
  type, className, size = 16,
}) => {
  switch (type) {
    case 'philosopher': return <IconPerson size={size} className={className} />;
    case 'scientist':   return <IconScientist size={size} className={className} />;
    case 'concept':     return <IconConcept size={size} className={className} />;
    case 'method':      return <IconMethod size={size} className={className} />;
    default:            return <IconBook size={size} className={className} />;
  }
};

'use client';

import { Fragment, useMemo } from 'react';

interface GlossaryTextProps {
  text: string;
}

const MARK = /\[\[([a-z0-9_]+)(?:\|([^\]]+))?\]\]/gi;

/**
 * Texto plano con términos marcados. Para los campos que no pasan por markdown
 * (tesis, problema, glosas de las nociones), donde EnhancedRichContent metería
 * un párrafo con estilos de artículo que no corresponden.
 */
export default function GlossaryText({ text }: GlossaryTextProps) {
  const parts = useMemo(() => {
    const out: Array<string | { key: string; label: string }> = [];
    let last = 0;
    for (const m of text.matchAll(MARK)) {
      const at = m.index ?? 0;
      if (at > last) out.push(text.slice(last, at));
      out.push({ key: m[1], label: m[2] ?? m[1] });
      last = at + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  }, [text]);

  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <button
            key={i}
            type="button"
            className="glossary-term"
            data-glossary={part.key}
          >
            {part.label}
          </button>
        ),
      )}
    </>
  );
}

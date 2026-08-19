'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useConceptStore } from '@/lib/stores/concept-store';
import { getGlossaryEntry, GlossaryEntry } from '@/lib/data/glossary';

interface Position {
  left: number;
  top: number;
  placement: 'top' | 'bottom';
  arrowLeft: number;
}

const WIDTH = 320;
const GAP = 10;
const MARGIN = 12;
const OPEN_DELAY = 120;
const CLOSE_DELAY = 160;

/**
 * Definiciones al vuelo para los términos marcados con [[clave]] en el corpus.
 *
 * Se monta una sola vez y escucha por delegación, porque el contenido llega
 * como HTML ya renderizado y no como hijos de React.
 */
export default function GlossaryPopover() {
  const [entry, setEntry] = useState<GlossaryEntry | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const [pinned, setPinned] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { setCurrentConcept } = useConceptStore();

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const close = useCallback(() => {
    clearTimers();
    setEntry(null);
    setPosition(null);
    setPinned(false);
  }, []);

  const place = useCallback((trigger: HTMLElement, found: GlossaryEntry) => {
    const rect = trigger.getBoundingClientRect();
    const width = Math.min(WIDTH, window.innerWidth - MARGIN * 2);

    // Centrado sobre el término, pero sin salirse de la pantalla.
    const wanted = rect.left + rect.width / 2 - width / 2;
    const left = Math.max(MARGIN, Math.min(wanted, window.innerWidth - width - MARGIN));

    // Debajo si hay sitio; si no, encima.
    const spaceBelow = window.innerHeight - rect.bottom;
    const placement: 'top' | 'bottom' = spaceBelow > 190 ? 'bottom' : 'top';
    const top = placement === 'bottom' ? rect.bottom + GAP : rect.top - GAP;

    setEntry(found);
    setPosition({
      left,
      top,
      placement,
      arrowLeft: rect.left + rect.width / 2 - left,
    });
  }, []);

  useEffect(() => {
    const triggerOf = (target: EventTarget | null): HTMLElement | null => {
      if (!(target instanceof Element)) return null;
      return target.closest<HTMLElement>('[data-glossary]');
    };

    const onOver = (event: Event) => {
      if (pinned) return;
      const trigger = triggerOf(event.target);
      if (!trigger) return;
      const found = getGlossaryEntry(trigger.dataset.glossary || '');
      if (!found) return;
      clearTimers();
      openTimer.current = window.setTimeout(() => place(trigger, found), OPEN_DELAY);
    };

    const onOut = (event: Event) => {
      if (pinned) return;
      if (!triggerOf(event.target)) return;
      clearTimers();
      closeTimer.current = window.setTimeout(close, CLOSE_DELAY);
    };

    // En pantalla táctil no hay hover: el toque fija el globo.
    const onClick = (event: Event) => {
      const trigger = triggerOf(event.target);
      if (trigger) {
        const found = getGlossaryEntry(trigger.dataset.glossary || '');
        if (found) {
          event.preventDefault();
          clearTimers();
          place(trigger, found);
          setPinned(true);
        }
        return;
      }
      if (panelRef.current?.contains(event.target as Node)) return;
      close();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('focusin', onOver);
    document.addEventListener('focusout', onOut);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);

    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('focusin', onOver);
      document.removeEventListener('focusout', onOut);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
      clearTimers();
    };
  }, [pinned, place, close]);

  if (!entry || !position) return null;

  const width = Math.min(WIDTH, window.innerWidth - MARGIN * 2);

  return (
    <div
      ref={panelRef}
      role="tooltip"
      onMouseEnter={clearTimers}
      onMouseLeave={() => {
        if (!pinned) closeTimer.current = window.setTimeout(close, CLOSE_DELAY);
      }}
      style={{
        position: 'fixed',
        left: position.left,
        top: position.placement === 'bottom' ? position.top : undefined,
        bottom: position.placement === 'top' ? window.innerHeight - position.top : undefined,
        width,
        zIndex: 60,
      }}
      className="rounded-xl border border-white/12 bg-[#131a24] shadow-2xl p-4 animate-[fadeIn_.12s_ease-out]"
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: Math.max(14, Math.min(position.arrowLeft, width - 14)) - 5,
          [position.placement === 'bottom' ? 'top' : 'bottom']: -5,
        }}
        className="w-2.5 h-2.5 rotate-45 bg-[#131a24] border-l border-t border-white/12"
      />

      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-teal-300 font-semibold text-[13.5px]">{entry.term}</span>
        {entry.original && (
          <span className="text-[#7c8899] text-[12.5px]">{entry.original}</span>
        )}
      </div>

      <p className="text-[13.5px] leading-relaxed text-gray-300">{entry.short}</p>

      {entry.conceptId && (
        <button
          onClick={() => {
            setCurrentConcept(entry.conceptId!);
            close();
          }}
          className="mt-3 text-[12.5px] text-teal-400 hover:text-teal-300 transition-colors"
        >
          Ver la ficha completa →
        </button>
      )}
    </div>
  );
}

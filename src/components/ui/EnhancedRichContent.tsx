'use client';

import { useMemo, useEffect, useRef } from 'react';
import { marked } from 'marked';
import 'katex/dist/katex.min.css';

interface EnhancedRichContentProps {
  content: string;
  className?: string;
}

/*
 * Tipografía: las clases prose-* vienen de @tailwindcss/typography. El plugin
 * no estaba instalado, así que no generaban ningún CSS y los párrafos salían
 * pegados sin separación.
 * `rich-content` acota la medida de lectura a 68ch; pasa `rich-content--full`
 * vía className para quitar ese límite, o `rich-content--compact` en chats.
 */

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

export default function EnhancedRichContent({ content, className = '' }: EnhancedRichContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const processedContent = useMemo(() => {
    // First, handle LaTeX math expressions
    let processedText = content;
    
    // Handle inline math: $...$
    processedText = processedText.replace(/\$([^$]+)\$/g, (_, formula) => {
      // Clean up the formula
      const cleanFormula = formula.trim();
      return `<span class="math-inline" data-formula="${cleanFormula}"></span>`;
    });
    
    // Handle display math: $$...$$
    processedText = processedText.replace(/\$\$([^$]+)\$\$/g, (_, formula) => {
      const cleanFormula = formula.trim();
      return `<div class="math-display" data-formula="${cleanFormula}"></div>`;
    });
    
    // Convert markdown to HTML
    const htmlContent = marked(processedText) as string;
    
    return htmlContent;
  }, [content]);

  // Render math after component mounts
  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    
    // Import KaTeX dynamically to avoid SSR issues
    import('katex').then((katex) => {
      // Render inline math
      const inlineMath = element.querySelectorAll('.math-inline');
      inlineMath.forEach((mathEl) => {
        const formula = mathEl.getAttribute('data-formula');
        if (formula) {
          try {
            katex.render(formula, mathEl as HTMLElement, {
              displayMode: false,
              throwOnError: false,
              errorColor: '#ff6b6b',
            });
          } catch (error) {
            console.warn('KaTeX rendering error:', error);
            mathEl.textContent = formula;
          }
        }
      });

      // Render display math
      const displayMath = element.querySelectorAll('.math-display');
      displayMath.forEach((mathEl) => {
        const formula = mathEl.getAttribute('data-formula');
        if (formula) {
          try {
            katex.render(formula, mathEl as HTMLElement, {
              displayMode: true,
              throwOnError: false,
              errorColor: '#ff6b6b',
            });
          } catch (error) {
            console.warn('KaTeX rendering error:', error);
            mathEl.textContent = formula;
          }
        }
      });
    }).catch((error) => {
      console.warn('Failed to load KaTeX:', error);
    });
  }, [processedContent]);

  return (
    <div 
      ref={contentRef}
      className={`prose prose-invert prose-lg rich-content
        prose-headings:text-gray-100 prose-headings:font-semibold
        prose-p:text-gray-300
        prose-strong:text-white prose-strong:font-semibold
        prose-em:text-gray-100
        prose-li:marker:text-teal-400
        prose-blockquote:border-l-teal-500 prose-blockquote:text-gray-400
        prose-code:text-teal-300 prose-code:bg-gray-800
        prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
        prose-a:text-teal-400 hover:prose-a:text-teal-300
        prose-th:text-gray-200 prose-td:text-gray-300
        ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
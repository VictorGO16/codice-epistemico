'use client';

import { useMemo, useEffect, useRef } from 'react';
import { marked } from 'marked';
import 'katex/dist/katex.min.css';

interface EnhancedRichContentProps {
  content: string;
  className?: string;
}

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
      className={`
        prose prose-invert prose-lg max-w-none
        prose-headings:text-teal-400 prose-headings:font-semibold
        prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-6
        prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-5
        prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-4
        prose-h4:text-base prose-h4:mb-2 prose-h4:mt-3 prose-h4:text-teal-300
        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
        prose-strong:text-white prose-strong:font-semibold
        prose-em:text-gray-200 prose-em:italic
        prose-ul:text-gray-300 prose-ul:space-y-2
        prose-ol:text-gray-300 prose-ol:space-y-2
        prose-li:leading-relaxed
        prose-li:marker:text-teal-400
        prose-blockquote:border-l-4 prose-blockquote:border-teal-500 
        prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
        prose-code:text-teal-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
        prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300 hover:prose-a:underline
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
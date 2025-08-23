'use client';

interface RichContentProps {
  content: string;
  className?: string;
}

export default function RichContent({ content, className = '' }: RichContentProps) {
  return (
    <div 
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
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
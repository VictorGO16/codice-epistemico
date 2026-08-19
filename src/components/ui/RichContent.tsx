'use client';

interface RichContentProps {
  content: string;
  className?: string;
}

export default function RichContent({ content, className = '' }: RichContentProps) {
  return (
    <div 
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
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
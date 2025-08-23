// Simple markdown-like formatting for display text
export function formatDisplayText(text: string): string {
  if (!text) return '';

  // The text is already in HTML format from our data,
  // so we just need to ensure it's properly formatted
  return text
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    // Ensure proper paragraph wrapping if not already present
    .replace(/^(?!<p>)/, '<p>')
    .replace(/(?!<\/p>)$/, '</p>')
    // Clean up any double paragraph tags
    .replace(/<p><p>/g, '<p>')
    .replace(/<\/p><\/p>/g, '</p>');
}

// Convert plain text to HTML with basic formatting
export function textToHtml(text: string): string {
  if (!text) return '';

  return text
    // Convert line breaks to HTML
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    // Wrap in paragraph tags
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code inline
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

// Strip HTML tags for plain text display
export function stripHtml(html: string): string {
  if (!html) return '';
  
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

// Truncate text to a specific length
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  
  const plainText = stripHtml(text);
  if (plainText.length <= maxLength) return text;
  
  return plainText.substring(0, maxLength - 3) + '...';
}

// Extract first paragraph from HTML content
export function getFirstParagraph(html: string): string {
  if (!html) return '';
  
  const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
  return match ? match[1] : stripHtml(html).split('\n')[0];
}
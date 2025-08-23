import jsPDF from 'jspdf';
import { philosophicalData } from '@/lib/data/philosophical-data';

// Specialized PDF Export System - Each component has its own design
export interface DebateExportData {
  topic: string;
  participants: string[];
  messages: Array<{
    speaker: string;
    content: string;
    timestamp: Date;
  }>;
  analysis?: {
    arguments: Array<{
      id: string;
      participantId: string;
      participantName: string;
      thesis: string;
      arguments: string[];
      refutations: string[];
      strength: number;
      coherence: number;
    }>;
    moderatorConclusion: string;
    participantScores: Record<string, number>;
    overallAnalysis: string;
  };
}

export interface OracleExportData {
  philosopher: string;
  conversation: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
  summary?: string;
}

export interface ParadigmExportData {
  paradigm: string;
  objectOfStudy: string;
  analysis: {
    ontological: string;
    epistemological: string;
    methodological: string;
    researchProposal: string;
  };
  timestamp: Date;
}

// Subtle markdown processing for PDFs - preserve structure without decoration
function formatMarkdownForPDF(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let formatted = text;

  // Convert markdown headers to just the text with spacing (no decorative lines)
  formatted = formatted
    .replace(/^### (.*?)$/gm, '\n\n$1\n')
    .replace(/^## (.*?)$/gm, '\n\n$1\n')
    .replace(/^# (.*?)$/gm, '\n\n$1\n');

  // Convert markdown lists to bullet points with proper spacing
  formatted = formatted
    .replace(/^- (.*?)$/gm, '\n• $1')
    .replace(/^\* (.*?)$/gm, '\n• $1')
    .replace(/^\d+\. (.*?)$/gm, '\n$1');

  // Remove bold and italic markers but keep content
  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1');

  // Preserve paragraph breaks but normalize spacing
  formatted = formatted
    .replace(/\n\n\n+/g, '\n\n')
    .replace(/\n\s*\n/g, '\n\n');

  // Clean up but preserve line structure - do NOT call cleanText as it collapses formatting
  return formatted
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-')
    // Remove problematic characters but keep basic structure
    .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ•\-\n]/g, '')
    .trim();
}

// Ultra-aggressive text cleaning utility - handles all encoding issues
function cleanText(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let cleaned = text;

  // Log the original text for debugging
  if (typeof window !== 'undefined' && window.console) {
    console.log('🧹 Cleaning text:', text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  }

  // FIRST: Remove all the specific problematic sequences we've identified
  cleaned = cleaned
    // Remove all variations of the corrupted markers (more comprehensive)
    .replace(/Ø=ÞK/g, '')
    .replace(/&Bþ/g, '')
    .replace(/Ø=Ü-/g, '')
    .replace(/Ø=ÜÊ/g, '')
    .replace(/Ø<ßÆ/g, '')
    .replace(/Ø=Ü/g, '')
    .replace(/Ø=/g, '')
    .replace(/ÞK/g, '')
    .replace(/Ü-/g, '')
    .replace(/ÜÊ/g, '')
    .replace(/ßÆ/g, '')
    // Remove individual problematic characters more aggressively
    .replace(/[ØÞÜßÆÊ]/g, '')
    // Remove any sequence that starts with these patterns
    .replace(/Ø[^a-zA-Z0-9\s]/g, '')
    .replace(/Þ[^a-zA-Z0-9\s]/g, '')
    .replace(/Ü[^a-zA-Z0-9\s]/g, '')
    .replace(/ß[^a-zA-Z0-9\s]/g, '')
    .replace(/Æ[^a-zA-Z0-9\s]/g, '')
    .replace(/Ê[^a-zA-Z0-9\s]/g, '')
    // Fix the broken star ratings (ULTRA comprehensive patterns)
    .replace(/&{5}--/g, '★★★★★')
    .replace(/&{5}-/g, '★★★★★')
    .replace(/&{5}/g, '★★★★★')
    .replace(/&{4}--/g, '★★★★☆')
    .replace(/&{4}-/g, '★★★★☆')
    .replace(/&{4}/g, '★★★★☆')
    .replace(/&{3}--/g, '★★★☆☆')
    .replace(/&{3}-/g, '★★★☆☆')
    .replace(/&{3}/g, '★★★☆☆')
    .replace(/&{2}--/g, '★★☆☆☆')
    .replace(/&{2}-/g, '★★☆☆☆')
    .replace(/&{2}/g, '★★☆☆☆')
    .replace(/&{1}--/g, '★☆☆☆☆')
    .replace(/&{1}-/g, '★☆☆☆☆')
    // Handle any remaining & patterns that might be ratings
    .replace(/&+[-]*\s*(?=\d|$|[A-Z])/g, '★☆☆☆☆')
    .replace(/&(?!amp;|lt;|gt;|quot;|#|nbsp;)/g, '★☆☆☆☆')
    // Handle markdown formatting
    .replace(/\*\*(.*?)\*\*/g, '$1') // **bold** -> bold
    .replace(/\*(.*?)\*/g, '$1')     // *italic* -> italic
    // Remove any remaining problematic sequences
    .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ★☆\-]/g, '');

  // SECOND: Fix UTF-8 double encoding issues
  cleaned = cleaned
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã¡/g, 'á')
    .replace(/Ã©/g, 'é')
    .replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã¿/g, 'ÿ')
    .replace(/Ã/g, 'Á')
    .replace(/Ã‰/g, 'É')
    .replace(/Ã/g, 'Í')
    .replace(/Ã"/g, 'Ó')
    .replace(/Ãš/g, 'Ú')
    .replace(/Ã¼/g, 'ü')
    .replace(/Ã§/g, 'ç')
    .replace(/Ã'/g, 'Ñ');

  // THIRD: Fix Windows-1252 to UTF-8 issues
  cleaned = cleaned
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€¦/g, '...')
    .replace(/â€"/g, '-')
    .replace(/â€"/g, '-');

  // FOURTH: Remove Latin-1 artifacts
  cleaned = cleaned
    .replace(/Â/g, '')
    .replace(/Ã(?![aeiouAEIOU])/g, '');

  // FIFTH: Fix smart quotes and special characters
  cleaned = cleaned
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-')
    .replace(/[‚„]/g, ',');

  // SIXTH: Remove control characters and invalid UTF-8
  cleaned = cleaned
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/[\uFFFD\uFEFF]/g, '');

  // SEVENTH: Keep only valid characters (Spanish-friendly)
  cleaned = cleaned
    .replace(/[^\x20-\x7E\u00A0-\u00FF\u0100-\u017F\u1E00-\u1EFF\u2000-\u206F\u2010-\u2027\u2030-\u205F\u2070-\u209F\u20A0-\u20CF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\u2800-\u28FF\u2900-\u297F\u2980-\u29FF\u2A00-\u2AFF\u2B00-\u2BFF]/g, '');

  // EIGHTH: Clean up multiple spaces and normalize
  cleaned = cleaned
    .replace(/\s+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n+/g, '\n')
    .trim();

  return cleaned;
}

// Specialized cleaning for debate content
function cleanDebateContent(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let cleaned = cleanText(text);

  // Additional debate-specific cleaning
  cleaned = cleaned
    // Fix common debate markers that get corrupted
    .replace(/moderator/gi, 'Moderador')
    .replace(/\bmoderador\b/gi, 'Moderador')
    // Clean up any remaining artifacts
    .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ★☆\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned;
}

// Specialized cleaning for oracle content
function cleanOracleContent(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let cleaned = cleanText(text);

  // Additional oracle-specific cleaning
  cleaned = cleaned
    // Remove any remaining binary-looking sequences
    .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ★☆\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned;
}

// ORACLE CHAT PDF - Designed like a conversation
export class OracleChatPDF {
  private pdf: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private currentY: number;
  private pageNumber: number = 1;

  // Oracle-specific colors (mystical purple theme)
  private colors = {
    primary: '#7c3aed',
    secondary: '#5b21b6',
    accent: '#f3e8ff',
    userBg: '#faf5ff',
    oracleBg: '#f3e8ff',
    userColor: '#dc2626',      // Red for user
    oracleColor: '#7c3aed',    // Purple for oracle
    text: '#111827',
    lightText: '#6b7280',
    border: '#e5e7eb'
  };

  constructor() {
    this.pdf = new jsPDF('p', 'mm', 'a4');
    this.pageWidth = this.pdf.internal.pageSize.getWidth();
    this.pageHeight = this.pdf.internal.pageSize.getHeight();
    this.currentY = 25;
  }

  private setColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setTextColor(r, g, b);
  }

  private setFillColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setFillColor(r, g, b);
  }

  private hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }

  private checkPageBreak(requiredSpace: number = 25): boolean {
    if (this.currentY + requiredSpace > this.pageHeight - 30) {
      this.addPage();
      return true;
    }
    return false;
  }

  private addPage(): void {
    this.pdf.addPage();
    this.pageNumber++;
    this.currentY = 25;
    this.addPageNumber();
  }

  private addPageNumber(): void {
    this.setColor(this.colors.lightText);
    this.pdf.setFontSize(9);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`${this.pageNumber}`, this.pageWidth - 20, this.pageHeight - 15, { align: 'center' });
  }

  private addHeader(philosopherName: string): void {
    // Mystical header background
    this.setFillColor(this.colors.primary);
    this.pdf.rect(0, 0, this.pageWidth, 50, 'F');

    // Oracle symbol and title
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(24);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('CONSULTA AL ORÁCULO', this.pageWidth / 2, 20, { align: 'center' });

    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Sabiduría de ${philosopherName}`, this.pageWidth / 2, 35, { align: 'center' });

    this.currentY = 65;
  }

  private addPhilosopherInfo(philosopher: { name?: string; coreIdea?: string; year?: string | number } | undefined): void {
    if (!philosopher) return;

    // Info box
    this.setFillColor(this.colors.accent);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 35, 'F');

    this.setColor(this.colors.text);
    this.pdf.setFontSize(11);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('Sobre el Filósofo:', 20, this.currentY + 8);

    this.pdf.setFont('helvetica', 'normal');
    const ideaLines = this.pdf.splitTextToSize(cleanText(`"${philosopher.coreIdea}"`), this.pageWidth - 50);
    let lineY = this.currentY + 16;

    for (const line of ideaLines) {
      this.pdf.text(line, 20, lineY);
      lineY += 6;
    }

    if (philosopher.year) {
      this.pdf.setFontSize(9);
      this.setColor(this.colors.lightText);
      this.pdf.text(`Período: ${philosopher.year}`, 20, this.currentY + 30);
    }

    this.currentY += 45;
  }

  private addChatMessage(message: { role: 'user' | 'assistant'; content: string }, philosopherName: string): void {
    this.checkPageBreak(30);

    const isUser = message.role === 'user';
    const speaker = isUser ? 'Consultante' : philosopherName;
    const bgColor = isUser ? this.colors.userBg : this.colors.oracleBg;
    const icon = isUser ? '[Usuario]' : '[Oráculo]';

    // Message bubble design
    const margin = isUser ? 40 : 15;
    const width = this.pageWidth - margin - 15;

    // Clean the message content ultra-aggressively
    let cleanedContent = cleanOracleContent(message.content);

    // Final pass: remove any remaining problematic characters that might have slipped through
    cleanedContent = cleanedContent
      .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ★☆\-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    console.log('🎯 Final cleaned content:', cleanedContent.substring(0, 50) + '...');

    // Calculate message height
    const lines = this.pdf.splitTextToSize(cleanedContent, width - 20);
    const messageHeight = Math.max(25, lines.length * 5 + 15);

    // Background bubble
    this.setFillColor(bgColor);
    this.pdf.roundedRect(margin, this.currentY, width, messageHeight, 3, 3, 'F');

    // Speaker header with distinctive colors
    this.setColor(isUser ? this.colors.userColor : this.colors.oracleColor);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${icon} ${speaker}`, margin + 8, this.currentY + 8);

    // Add a subtle colored line under the speaker name
    const lineY = this.currentY + 10;
    this.pdf.setLineWidth(1);
    const [r, g, b] = this.hexToRgb(isUser ? this.colors.userColor : this.colors.oracleColor);
    this.pdf.setDrawColor(r, g, b);
    this.pdf.line(margin + 8, lineY, margin + 8 + (speaker.length * 2), lineY);

    // Message content
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');

    let textY = this.currentY + 16;
    for (const line of lines) {
      this.pdf.text(line, margin + 8, textY);
      textY += 5;
    }

    this.currentY += messageHeight + 8;
  }

  public create(data: OracleExportData): jsPDF {
    const philosopher = philosophicalData[data.philosopher];
    const philosopherName = philosopher?.name || data.philosopher;

    // Debug logging
    console.log('🔮 Creating Oracle PDF for:', philosopherName);
    console.log('📝 Conversation messages:', data.conversation.length);
    data.conversation.forEach((msg, index) => {
      console.log(`Message ${index + 1} (${msg.role}):`, msg.content.substring(0, 100) + (msg.content.length > 100 ? '...' : ''));
    });

    this.addHeader(philosopherName);
    this.addPhilosopherInfo(philosopher);

    // Add conversation
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('DIÁLOGO SAGRADO', 20, this.currentY);
    this.currentY += 15;

    // Add each message as a chat bubble with aggressive cleaning
    data.conversation.forEach(message => {
      this.addChatMessage(message, philosopherName);
    });

    // Add summary if exists
    if (data.summary) {
      this.checkPageBreak(40);

      this.setFillColor(this.colors.accent);
      this.pdf.rect(15, this.currentY, this.pageWidth - 30, 5, 'F');

      this.setColor(this.colors.primary);
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text('SABIDURÍA DESTILADA', 20, this.currentY + 15);
      this.currentY += 25;

      this.setColor(this.colors.text);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');

      const summaryLines = this.pdf.splitTextToSize(cleanText(data.summary), this.pageWidth - 40);
      for (const line of summaryLines) {
        this.checkPageBreak();
        this.pdf.text(line, 20, this.currentY);
        this.currentY += 6;
      }
    }

    // Add page numbers to all pages
    for (let i = 1; i <= this.pdf.getNumberOfPages(); i++) {
      this.pdf.setPage(i);
      this.setColor(this.colors.lightText);
      this.pdf.setFontSize(9);
      this.pdf.text(`${i}`, this.pageWidth - 20, this.pageHeight - 15, { align: 'center' });
    }

    return this.pdf;
  }
}

// DEBATE PDF - Designed like a formal debate transcript
export class DebatePDF {
  private pdf: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private currentY: number;
  private pageNumber: number = 1;

  // Debate-specific colors (professional theme with distinctive participant colors)
  private colors = {
    primary: '#dc2626',
    secondary: '#7f1d1d',
    accent: '#fef2f2',
    moderatorBg: '#fee2e2',
    participantBg: '#fef7f7',
    text: '#111827',
    lightText: '#6b7280',
    border: '#e5e7eb',
    // Distinctive colors for participants (elegant professional palette)
    participantColors: [
      '#dc2626', // Red
      '#2563eb', // Blue  
      '#059669', // Green
      '#7c3aed', // Purple
      '#ea580c', // Orange
      '#0891b2', // Cyan
      '#be185d', // Pink
      '#65a30d'  // Lime
    ]
  };

  constructor() {
    this.pdf = new jsPDF('p', 'mm', 'a4');
    this.pageWidth = this.pdf.internal.pageSize.getWidth();
    this.pageHeight = this.pdf.internal.pageSize.getHeight();
    this.currentY = 25;
  }

  private setColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setTextColor(r, g, b);
  }

  private setFillColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setFillColor(r, g, b);
  }

  private checkPageBreak(requiredSpace: number = 25): boolean {
    if (this.currentY + requiredSpace > this.pageHeight - 30) {
      this.addPage();
      return true;
    }
    return false;
  }

  private addPage(): void {
    this.pdf.addPage();
    this.pageNumber++;
    this.currentY = 25;
  }

  private addHeader(topic: string): void {
    // Formal debate header
    this.setFillColor(this.colors.primary);
    this.pdf.rect(0, 0, this.pageWidth, 45, 'F');

    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(20);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('DEBATE FILOSÓFICO', this.pageWidth / 2, 18, { align: 'center' });

    this.pdf.setFontSize(12);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text('Diálogo Socrático', this.pageWidth / 2, 32, { align: 'center' });

    this.currentY = 60;

    // Topic
    this.setColor(this.colors.text);
    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('Tema del Debate:', 20, this.currentY);
    this.currentY += 10;

    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'normal');
    const topicLines = this.pdf.splitTextToSize(cleanText(topic), this.pageWidth - 40);
    for (const line of topicLines) {
      this.pdf.text(line, 20, this.currentY);
      this.currentY += 7;
    }

    this.currentY += 15;
  }

  private addParticipants(participants: string[]): void {
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('PARTICIPANTES:', 20, this.currentY);
    this.currentY += 12;

    participants.forEach((id, index) => {
      const philosopher = philosophicalData[id];
      if (philosopher) {
        this.setColor(this.colors.text);
        this.pdf.setFontSize(12);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text(`${index + 1}. ${philosopher.name}`, 25, this.currentY);
        this.currentY += 8;

        this.pdf.setFontSize(10);
        this.pdf.setFont('helvetica', 'normal');
        this.setColor(this.colors.lightText);
        const ideaLines = this.pdf.splitTextToSize(cleanText(`"${philosopher.coreIdea}"`), this.pageWidth - 60);
        for (const line of ideaLines) {
          this.pdf.text(line, 30, this.currentY);
          this.currentY += 5;
        }
        this.currentY += 5;
      }
    });

    this.currentY += 10;
  }

  private hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }

  private getParticipantColor(participantId: string, participants: string[]): string {
    const index = participants.indexOf(participantId);
    return index >= 0 && index < this.colors.participantColors.length
      ? this.colors.participantColors[index]
      : this.colors.primary;
  }

  private addDebateMessage(message: { speaker: string; content: string }, index: number, participants: string[] = []): void {
    this.checkPageBreak(35);

    const isModerator = message.speaker === 'Moderador';
    const speakerName = isModerator
      ? 'Moderador'
      : philosophicalData[message.speaker]?.name || message.speaker;

    // Message number and speaker with distinctive colors
    this.setFillColor(isModerator ? this.colors.moderatorBg : this.colors.participantBg);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 12, 'F');

    // Use distinctive color for each participant
    const participantColor = isModerator
      ? this.colors.secondary
      : this.getParticipantColor(message.speaker, participants);

    this.setColor(participantColor);
    this.pdf.setFontSize(11);
    this.pdf.setFont('helvetica', 'bold');

    const icon = isModerator ? '[Moderador]' : '[Participante]';
    this.pdf.text(`${index + 1}. ${icon} ${speakerName}`, 20, this.currentY + 8);

    // Add a colored line under the speaker name for visual distinction
    const lineY = this.currentY + 10;
    this.pdf.setLineWidth(1);
    const [r, g, b] = this.hexToRgb(participantColor);
    this.pdf.setDrawColor(r, g, b);
    this.pdf.line(20, lineY, 20 + (speakerName.length * 2), lineY);

    this.currentY += 18;

    // Message content with specialized debate cleaning
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');

    let cleanedContent = cleanDebateContent(message.content);

    // Final pass: remove any remaining problematic characters
    cleanedContent = cleanedContent
      .replace(/[^\w\s\.,;:!?¿¡()[\]{}'"áéíóúñüÁÉÍÓÚÑÜ★☆\-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    console.log('🎯 Final cleaned debate content:', cleanedContent.substring(0, 50) + '...');
    const lines = this.pdf.splitTextToSize(cleanedContent, this.pageWidth - 50);
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, 25, this.currentY);
      this.currentY += 5;
    }

    this.currentY += 10;
  }

  public create(data: DebateExportData): jsPDF {
    // Debug logging
    console.log('⚔️ Creating Debate PDF for topic:', data.topic);
    console.log('👥 Participants:', data.participants);
    console.log('💬 Messages:', data.messages.length);
    data.messages.forEach((msg, index) => {
      console.log(`Message ${index + 1} (${msg.speaker}):`, msg.content.substring(0, 100) + (msg.content.length > 100 ? '...' : ''));
    });

    this.addHeader(data.topic);
    this.addParticipants(data.participants);

    // Debate transcript
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('TRANSCRIPCIÓN DEL DEBATE', 20, this.currentY);
    this.currentY += 15;

    data.messages.forEach((message, index) => {
      this.addDebateMessage(message, index, data.participants);
    });

    // Analysis section
    if (data.analysis) {
      this.checkPageBreak(50);

      this.setColor(this.colors.primary);
      this.pdf.setFontSize(14);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text('ANÁLISIS DEL DEBATE', 20, this.currentY);
      this.currentY += 15;

      // Overall analysis
      this.setColor(this.colors.text);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      const analysisLines = this.pdf.splitTextToSize(cleanDebateContent(data.analysis.overallAnalysis), this.pageWidth - 40);
      for (const line of analysisLines) {
        this.checkPageBreak();
        this.pdf.text(line, 20, this.currentY);
        this.currentY += 5;
      }

      this.currentY += 15;

      // Scores
      this.setColor(this.colors.primary);
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text('PUNTUACIONES:', 20, this.currentY);
      this.currentY += 10;

      Object.entries(data.analysis.participantScores).forEach(([participantId, score]) => {
        const participant = philosophicalData[participantId];
        if (participant) {
          this.setColor(this.colors.text);
          this.pdf.setFontSize(10);
          this.pdf.setFont('helvetica', 'normal');
          const stars = '★'.repeat(Math.floor(score / 2)) + '☆'.repeat(5 - Math.floor(score / 2));
          this.pdf.text(`${participant.name}: ${score}/10 ${stars}`, 25, this.currentY);
          this.currentY += 7;
        }
      });

      this.currentY += 10;

      // Conclusion
      this.setColor(this.colors.primary);
      this.pdf.setFontSize(12);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text('CONCLUSIÓN DEL MODERADOR:', 20, this.currentY);
      this.currentY += 10;

      this.setColor(this.colors.text);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      const conclusionLines = this.pdf.splitTextToSize(cleanDebateContent(data.analysis.moderatorConclusion), this.pageWidth - 40);
      for (const line of conclusionLines) {
        this.checkPageBreak();
        this.pdf.text(line, 20, this.currentY);
        this.currentY += 5;
      }
    }

    // Add page numbers
    for (let i = 1; i <= this.pdf.getNumberOfPages(); i++) {
      this.pdf.setPage(i);
      this.setColor(this.colors.lightText);
      this.pdf.setFontSize(9);
      this.pdf.text(`Página ${i}`, this.pageWidth - 20, this.pageHeight - 15, { align: 'right' });
    }

    return this.pdf;
  }
}

// PARADIGM ANALYSIS PDF - Designed like a scientific report
export class ParadigmAnalysisPDF {
  private pdf: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private currentY: number;
  private pageNumber: number = 1;

  // Paradigm-specific colors (scientific theme with distinctive dimension colors)
  private colors = {
    primary: '#059669',
    secondary: '#047857',
    accent: '#ecfdf5',
    sectionBg: '#f0fdf4',
    text: '#111827',
    lightText: '#6b7280',
    border: '#d1fae5',
    // Distinctive colors for each dimension
    ontological: '#dc2626',     // Red for ontological (what exists)
    epistemological: '#2563eb', // Blue for epistemological (how we know)
    methodological: '#059669',  // Green for methodological (how we research)
    synthesis: '#7c3aed'        // Purple for synthesis
  };

  constructor() {
    this.pdf = new jsPDF('p', 'mm', 'a4');
    this.pageWidth = this.pdf.internal.pageSize.getWidth();
    this.pageHeight = this.pdf.internal.pageSize.getHeight();
    this.currentY = 25;
  }

  private setColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setTextColor(r, g, b);
  }

  private setFillColor(hex: string): void {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.pdf.setFillColor(r, g, b);
  }

  private checkPageBreak(requiredSpace: number = 25): boolean {
    if (this.currentY + requiredSpace > this.pageHeight - 30) {
      this.addPage();
      return true;
    }
    return false;
  }

  private addPage(): void {
    this.pdf.addPage();
    this.pageNumber++;
    this.currentY = 25;
  }

  private addHeader(paradigm: string, objectOfStudy: string): void {
    // Scientific report header
    this.setFillColor(this.colors.primary);
    this.pdf.rect(0, 0, this.pageWidth, 50, 'F');

    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(18);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('ANÁLISIS PARADIGMÁTICO', this.pageWidth / 2, 18, { align: 'center' });

    this.pdf.setFontSize(12);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text('Laboratorio de Paradigmas Científicos', this.pageWidth / 2, 32, { align: 'center' });

    this.currentY = 65;

    // Paradigm and object
    this.setFillColor(this.colors.accent);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 30, 'F');

    this.setColor(this.colors.text);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`Paradigma: ${paradigm}`, 20, this.currentY + 10);

    this.pdf.setFontSize(12);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Objeto de Estudio: ${cleanText(objectOfStudy)}`, 20, this.currentY + 22);

    this.currentY += 45;
  }

  private addDimension(title: string, content: string, icon: string, dimensionType: 'ontological' | 'epistemological' | 'methodological' = 'ontological'): void {
    this.checkPageBreak(40);

    // Get distinctive color for this dimension
    const dimensionColor = this.colors[dimensionType];

    // Dimension header with distinctive color
    this.setFillColor(this.colors.sectionBg);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 15, 'F');

    // Left accent bar with dimension-specific color
    this.setFillColor(dimensionColor);
    this.pdf.rect(15, this.currentY, 5, 15, 'F');

    this.setColor(dimensionColor);
    this.pdf.setFontSize(13);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${icon} ${title}`, 25, this.currentY + 10);

    this.currentY += 20;

    // Content
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');

    const lines = this.pdf.splitTextToSize(formatMarkdownForPDF(content), this.pageWidth - 50);
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, 25, this.currentY);
      this.currentY += 5;
    }

    this.currentY += 15;
  }

  public create(data: ParadigmExportData): jsPDF {
    this.addHeader(data.paradigm, data.objectOfStudy);

    // Three dimensions with distinctive colors
    this.addDimension(
      'Dimensión Ontológica',
      `¿Qué existe según este paradigma?\n\n${data.analysis.ontological}`,
      '[ONTOLÓGICA]',
      'ontological'
    );

    this.addDimension(
      'Dimensión Epistemológica',
      `¿Cómo conocemos según este paradigma?\n\n${data.analysis.epistemological}`,
      '[EPISTEMOLÓGICA]',
      'epistemological'
    );

    this.addDimension(
      'Dimensión Metodológica',
      `¿Cómo investigamos según este paradigma?\n\n${data.analysis.methodological}`,
      '[METODOLÓGICA]',
      'methodological'
    );

    // Research Proposal section
    this.checkPageBreak(40);
    
    this.setFillColor(this.colors.sectionBg);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 15, 'F');
    
    // Left accent bar with orange color for research proposal
    this.setFillColor('#ea580c'); // Orange for research proposal
    this.pdf.rect(15, this.currentY, 5, 15, 'F');
    
    this.setColor('#ea580c');
    this.pdf.setFontSize(13);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('[INVESTIGACIÓN] PROPUESTA DE INVESTIGACIÓN', 25, this.currentY + 10);
    
    this.currentY += 20;
    
    // Research proposal content
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    
    const researchLines = this.pdf.splitTextToSize(formatMarkdownForPDF(data.analysis.researchProposal), this.pageWidth - 50);
    for (const line of researchLines) {
      this.checkPageBreak();
      this.pdf.text(line, 25, this.currentY);
      this.currentY += 5;
    }
    
    this.currentY += 15;

    // Synthesis with distinctive color
    this.checkPageBreak(40);

    this.setFillColor(this.colors.accent);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 5, 'F');

    // Left accent bar for synthesis
    this.setFillColor(this.colors.synthesis);
    this.pdf.rect(15, this.currentY, 5, 5, 'F');

    this.setColor(this.colors.synthesis);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('[SÍNTESIS] SÍNTESIS PARADIGMÁTICA', 20, this.currentY + 15);
    this.currentY += 25;

    const synthesisText = `Este análisis revela las estructuras fundamentales del paradigma ${data.paradigm} aplicado al estudio de "${data.objectOfStudy}". La integración de las dimensiones ontológica, epistemológica y metodológica proporciona una comprensión holística de cómo este marco conceptual estructura tanto la realidad como nuestro acceso a ella.`;

    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');

    const synthesisLines = this.pdf.splitTextToSize(cleanText(synthesisText), this.pageWidth - 40);
    for (const line of synthesisLines) {
      this.checkPageBreak();
      this.pdf.text(line, 20, this.currentY);
      this.currentY += 5;
    }

    // Add page numbers
    for (let i = 1; i <= this.pdf.getNumberOfPages(); i++) {
      this.pdf.setPage(i);
      this.setColor(this.colors.lightText);
      this.pdf.setFontSize(9);
      this.pdf.text(`${i}`, this.pageWidth - 20, this.pageHeight - 15, { align: 'center' });
    }

    return this.pdf;
  }
}

// Pre-processing function to clean data before PDF creation
function preprocessExportData<T extends { conversation?: Array<{ content: string }> } | { messages?: Array<{ content: string }> }>(data: T): T {
  console.log('🔧 Preprocessing export data...');

  if ('conversation' in data && data.conversation) {
    return {
      ...data,
      conversation: data.conversation.map(msg => ({
        ...msg,
        content: cleanText(msg.content)
      }))
    };
  }

  if ('messages' in data && data.messages) {
    return {
      ...data,
      messages: data.messages.map(msg => ({
        ...msg,
        content: cleanText(msg.content)
      }))
    };
  }

  return data;
}

// Export functions with preprocessing
export async function exportOracleToPDF(data: OracleExportData): Promise<void> {
  console.log('🚀 Starting Oracle PDF export...');
  const cleanedData = preprocessExportData(data);
  const designer = new OracleChatPDF();
  const pdf = designer.create(cleanedData);
  const philosopherName = philosophicalData[data.philosopher]?.name || data.philosopher;
  pdf.save(`oraculo_${philosopherName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  console.log('✅ Oracle PDF export completed');
}

export async function exportDebateToPDF(data: DebateExportData): Promise<void> {
  console.log('🚀 Starting Debate PDF export...');
  const cleanedData = preprocessExportData(data);
  const designer = new DebatePDF();
  const pdf = designer.create(cleanedData);
  pdf.save(`debate_${data.topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  console.log('✅ Debate PDF export completed');
}

export async function exportParadigmToPDF(data: ParadigmExportData): Promise<void> {
  const designer = new ParadigmAnalysisPDF();
  const pdf = designer.create(data);
  pdf.save(`paradigma_${data.paradigm.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

// HTML Export and generic PDF
export interface ExportOptions {
  title: string;
  content: string;
  metadata?: {
    author?: string;
    subject?: string;
    keywords?: string[];
    createdAt?: Date;
  };
}

export function exportToHTML(options: ExportOptions): void {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${options.title} - El Codice Epistemico</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #14b8a6;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .title {
            color: #14b8a6;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            font-size: 1.2em;
        }
        .metadata {
            background-color: #e5f3f2;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .content {
            white-space: pre-wrap;
            font-size: 1.1em;
            line-height: 1.8;
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 0.9em;
        }
        @media print {
            body { background-color: white; }
            .header { border-bottom: 2px solid #000; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">El Codice Epistemico</h1>
        <h2 class="subtitle">${options.title}</h2>
    </div>
    
    ${options.metadata ? `
    <div class="metadata">
        ${options.metadata.createdAt ? `<p><strong>Fecha:</strong> ${options.metadata.createdAt.toLocaleDateString('es-ES')}</p>` : ''}
        ${options.metadata.author ? `<p><strong>Autor:</strong> ${options.metadata.author}</p>` : ''}
        ${options.metadata.subject ? `<p><strong>Tema:</strong> ${options.metadata.subject}</p>` : ''}
        ${options.metadata.keywords ? `<p><strong>Palabras clave:</strong> ${options.metadata.keywords.join(', ')}</p>` : ''}
    </div>
    ` : ''}
    
    <div class="content">${options.content}</div>
    
    <div class="footer">
        <p>Generado por El Codice Epistemico - ${new Date().toLocaleDateString('es-ES')}</p>
    </div>
</body>
</html>
  `;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${options.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function exportToPDF(options: ExportOptions): Promise<void> {
  // For generic exports, we'll use a simple design
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  let currentY = 30;

  // Header
  pdf.setFillColor(20, 184, 166);
  pdf.rect(0, 0, pageWidth, 40, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.text('El Códice Epistémico', pageWidth / 2, 25, { align: 'center' });

  currentY = 60;

  // Title
  pdf.setTextColor(0, 0, 0);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(cleanText(options.title), 20, currentY);
  currentY += 20;

  // Content
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  const lines = pdf.splitTextToSize(cleanText(options.content), pageWidth - 40);

  for (const line of lines) {
    if (currentY > 270) {
      pdf.addPage();
      currentY = 30;
    }
    pdf.text(line, 20, currentY);
    currentY += 6;
  }

  pdf.save(`${options.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}
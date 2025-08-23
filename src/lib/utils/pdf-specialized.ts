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
  };
  timestamp: Date;
}

// Text cleaning utility - handles encoding issues
function cleanText(text: string): string {
  return text
    // Fix common encoding issues
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
    // Fix weird symbols
    .replace(/Ø=ÞK/g, '')
    .replace(/&Bþ/g, '')
    .replace(/[^\x20-\x7E\u00A0-\u024F\u1E00-\u1EFF]/g, '')
    // Fix quotes and dashes
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-')
    // Clean up whitespace
    .replace(/\s+/g, ' ')
    .trim();
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
    this.pdf.text('🔮 CONSULTA AL ORÁCULO', this.pageWidth / 2, 20, { align: 'center' });
    
    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Sabiduría de ${philosopherName}`, this.pageWidth / 2, 35, { align: 'center' });
    
    this.currentY = 65;
  }

  private addPhilosopherInfo(philosopher: any): void {
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
    const icon = isUser ? '🙋‍♂️' : '🔮';
    
    // Message bubble design
    const margin = isUser ? 40 : 15;
    const width = this.pageWidth - margin - 15;
    
    // Calculate message height
    const lines = this.pdf.splitTextToSize(cleanText(message.content), width - 20);
    const messageHeight = Math.max(25, lines.length * 5 + 15);
    
    // Background bubble
    this.setFillColor(bgColor);
    this.pdf.roundedRect(margin, this.currentY, width, messageHeight, 3, 3, 'F');
    
    // Speaker header
    this.setColor(isUser ? this.colors.secondary : this.colors.primary);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${icon} ${speaker}`, margin + 8, this.currentY + 8);
    
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
    
    this.addHeader(philosopherName);
    this.addPhilosopherInfo(philosopher);
    
    // Add conversation
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('💭 Diálogo Sagrado', 20, this.currentY);
    this.currentY += 15;
    
    // Add each message as a chat bubble
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
      this.pdf.text('✨ Sabiduría Destilada', 20, this.currentY + 15);
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
  
  // Debate-specific colors (professional red theme)
  private colors = {
    primary: '#dc2626',
    secondary: '#7f1d1d',
    accent: '#fef2f2',
    moderatorBg: '#fee2e2',
    participantBg: '#fef7f7',
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
    this.pdf.text('⚔️ DEBATE FILOSÓFICO', this.pageWidth / 2, 18, { align: 'center' });
    
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
    this.pdf.text('👥 Participantes:', 20, this.currentY);
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

  private addDebateMessage(message: { speaker: string; content: string }, index: number): void {
    this.checkPageBreak(35);
    
    const isModerator = message.speaker === 'Moderador';
    const speakerName = isModerator 
      ? 'Moderador' 
      : philosophicalData[message.speaker]?.name || message.speaker;
    
    // Message number and speaker
    this.setFillColor(isModerator ? this.colors.moderatorBg : this.colors.participantBg);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 12, 'F');
    
    this.setColor(isModerator ? this.colors.secondary : this.colors.primary);
    this.pdf.setFontSize(11);
    this.pdf.setFont('helvetica', 'bold');
    
    const icon = isModerator ? '🎯' : '💭';
    this.pdf.text(`${index + 1}. ${icon} ${speakerName}`, 20, this.currentY + 8);
    
    this.currentY += 18;
    
    // Message content
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    
    const lines = this.pdf.splitTextToSize(cleanText(message.content), this.pageWidth - 50);
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, 25, this.currentY);
      this.currentY += 5;
    }
    
    this.currentY += 10;
  }

  public create(data: DebateExportData): jsPDF {
    this.addHeader(data.topic);
    this.addParticipants(data.participants);
    
    // Debate transcript
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('📜 Transcripción del Debate', 20, this.currentY);
    this.currentY += 15;
    
    data.messages.forEach((message, index) => {
      this.addDebateMessage(message, index);
    });
    
    // Analysis section
    if (data.analysis) {
      this.checkPageBreak(50);
      
      this.setColor(this.colors.primary);
      this.pdf.setFontSize(14);
      this.pdf.setFont('helvetica', 'bold');
      this.pdf.text('📊 Análisis del Debate', 20, this.currentY);
      this.currentY += 15;
      
      // Overall analysis
      this.setColor(this.colors.text);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      const analysisLines = this.pdf.splitTextToSize(cleanText(data.analysis.overallAnalysis), this.pageWidth - 40);
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
      this.pdf.text('🏆 Puntuaciones:', 20, this.currentY);
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
      this.pdf.text('🎯 Conclusión del Moderador:', 20, this.currentY);
      this.currentY += 10;
      
      this.setColor(this.colors.text);
      this.pdf.setFontSize(10);
      this.pdf.setFont('helvetica', 'normal');
      const conclusionLines = this.pdf.splitTextToSize(cleanText(data.analysis.moderatorConclusion), this.pageWidth - 40);
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
  
  // Paradigm-specific colors (scientific green theme)
  private colors = {
    primary: '#059669',
    secondary: '#047857',
    accent: '#ecfdf5',
    sectionBg: '#f0fdf4',
    text: '#111827',
    lightText: '#6b7280',
    border: '#d1fae5'
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
    this.pdf.text('🔬 ANÁLISIS PARADIGMÁTICO', this.pageWidth / 2, 18, { align: 'center' });
    
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

  private addDimension(title: string, content: string, icon: string): void {
    this.checkPageBreak(40);
    
    // Dimension header
    this.setFillColor(this.colors.sectionBg);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 15, 'F');
    
    // Left accent bar
    this.setFillColor(this.colors.primary);
    this.pdf.rect(15, this.currentY, 3, 15, 'F');
    
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(13);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(`${icon} ${title}`, 25, this.currentY + 10);
    
    this.currentY += 20;
    
    // Content
    this.setColor(this.colors.text);
    this.pdf.setFontSize(10);
    this.pdf.setFont('helvetica', 'normal');
    
    const lines = this.pdf.splitTextToSize(cleanText(content), this.pageWidth - 50);
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, 25, this.currentY);
      this.currentY += 5;
    }
    
    this.currentY += 15;
  }

  public create(data: ParadigmExportData): jsPDF {
    this.addHeader(data.paradigm, data.objectOfStudy);
    
    // Three dimensions
    this.addDimension(
      'Dimensión Ontológica',
      `¿Qué existe según este paradigma?\n\n${data.analysis.ontological}`,
      '🌌'
    );
    
    this.addDimension(
      'Dimensión Epistemológica', 
      `¿Cómo conocemos según este paradigma?\n\n${data.analysis.epistemological}`,
      '🧠'
    );
    
    this.addDimension(
      'Dimensión Metodológica',
      `¿Cómo investigamos según este paradigma?\n\n${data.analysis.methodological}`,
      '⚙️'
    );
    
    // Synthesis
    this.checkPageBreak(40);
    
    this.setFillColor(this.colors.accent);
    this.pdf.rect(15, this.currentY, this.pageWidth - 30, 5, 'F');
    
    this.setColor(this.colors.primary);
    this.pdf.setFontSize(14);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('📊 Síntesis Paradigmática', 20, this.currentY + 15);
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

// Export functions
export async function exportOracleToPDF(data: OracleExportData): Promise<void> {
  const designer = new OracleChatPDF();
  const pdf = designer.create(data);
  const philosopherName = philosophicalData[data.philosopher]?.name || data.philosopher;
  pdf.save(`oraculo_${philosopherName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

export async function exportDebateToPDF(data: DebateExportData): Promise<void> {
  const designer = new DebatePDF();
  const pdf = designer.create(data);
  pdf.save(`debate_${data.topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

export async function exportParadigmToPDF(data: ParadigmExportData): Promise<void> {
  const designer = new ParadigmAnalysisPDF();
  const pdf = designer.create(data);
  pdf.save(`paradigma_${data.paradigm.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

// HTML Export (unchanged from original)
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
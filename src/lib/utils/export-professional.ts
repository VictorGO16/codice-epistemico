import jsPDF from 'jspdf';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { 
  PDFTemplate, 
  getTemplateForType, 
  getIconForContext, 
  hexToRgb, 
  lightenColor, 
  darkenColor 
} from './pdf-templates-new';

// Professional PDF Export System
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

// Professional PDF Designer Class
class ProfessionalPDFDesigner {
  private pdf: jsPDF;
  private template: PDFTemplate;
  private pageWidth: number;
  private pageHeight: number;
  private currentY: number;
  private pageNumber: number = 1;

  constructor(templateType: 'debate' | 'oracle' | 'paradigm' | 'laboratory' | 'generic') {
    this.pdf = new jsPDF('p', 'mm', 'a4');
    this.template = getTemplateForType(templateType);
    this.pageWidth = this.pdf.internal.pageSize.getWidth();
    this.pageHeight = this.pdf.internal.pageSize.getHeight();
    this.currentY = this.template.layout.pageMargin;
  }

  // Utility methods for consistent styling
  private setColor(hex: string): void {
    const [r, g, b] = hexToRgb(hex);
    this.pdf.setTextColor(r, g, b);
  }

  private setFillColor(hex: string): void {
    const [r, g, b] = hexToRgb(hex);
    this.pdf.setFillColor(r, g, b);
  }

  private setDrawColor(hex: string): void {
    const [r, g, b] = hexToRgb(hex);
    this.pdf.setDrawColor(r, g, b);
  }

  private cleanText(text: string): string {
    return text
      .replace(/[""]/g, '"')
      .replace(/['']/g, "'")
      .replace(/…/g, '...')
      .replace(/[–—]/g, '-')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private checkPageBreak(requiredSpace: number = 20): boolean {
    if (this.currentY + requiredSpace > this.pageHeight - this.template.layout.footerHeight - 10) {
      this.addPage();
      return true;
    }
    return false;
  }

  private addPage(): void {
    this.pdf.addPage();
    this.pageNumber++;
    this.currentY = this.template.layout.pageMargin;
    this.addPageHeader();
  }

  private addPageHeader(): void {
    if (this.pageNumber === 1) return;

    const margin = this.template.layout.pageMargin;
    
    // Subtle header line
    this.setDrawColor(this.template.colors.border);
    this.pdf.setLineWidth(0.3);
    this.pdf.line(margin, this.currentY, this.pageWidth - margin, this.currentY);
    
    // Page number
    this.setColor(this.template.colors.lightText);
    this.pdf.setFontSize(this.template.typography.caption.size);
    this.pdf.setFont('helvetica', 'normal');
    this.pdf.text(`Página ${this.pageNumber}`, this.pageWidth - margin, this.currentY - 3, { align: 'right' });
    
    this.currentY += 15;
  }

  // Professional header design
  private addDocumentHeader(title: string, subtitle?: string): void {
    const headerHeight = this.template.layout.headerHeight;
    
    // Header background with gradient effect
    this.setFillColor(this.template.colors.headerBg);
    this.pdf.rect(0, 0, this.pageWidth, headerHeight, 'F');
    
    // Subtle gradient overlay
    this.setFillColor(darkenColor(this.template.colors.headerBg, 10));
    this.pdf.rect(0, 0, this.pageWidth, headerHeight * 0.4, 'F');
    
    // Brand section
    this.pdf.setTextColor(255, 255, 255);
    this.pdf.setFontSize(16);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text('EL CÓDICE EPISTÉMICO', this.template.layout.pageMargin, 20);
    
    if (subtitle) {
      this.pdf.setFontSize(11);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(this.cleanText(subtitle), this.template.layout.pageMargin, 32);
    }
    
    // Document title
    this.setColor(this.template.colors.text);
    this.pdf.setFontSize(this.template.typography.title.size);
    this.pdf.setFont('helvetica', this.template.typography.title.weight);
    
    const titleY = headerHeight + 20;
    const titleLines = this.pdf.splitTextToSize(this.cleanText(title), this.pageWidth - 2 * this.template.layout.pageMargin);
    
    for (let i = 0; i < titleLines.length; i++) {
      this.pdf.text(titleLines[i], this.template.layout.pageMargin, titleY + (i * this.template.typography.title.size * this.template.typography.title.lineHeight));
    }
    
    this.currentY = titleY + (titleLines.length * this.template.typography.title.size * this.template.typography.title.lineHeight) + this.template.layout.sectionSpacing;
  }

  // Professional metadata section
  private addMetadata(metadata?: ExportOptions['metadata']): void {
    if (!metadata) return;
    
    this.checkPageBreak(50);
    
    const margin = this.template.layout.pageMargin;
    const boxHeight = 35;
    
    // Metadata container
    this.setFillColor(this.template.colors.sectionBg);
    this.pdf.rect(margin, this.currentY, this.pageWidth - 2 * margin, boxHeight, 'F');
    
    // Border
    this.setDrawColor(this.template.colors.border);
    this.pdf.setLineWidth(this.template.visual.borderWidth);
    this.pdf.rect(margin, this.currentY, this.pageWidth - 2 * margin, boxHeight, 'D');
    
    // Content
    this.setColor(this.template.colors.lightText);
    this.pdf.setFontSize(this.template.typography.caption.size);
    this.pdf.setFont('helvetica', 'normal');
    
    let metaY = this.currentY + 8;
    const leftCol = margin + 10;
    const rightCol = margin + (this.pageWidth - 2 * margin) / 2;
    
    if (metadata.createdAt) {
      this.pdf.text(`Fecha: ${metadata.createdAt.toLocaleDateString('es-ES')}`, leftCol, metaY);
    }
    
    if (metadata.author) {
      this.pdf.text(`Autor: ${this.cleanText(metadata.author)}`, rightCol, metaY);
    }
    
    metaY += 8;
    
    if (metadata.subject) {
      this.pdf.text(`Tema: ${this.cleanText(metadata.subject)}`, leftCol, metaY);
    }
    
    if (metadata.keywords && metadata.keywords.length > 0) {
      metaY += 8;
      const keywordsText = `Palabras clave: ${metadata.keywords.join(', ')}`;
      const lines = this.pdf.splitTextToSize(this.cleanText(keywordsText), this.pageWidth - 2 * margin - 20);
      for (let i = 0; i < lines.length; i++) {
        this.pdf.text(lines[i], leftCol, metaY + (i * 6));
      }
    }
    
    this.currentY += boxHeight + this.template.layout.sectionSpacing;
  }

  // Professional section headers
  private addSection(title: string, content: string, iconKey?: string): void {
    this.checkPageBreak(30);
    
    const margin = this.template.layout.pageMargin;
    const icon = iconKey ? getIconForContext(iconKey) : '';
    
    // Section header background
    this.setFillColor(lightenColor(this.template.colors.primary, 95));
    this.pdf.rect(margin, this.currentY - 5, this.pageWidth - 2 * margin, 18, 'F');
    
    // Accent line
    this.setFillColor(this.template.colors.primary);
    this.pdf.rect(margin, this.currentY - 5, this.template.visual.accentLineWidth, 18, 'F');
    
    // Section title
    this.setColor(this.template.colors.primary);
    this.pdf.setFontSize(this.template.typography.heading.size);
    this.pdf.setFont('helvetica', this.template.typography.heading.weight);
    
    const titleText = icon ? `${icon} ${title}` : title;
    this.pdf.text(this.cleanText(titleText), margin + 8, this.currentY + 6);
    
    this.currentY += 25;
    
    // Content
    if (content.trim()) {
      this.addFormattedContent(content);
    }
    
    this.currentY += this.template.layout.sectionSpacing;
  }

  // Intelligent content formatting
  private addFormattedContent(content: string): void {
    const margin = this.template.layout.pageMargin + this.template.layout.contentMargin;
    const maxWidth = this.pageWidth - 2 * margin;
    
    // Split content into paragraphs
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    this.setColor(this.template.colors.text);
    this.pdf.setFontSize(this.template.typography.body.size);
    this.pdf.setFont('helvetica', this.template.typography.body.weight);
    
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i].trim();
      
      // Handle different content types
      if (paragraph.startsWith('•') || paragraph.match(/^\d+\./)) {
        this.addListItem(paragraph, margin, maxWidth);
      } else if (paragraph.includes(':') && paragraph.split(':')[0].length < 60) {
        this.addKeyValuePair(paragraph, margin, maxWidth);
      } else {
        this.addParagraph(paragraph, margin, maxWidth);
      }
      
      if (i < paragraphs.length - 1) {
        this.currentY += this.template.layout.paragraphSpacing;
      }
    }
  }

  private addParagraph(text: string, leftMargin: number, maxWidth: number): void {
    const lines = this.pdf.splitTextToSize(this.cleanText(text), maxWidth);
    
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, leftMargin, this.currentY);
      this.currentY += this.template.typography.body.size * this.template.typography.body.lineHeight;
    }
  }

  private addListItem(item: string, leftMargin: number, maxWidth: number): void {
    // Bullet point
    this.setFillColor(this.template.colors.primary);
    this.pdf.circle(leftMargin + 3, this.currentY - 2, 1, 'F');
    
    // Item text
    const cleanItem = item.replace(/^[•\d+\.]\s*/, '');
    const lines = this.pdf.splitTextToSize(this.cleanText(cleanItem), maxWidth - 10);
    
    for (const line of lines) {
      this.checkPageBreak();
      this.pdf.text(line, leftMargin + 8, this.currentY);
      this.currentY += this.template.typography.body.size * this.template.typography.body.lineHeight;
    }
  }

  private addKeyValuePair(pair: string, leftMargin: number, maxWidth: number): void {
    const [key, ...valueParts] = pair.split(':');
    const value = valueParts.join(':').trim();
    
    // Key
    this.setColor(this.template.colors.secondary);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.text(this.cleanText(`${key.trim()}:`), leftMargin, this.currentY);
    this.currentY += this.template.typography.body.size * 1.2;
    
    // Value
    if (value) {
      this.setColor(this.template.colors.text);
      this.pdf.setFont('helvetica', 'normal');
      const lines = this.pdf.splitTextToSize(this.cleanText(value), maxWidth - 10);
      
      for (const line of lines) {
        this.checkPageBreak();
        this.pdf.text(line, leftMargin + 5, this.currentY);
        this.currentY += this.template.typography.body.size * this.template.typography.body.lineHeight;
      }
    }
  }

  // Professional footer
  private addFooter(): void {
    const totalPages = this.pdf.getNumberOfPages();
    
    for (let i = 1; i <= totalPages; i++) {
      this.pdf.setPage(i);
      
      const footerY = this.pageHeight - this.template.layout.footerHeight;
      const margin = this.template.layout.pageMargin;
      
      // Footer line
      this.setDrawColor(this.template.colors.border);
      this.pdf.setLineWidth(0.3);
      this.pdf.line(margin, footerY + 5, this.pageWidth - margin, footerY + 5);
      
      // Footer content
      this.setColor(this.template.colors.lightText);
      this.pdf.setFontSize(this.template.typography.caption.size);
      this.pdf.setFont('helvetica', 'normal');
      
      // Left: Brand
      this.pdf.text('El Códice Epistémico', margin, footerY + 15);
      
      // Center: Date
      const dateText = new Date().toLocaleDateString('es-ES');
      this.pdf.text(dateText, this.pageWidth / 2, footerY + 15, { align: 'center' });
      
      // Right: Page numbers
      const pageText = `${i} de ${totalPages}`;
      this.pdf.text(pageText, this.pageWidth - margin, footerY + 15, { align: 'right' });
    }
  }

  // Specialized PDF creators
  public createDebatePDF(data: DebateExportData): jsPDF {
    const participantNames = data.participants.map(id => 
      philosophicalData[id]?.name || id
    ).join(', ');

    this.addDocumentHeader(data.topic, 'Debate Filosófico • Diálogo Socrático');
    
    this.addMetadata({
      createdAt: new Date(),
      author: participantNames,
      subject: data.topic,
      keywords: ['debate', 'filosofía', ...data.participants]
    });

    // Participants
    let participantsInfo = '';
    data.participants.forEach((id, index) => {
      const philosopher = philosophicalData[id];
      if (philosopher) {
        participantsInfo += `${index + 1}. ${philosopher.name}\n`;
        participantsInfo += `   "${philosopher.coreIdea}"\n`;
        participantsInfo += `   Período: ${philosopher.year || 'N/A'}\n\n`;
      }
    });
    
    if (participantsInfo) {
      this.addSection('Participantes del Debate', participantsInfo, 'participants');
    }

    // Debate transcript with professional formatting
    this.addSection('Transcripción del Debate', '', 'transcript');
    
    data.messages.forEach((message) => {
      const speakerName = message.speaker === 'Moderador' 
        ? 'Moderador' 
        : philosophicalData[message.speaker]?.name || message.speaker;
      
      this.checkPageBreak(25);
      
      const margin = this.template.layout.pageMargin;
      const isModerator = message.speaker === 'Moderador';
      
      // Speaker header
      const headerColor = isModerator ? this.template.colors.secondary : this.template.colors.primary;
      this.setFillColor(lightenColor(headerColor, 90));
      this.pdf.rect(margin, this.currentY - 3, this.pageWidth - 2 * margin, 12, 'F');
      
      // Speaker accent
      this.setFillColor(headerColor);
      this.pdf.rect(margin, this.currentY - 3, 3, 12, 'F');
      
      this.setColor(headerColor);
      this.pdf.setFontSize(this.template.typography.subheading.size);
      this.pdf.setFont('helvetica', 'bold');
      
      const icon = isModerator ? '🎯' : '💭';
      this.pdf.text(`${icon} ${speakerName}`, margin + 8, this.currentY + 4);
      this.currentY += 18;
      
      // Message content
      this.setColor(this.template.colors.text);
      this.pdf.setFontSize(this.template.typography.body.size);
      this.pdf.setFont('helvetica', 'normal');
      
      const contentMargin = margin + 15;
      const lines = this.pdf.splitTextToSize(this.cleanText(message.content), this.pageWidth - 2 * contentMargin);
      
      for (const line of lines) {
        this.checkPageBreak();
        this.pdf.text(line, contentMargin, this.currentY);
        this.currentY += this.template.typography.body.size * this.template.typography.body.lineHeight;
      }
      
      this.currentY += this.template.layout.paragraphSpacing;
    });

    // Analysis
    if (data.analysis) {
      this.addSection('Análisis del Debate', data.analysis.overallAnalysis, 'analysis');
      
      if (data.analysis.arguments.length > 0) {
        let argumentsText = '';
        data.analysis.arguments.forEach((arg, index) => {
          argumentsText += `${index + 1}. ${arg.participantName}\n`;
          argumentsText += `Tesis: "${arg.thesis}"\n`;
          argumentsText += `Evaluación: Fuerza ${arg.strength}/10 • Coherencia ${arg.coherence}/10\n\n`;
        });
        
        this.addSection('Argumentos Principales', argumentsText, 'arguments');
      }
      
      let scoresText = '';
      Object.entries(data.analysis.participantScores).forEach(([participantId, score]) => {
        const participant = philosophicalData[participantId];
        if (participant) {
          const stars = '★'.repeat(Math.floor(score / 2)) + '☆'.repeat(5 - Math.floor(score / 2));
          scoresText += `${participant.name}: ${score}/10 ${stars}\n`;
        }
      });
      
      if (scoresText) {
        this.addSection('Puntuaciones Finales', scoresText, 'scores');
      }
      
      this.addSection('Conclusión del Moderador', data.analysis.moderatorConclusion, 'conclusion');
    }

    this.addFooter();
    return this.pdf;
  }

  public createOraclePDF(data: OracleExportData): jsPDF {
    const philosopherName = philosophicalData[data.philosopher]?.name || data.philosopher;
    const philosopher = philosophicalData[data.philosopher];
    
    this.addDocumentHeader(`Consulta al Oráculo: ${philosopherName}`, 'Sabiduría Filosófica Ancestral');
    
    this.addMetadata({
      createdAt: new Date(),
      author: philosopherName,
      subject: `Conversación con ${philosopherName}`,
      keywords: ['oráculo', 'filosofía', data.philosopher, 'sabiduría']
    });

    // Philosopher info
    if (philosopher) {
      let philosopherInfo = `"${philosopher.coreIdea}"`;
      
      if (philosopher.year) {
        philosopherInfo += `\n\nAño: ${philosopher.year}`;
      }
      
      if (philosopher.category) {
        const categoryNames: Record<string, string> = {
          'ancient': 'Filosofía Antigua',
          'pre-columbian': 'Filosofía Precolombina',
          'modernity': 'Modernidad',
          '19th_century': 'Siglo XIX',
          '20th_century': 'Siglo XX',
          'contemporary': 'Contemporáneo',
          'methods': 'Métodos'
        };
        philosopherInfo += `\n\nPeríodo: ${categoryNames[philosopher.category] || philosopher.category}`;
      }
      
      this.addSection(`El Filósofo: ${philosopherName}`, philosopherInfo, 'oracle');
    }

    // Conversation
    this.addSection('Diálogo Sagrado', '', 'conversation');
    
    data.conversation.forEach((message) => {
      const isUser = message.role === 'user';
      const speaker = isUser ? 'Consultante' : philosopherName;
      
      this.checkPageBreak(25);
      
      const margin = this.template.layout.pageMargin;
      
      // Message styling
      const headerColor = isUser ? lightenColor(this.template.colors.primary, 70) : this.template.colors.sectionBg;
      this.setFillColor(headerColor);
      this.pdf.rect(margin, this.currentY - 3, this.pageWidth - 2 * margin, 12, 'F');
      
      this.setColor(isUser ? this.template.colors.secondary : this.template.colors.primary);
      this.pdf.setFontSize(this.template.typography.subheading.size);
      this.pdf.setFont('helvetica', 'bold');
      
      const icon = isUser ? '🙋‍♂️' : '🔮';
      this.pdf.text(`${icon} ${speaker}`, margin + 8, this.currentY + 4);
      this.currentY += 18;
      
      // Message content
      this.setColor(this.template.colors.text);
      this.pdf.setFontSize(this.template.typography.body.size);
      this.pdf.setFont('helvetica', isUser ? 'normal' : 'normal');
      
      const contentMargin = margin + (isUser ? 10 : 15);
      const lines = this.pdf.splitTextToSize(this.cleanText(message.content), this.pageWidth - 2 * contentMargin);
      
      for (const line of lines) {
        this.checkPageBreak();
        this.pdf.text(line, contentMargin, this.currentY);
        this.currentY += this.template.typography.body.size * this.template.typography.body.lineHeight;
      }
      
      this.currentY += this.template.layout.paragraphSpacing;
    });

    if (data.summary) {
      this.addSection('Sabiduría Destilada', data.summary, 'summary');
    }

    this.addFooter();
    return this.pdf;
  }

  public createParadigmPDF(data: ParadigmExportData): jsPDF {
    this.addDocumentHeader(`Análisis Paradigmático: ${data.paradigm}`, 'Laboratorio de Paradigmas Científicos');
    
    this.addMetadata({
      createdAt: data.timestamp,
      author: 'El Códice Epistémico',
      subject: `Análisis paradigmático: ${data.objectOfStudy}`,
      keywords: ['paradigma', 'análisis', 'epistemología', data.paradigm.toLowerCase()]
    });

    this.addSection('Objeto de Estudio', data.objectOfStudy, 'study');
    
    this.addSection('Dimensión Ontológica', 
      `¿Qué existe según este paradigma?\n\n${data.analysis.ontological}`, 
      'ontological');
      
    this.addSection('Dimensión Epistemológica', 
      `¿Cómo conocemos según este paradigma?\n\n${data.analysis.epistemological}`, 
      'epistemological');
      
    this.addSection('Dimensión Metodológica', 
      `¿Cómo investigamos según este paradigma?\n\n${data.analysis.methodological}`, 
      'methodological');

    const synthesisText = `Este análisis revela las estructuras fundamentales del paradigma ${data.paradigm} aplicado al estudio de "${data.objectOfStudy}". La integración de las dimensiones ontológica, epistemológica y metodológica proporciona una comprensión holística de cómo este marco conceptual estructura tanto la realidad como nuestro acceso a ella.`;
    
    this.addSection('Síntesis Paradigmática', synthesisText, 'analysis');

    this.addFooter();
    return this.pdf;
  }

  public createGenericPDF(options: ExportOptions): jsPDF {
    this.addDocumentHeader(options.title, 'Documento Filosófico');
    
    if (options.metadata) {
      this.addMetadata(options.metadata);
    }

    this.addSection('Contenido', options.content, 'content');
    this.addFooter();
    return this.pdf;
  }
}

// Export functions
export async function exportToPDF(options: ExportOptions): Promise<void> {
  const designer = new ProfessionalPDFDesigner('generic');
  const pdf = designer.createGenericPDF(options);
  pdf.save(`${options.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

export async function exportDebateToPDF(data: DebateExportData): Promise<void> {
  const designer = new ProfessionalPDFDesigner('debate');
  const pdf = designer.createDebatePDF(data);
  pdf.save(`debate_${data.topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

export async function exportOracleToPDF(data: OracleExportData): Promise<void> {
  const designer = new ProfessionalPDFDesigner('oracle');
  const pdf = designer.createOraclePDF(data);
  const philosopherName = philosophicalData[data.philosopher]?.name || data.philosopher;
  pdf.save(`oraculo_${philosopherName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

export async function exportParadigmToPDF(data: ParadigmExportData): Promise<void> {
  const designer = new ProfessionalPDFDesigner('paradigm');
  const pdf = designer.createParadigmPDF(data);
  pdf.save(`paradigma_${data.paradigm.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
}

// HTML Export (unchanged)
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
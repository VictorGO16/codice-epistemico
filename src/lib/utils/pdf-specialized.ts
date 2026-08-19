import jsPDF from 'jspdf';
import { philosophicalData } from '@/lib/data/philosophical-data';

/* ==========================================================================
   Exportación de documentos (PDF y HTML)

   Reemplaza al sistema anterior, que arrastraba tres problemas:

   1. El texto se limpiaba con una clase de caracteres permitidos que borraba
      "<" y ">" pero dejaba el nombre de la etiqueta: <strong>x</strong> salía
      impreso como "strongxstrong".
   2. Las cajas de fondo se dibujaban con altura fija antes de saber cuánto
      texto entraba, así que el contenido se derramaba encima del título
      siguiente.
   3. El HTML inyectaba texto plano dentro de un <div> con white-space:pre-wrap,
      de modo que el markdown del modelo se veía crudo (** sin renderizar).

   Aquí el texto pasa por un único pipeline: HTML → markdown → bloques con
   tramos de estilo, y cada salida (PDF o HTML) renderiza esos bloques.
   ========================================================================== */

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
      strength: number;
      coherence: number;
      arguments: string[];
    }>;
    participantScores: Record<string, number>;
    moderatorConclusion: string;
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

/* ==========================================================================
   1. Pipeline de texto
   ========================================================================== */

const ENTITIES: Record<string, string> = {
  '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>',
  '&quot;': '"', '&#39;': "'", '&apos;': "'", '&hellip;': '…',
  '&mdash;': '—', '&ndash;': '–', '&laquo;': '«', '&raquo;': '»',
};

/** Convierte el HTML almacenado en los datos a markdown equivalente. */
export function htmlToMarkdown(input: string): string {
  if (!input) return '';
  let t = input;

  t = t.replace(/<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '');
  t = t.replace(/<\s*(h[1-6])[^>]*>/gi, '\n\n## ').replace(/<\s*\/\s*h[1-6]\s*>/gi, '\n\n');
  t = t.replace(/<\s*(strong|b)\s*[^>]*>/gi, '**').replace(/<\s*\/\s*(strong|b)\s*>/gi, '**');
  t = t.replace(/<\s*(em|i)\s*[^>]*>/gi, '*').replace(/<\s*\/\s*(em|i)\s*>/gi, '*');
  t = t.replace(/<\s*li[^>]*>/gi, '\n- ').replace(/<\s*\/\s*li\s*>/gi, '');
  t = t.replace(/<\s*br\s*\/?>/gi, '\n');
  t = t.replace(/<\s*\/\s*(p|div|ul|ol|blockquote)\s*>/gi, '\n\n');
  t = t.replace(/<[^>]+>/g, '');

  for (const [entity, char] of Object.entries(ENTITIES)) {
    t = t.split(entity).join(char);
  }
  t = t.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

  return t.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * jsPDF con las fuentes estándar solo cubre Latin-1. Los emojis y los signos
 * tipográficos fuera de ese rango salían como "Ø=ÞK", de ahí la colección de
 * expresiones regulares que intentaba adivinar esa basura a posteriori.
 * Aquí se normaliza antes de escribir, no después.
 */
function toLatin1(text: string): string {
  return text
    // Emojis y pictogramas
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F1E6}-\u{1F1FF}]/gu, '')
    // Comillas y guiones tipográficos
    .replace(/[\u201C\u201D\u201E]/g, '"')
    .replace(/[\u2018\u2019\u201A]/g, "'")
    .replace(/\u2026/g, '...')
    .replace(/[\u2013\u2014]/g, '-')
    // Espacios especiales y caracteres de ancho cero
    .replace(/[\u00A0\u2007\u202F]/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    // Caracteres de control
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[ \t]{2,}/g, ' ');
}

export type Run = { text: string; bold?: boolean; italic?: boolean };
export type Block =
  | { type: 'heading'; level: 2 | 3; runs: Run[] }
  | { type: 'paragraph'; runs: Run[] }
  | { type: 'listItem'; runs: Run[] }
  | { type: 'quote'; runs: Run[] };

/** Divide una línea en tramos según **negrita** y *cursiva*. */
function parseRuns(line: string): Run[] {
  const runs: Run[] = [];
  const pattern = /(\*\*|__)(.+?)\1|(\*|_)(?!\s)(.+?)(?<!\s)\3|(`)(.+?)\5/g;
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = pattern.exec(line)) !== null) {
    if (m.index > last) runs.push({ text: line.slice(last, m.index) });
    if (m[2] !== undefined) runs.push({ text: m[2], bold: true });
    else if (m[4] !== undefined) runs.push({ text: m[4], italic: true });
    else if (m[6] !== undefined) runs.push({ text: m[6] });
    last = pattern.lastIndex;
  }
  if (last < line.length) runs.push({ text: line.slice(last) });
  return runs.length ? runs : [{ text: line }];
}

/** Markdown (o HTML) → bloques con estilo. Único punto de verdad del formato. */
export function toBlocks(source: string): Block[] {
  const text = toLatin1(htmlToMarkdown(source));
  const blocks: Block[] = [];
  let paragraph: string[] = [];

  const flush = () => {
    if (!paragraph.length) return;
    blocks.push({ type: 'paragraph', runs: parseRuns(paragraph.join(' ').trim()) });
    paragraph = [];
  };

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();

    if (!line) { flush(); continue; }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      flush();
      blocks.push({
        type: 'heading',
        level: heading[1].length <= 2 ? 2 : 3,
        runs: parseRuns(heading[2]),
      });
      continue;
    }

    const item = /^([-*•]|\d+[.)])\s+(.*)$/.exec(line);
    if (item) {
      flush();
      blocks.push({ type: 'listItem', runs: parseRuns(item[2]) });
      continue;
    }

    if (line.startsWith('>')) {
      flush();
      blocks.push({ type: 'quote', runs: parseRuns(line.replace(/^>\s?/, '')) });
      continue;
    }

    paragraph.push(line);
  }
  flush();
  return blocks;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function runsToHtml(runs: Run[]): string {
  return runs
    .map((r) => {
      const safe = escapeHtml(r.text);
      if (r.bold) return `<strong>${safe}</strong>`;
      if (r.italic) return `<em>${safe}</em>`;
      return safe;
    })
    .join('');
}

/** Bloques → HTML. Agrupa los items consecutivos en una sola lista. */
export function blocksToHtml(blocks: Block[]): string {
  const out: string[] = [];
  let inList = false;

  for (const block of blocks) {
    if (block.type === 'listItem') {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${runsToHtml(block.runs)}</li>`);
      continue;
    }
    if (inList) { out.push('</ul>'); inList = false; }

    if (block.type === 'heading') out.push(`<h${block.level}>${runsToHtml(block.runs)}</h${block.level}>`);
    else if (block.type === 'quote') out.push(`<blockquote>${runsToHtml(block.runs)}</blockquote>`);
    else out.push(`<p>${runsToHtml(block.runs)}</p>`);
  }
  if (inList) out.push('</ul>');
  return out.join('\n');
}

/* ==========================================================================
   2. Documento PDF

   Composición sobria: sin bandas de color, sin cajas de altura fija.
   El flujo mide antes de dibujar, así que nada se solapa.
   ========================================================================== */

const INK = { text: '#1a1d21', muted: '#5f6b78', accent: '#0f6e68', rule: '#d9dde1' };

class Document {
  private pdf: jsPDF;
  private pageWidth: number;
  private pageHeight: number;
  private marginX = 22;
  private marginTop = 24;
  private marginBottom = 22;
  private y: number;

  constructor() {
    this.pdf = new jsPDF('p', 'mm', 'a4');
    this.pageWidth = this.pdf.internal.pageSize.getWidth();
    this.pageHeight = this.pdf.internal.pageSize.getHeight();
    this.y = this.marginTop;
  }

  get doc(): jsPDF { return this.pdf; }
  get contentWidth(): number { return this.pageWidth - this.marginX * 2; }

  private color(hex: string): void {
    this.pdf.setTextColor(
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    );
  }

  private ensure(space: number): void {
    if (this.y + space > this.pageHeight - this.marginBottom) {
      this.pdf.addPage();
      this.y = this.marginTop;
    }
  }

  space(mm: number): void { this.y += mm; }

  rule(): void {
    this.ensure(6);
    this.pdf.setDrawColor(
      parseInt(INK.rule.slice(1, 3), 16),
      parseInt(INK.rule.slice(3, 5), 16),
      parseInt(INK.rule.slice(5, 7), 16),
    );
    this.pdf.setLineWidth(0.2);
    this.pdf.line(this.marginX, this.y, this.pageWidth - this.marginX, this.y);
    this.y += 6;
  }

  /**
   * Escribe tramos con ajuste de línea, cambiando de fuente por tramo.
   *
   * Las palabras se agrupan en "racimos": si entre dos palabras no había
   * espacio en el original (el punto que sigue a una negrita, por ejemplo),
   * viajan juntas y se dibujan sin separación. Sin esto, **falsacionismo**.
   * se imprimía como "falsacionismo ." y la línea podía partirse antes del
   * signo de puntuación.
   */
  private writeRuns(runs: Run[], x: number, width: number, size: number, leading: number): void {
    this.pdf.setFontSize(size);
    type Word = { text: string; style: string };
    type Cluster = Word[];

    const clusters: Cluster[] = [];
    let spaceBefore = true;

    for (const run of runs) {
      const style = run.bold ? (run.italic ? 'bolditalic' : 'bold') : run.italic ? 'italic' : 'normal';
      for (const part of run.text.split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) { spaceBefore = true; continue; }
        if (spaceBefore || !clusters.length) clusters.push([{ text: part, style }]);
        else clusters[clusters.length - 1].push({ text: part, style });
        spaceBefore = false;
      }
    }

    const wordWidth = (w: Word) => {
      this.pdf.setFont('helvetica', w.style);
      return this.pdf.getTextWidth(w.text);
    };
    const clusterWidth = (c: Cluster) => c.reduce((sum, w) => sum + wordWidth(w), 0);
    const spaceWidth = () => {
      this.pdf.setFont('helvetica', 'normal');
      return this.pdf.getTextWidth(' ');
    };

    const drawLine = (line: Cluster[]) => {
      this.ensure(leading);
      let cursor = x;
      line.forEach((cluster, i) => {
        for (const w of cluster) {
          this.pdf.setFont('helvetica', w.style);
          this.pdf.text(w.text, cursor, this.y);
          cursor += wordWidth(w);
        }
        if (i < line.length - 1) cursor += spaceWidth();
      });
      this.y += leading;
    };

    let line: Cluster[] = [];
    let used = 0;

    for (const cluster of clusters) {
      const cw = clusterWidth(cluster);
      const gap = line.length ? spaceWidth() : 0;
      if (line.length && used + gap + cw > width) {
        drawLine(line);
        line = [cluster];
        used = cw;
      } else {
        line.push(cluster);
        used += gap + cw;
      }
    }
    if (line.length) drawLine(line);
  }

  title(text: string, subtitle?: string): void {
    this.ensure(30);
    this.color(INK.text);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(20);
    this.writeRuns([{ text: toLatin1(text) }], this.marginX, this.contentWidth, 20, 8.5);
    if (subtitle) {
      this.y += 1;
      this.color(INK.muted);
      this.pdf.setFont('helvetica', 'normal');
      this.writeRuns([{ text: toLatin1(subtitle) }], this.marginX, this.contentWidth, 11, 5.5);
    }
    this.y += 5;
    this.rule();
  }

  /** Etiqueta de sección en versalitas, igual que en la interfaz. */
  label(text: string): void {
    this.ensure(12);
    this.color(INK.accent);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(8.5);
    this.pdf.text(toLatin1(text).toUpperCase(), this.marginX, this.y, { charSpace: 0.4 });
    this.y += 6;
  }

  speaker(name: string, note?: string): void {
    this.ensure(10);
    this.color(INK.text);
    this.pdf.setFont('helvetica', 'bold');
    this.pdf.setFontSize(10.5);
    this.pdf.text(toLatin1(name), this.marginX, this.y);
    if (note) {
      const w = this.pdf.getTextWidth(toLatin1(name));
      this.color(INK.muted);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.setFontSize(9);
      this.pdf.text(toLatin1(note), this.marginX + w + 3, this.y);
    }
    this.y += 5.5;
  }

  meta(pairs: Array<[string, string]>): void {
    this.pdf.setFontSize(9.5);
    for (const [key, value] of pairs) {
      if (!value) continue;
      this.ensure(6);
      this.color(INK.muted);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.text(`${toLatin1(key)}: `, this.marginX, this.y);
      const keyWidth = this.pdf.getTextWidth(`${toLatin1(key)}: `);
      this.color(INK.text);
      this.pdf.text(toLatin1(value), this.marginX + keyWidth, this.y);
      this.y += 5;
    }
    this.y += 3;
  }

  body(source: string, opts: { indent?: number; size?: number } = {}): void {
    const indent = opts.indent ?? 0;
    const size = opts.size ?? 10.5;
    const leading = size * 0.52;
    const x = this.marginX + indent;
    const width = this.contentWidth - indent;

    for (const block of toBlocks(source)) {
      if (block.type === 'heading') {
        this.y += 3;
        this.ensure(9);
        this.color(INK.text);
        this.pdf.setFont('helvetica', 'bold');
        this.writeRuns(block.runs, x, width, block.level === 2 ? 12 : 11, 6);
        this.y += 1.5;
        continue;
      }
      if (block.type === 'listItem') {
        this.ensure(leading);
        this.color(INK.text);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.setFontSize(size);
        this.pdf.text('•', x, this.y);
        this.writeRuns(block.runs, x + 4, width - 4, size, leading);
        this.y += 1;
        continue;
      }
      if (block.type === 'quote') {
        this.color(INK.muted);
        this.pdf.setFont('helvetica', 'italic');
        this.writeRuns(block.runs, x + 4, width - 4, size, leading);
        this.y += 2;
        continue;
      }
      this.color(INK.text);
      this.pdf.setFont('helvetica', 'normal');
      this.writeRuns(block.runs, x, width, size, leading);
      this.y += 3;
    }
  }

  finish(footer: string): jsPDF {
    const total = this.pdf.getNumberOfPages();
    for (let i = 1; i <= total; i++) {
      this.pdf.setPage(i);
      this.color(INK.muted);
      this.pdf.setFont('helvetica', 'normal');
      this.pdf.setFontSize(8);
      this.pdf.text(toLatin1(footer), this.marginX, this.pageHeight - 12);
      this.pdf.text(`${i} / ${total}`, this.pageWidth - this.marginX, this.pageHeight - 12, { align: 'right' });
    }
    return this.pdf;
  }
}

const FOOTER = 'Epistemología y Metodología';

function today(): string {
  return new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
}

function fileName(prefix: string, name: string): string {
  const slug = name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '')
    .toLowerCase().slice(0, 60);
  return `${prefix}-${slug || 'documento'}.pdf`;
}

/* ==========================================================================
   3. Composición de cada documento
   ========================================================================== */

export function buildOraclePdf(data: OracleExportData): jsPDF {
  const concept = philosophicalData[data.philosopher];
  const name = concept?.name || data.philosopher;

  const doc = new Document();
  doc.title(`Diálogo con ${name}`, `Registro de la conversación · ${today()}`);

  if (concept?.coreIdea) {
    doc.label('Punto de partida');
    doc.body(concept.coreIdea, { size: 10 });
    doc.space(2);
    doc.rule();
  }

  doc.label('Conversación');
  data.conversation.forEach((message) => {
    doc.speaker(message.role === 'user' ? 'Pregunta' : name);
    doc.body(message.content, { indent: 4 });
    doc.space(2);
  });

  if (data.summary) {
    doc.rule();
    doc.label('Síntesis');
    doc.body(data.summary);
  }

  return doc.finish(FOOTER);
}

export async function exportOracleToPDF(data: OracleExportData): Promise<void> {
  const name = philosophicalData[data.philosopher]?.name || data.philosopher;
  buildOraclePdf(data).save(fileName('dialogo', name));
}

export function buildDebatePdf(data: DebateExportData): jsPDF {
  const doc = new Document();
  doc.title('Debate', `${data.topic} · ${today()}`);

  const names = data.participants
    .map((id) => philosophicalData[id]?.name || id)
    .join(' · ');
  doc.meta([['Participantes', names]]);
  doc.rule();

  doc.label('Intervenciones');
  data.messages.forEach((message) => {
    doc.speaker(message.speaker);
    doc.body(message.content, { indent: 4 });
    doc.space(2);
  });

  if (data.analysis) {
    doc.rule();
    doc.label('Análisis');
    if (data.analysis.overallAnalysis) doc.body(data.analysis.overallAnalysis);

    data.analysis.arguments?.forEach((argument) => {
      doc.space(2);
      doc.speaker(argument.participantName, `solidez ${argument.strength}/10 · coherencia ${argument.coherence}/10`);
      if (argument.thesis) doc.body(argument.thesis, { indent: 4, size: 10 });
      argument.arguments?.forEach((line) => doc.body(`- ${line}`, { indent: 4, size: 10 }));
    });

    if (data.analysis.moderatorConclusion) {
      doc.space(3);
      doc.label('Cierre');
      doc.body(data.analysis.moderatorConclusion);
    }
  }

  return doc.finish(FOOTER);
}

export async function exportDebateToPDF(data: DebateExportData): Promise<void> {
  buildDebatePdf(data).save(fileName('debate', data.topic));
}

export function buildParadigmPdf(data: ParadigmExportData): jsPDF {
  const doc = new Document();
  doc.title('Análisis paradigmático', `${data.objectOfStudy} · ${today()}`);
  doc.meta([['Paradigma', data.paradigm], ['Objeto de estudio', data.objectOfStudy]]);
  doc.rule();

  const sections: Array<[string, string]> = [
    ['Ontológico', data.analysis.ontological],
    ['Epistemológico', data.analysis.epistemological],
    ['Metodológico', data.analysis.methodological],
    ['Propuesta de investigación', data.analysis.researchProposal],
  ];

  sections.forEach(([label, content], index) => {
    if (!content) return;
    if (index > 0) { doc.space(2); doc.rule(); }
    doc.label(label);
    doc.body(content);
  });

  return doc.finish(FOOTER);
}

export async function exportParadigmToPDF(data: ParadigmExportData): Promise<void> {
  buildParadigmPdf(data).save(fileName('analisis', data.objectOfStudy));
}

export async function exportToPDF(options: ExportOptions): Promise<void> {
  const doc = new Document();
  doc.title(options.title, options.metadata?.subject);
  if (options.metadata) {
    doc.meta([
      ['Fecha', (options.metadata.createdAt ?? new Date()).toLocaleDateString('es-CL')],
      ['Autor', options.metadata.author ?? ''],
    ]);
  }
  doc.body(options.content);
  doc.finish(FOOTER).save(fileName('documento', options.title));
}

/* ==========================================================================
   4. Documento HTML
   El contenido pasa por los mismos bloques que el PDF.
   ========================================================================== */

interface HtmlSection { id: string; title: string; body: string }

function slugify(text: string, index: number): string {
  const base = text
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return base ? `${base}-${index}` : `seccion-${index}`;
}

/** Parte los bloques en secciones por cada encabezado de nivel 2. */
function splitIntoSections(blocks: Block[]): { preamble: string; sections: HtmlSection[] } {
  const sections: HtmlSection[] = [];
  const preambleBlocks: Block[] = [];
  let current: { title: string; blocks: Block[] } | null = null;

  const close = () => {
    if (!current) return;
    sections.push({
      id: slugify(current.title, sections.length + 1),
      title: current.title,
      body: blocksToHtml(current.blocks),
    });
    current = null;
  };

  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 2) {
      close();
      current = { title: block.runs.map((r) => r.text).join(''), blocks: [] };
      continue;
    }
    if (current) current.blocks.push(block);
    else preambleBlocks.push(block);
  }
  close();

  return { preamble: blocksToHtml(preambleBlocks), sections };
}

/**
 * Documento HTML autocontenido.
 *
 * El HTML es el formato que más se va a usar y no tiene por qué limitarse a
 * volcar el texto: lleva índice que sigue la lectura, secciones plegables,
 * copiado por sección, tema claro/oscuro y una hoja de impresión propia.
 * Todo va incrustado: el archivo funciona sin conexión y sin dependencias.
 */
export function buildHtmlDocument(options: ExportOptions): string {
  const meta = options.metadata;
  const created = (meta?.createdAt ?? new Date()).toLocaleDateString('es-CL', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const { preamble, sections } = splitIntoSections(toBlocks(options.content));
  const words = options.content.replace(/[#*_>`-]/g, ' ').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));

  const metaRows = [
    ['Fecha', created],
    ['Tema', meta?.subject ?? ''],
    ['Autor', meta?.author ?? ''],
    ['Extensión', `${words.toLocaleString('es-CL')} palabras · ${minutes} min de lectura`],
  ].filter(([, value]) => value);

  const toc = sections
    .map((s) => `<li><a href="#${s.id}" data-target="${s.id}">${escapeHtml(s.title)}</a></li>`)
    .join('');

  const body = sections
    .map(
      (s) => `<section class="sec" id="${s.id}">
  <div class="sec-head">
    <button class="toggle" aria-expanded="true" aria-controls="${s.id}-body">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
      <h2>${escapeHtml(s.title)}</h2>
    </button>
    <button class="copy" data-copy="${s.id}-body" title="Copiar esta sección">Copiar</button>
  </div>
  <div class="sec-body" id="${s.id}-body">${s.body}</div>
</section>`,
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="es" data-theme="auto">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(options.title)}</title>
<meta name="author" content="${escapeHtml(meta?.author ?? FOOTER)}">
<meta name="description" content="${escapeHtml(meta?.subject ?? options.title)}">
<style>
  :root{
    --ink:#1a1d21; --muted:#5f6b78; --accent:#0f6e68; --rule:#e4e7ea;
    --paper:#fdfdfc; --surface:#f6f7f8; --measure:68ch;
    --serif:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,'Times New Roman',serif;
    --sans:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  }
  html[data-theme="dark"]{
    --ink:#dde3ec; --muted:#9aa6b8; --accent:#4fd1c5; --rule:#263140;
    --paper:#0b1017; --surface:#131a24;
  }
  @media (prefers-color-scheme: dark){
    html[data-theme="auto"]{
      --ink:#dde3ec; --muted:#9aa6b8; --accent:#4fd1c5; --rule:#263140;
      --paper:#0b1017; --surface:#131a24;
    }
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--serif);
       font-size:17px;line-height:1.72;-webkit-font-smoothing:antialiased}

  #progress{position:fixed;top:0;left:0;height:2px;width:0;background:var(--accent);z-index:10;transition:width .1s linear}

  .shell{max-width:1180px;margin:0 auto;padding:0 24px 96px;
         display:grid;gap:56px;grid-template-columns:minmax(0,1fr)}
  @media (min-width:1080px){ .shell{grid-template-columns:220px minmax(0,var(--measure));justify-content:center;align-items:start} }

  /* --- Índice --- */
  nav.toc{font-family:var(--sans);font-size:13.5px;padding-top:64px}
  @media (min-width:1080px){ nav.toc{position:sticky;top:0;max-height:100vh;overflow-y:auto} }
  nav.toc .label{font-size:11px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;
                 color:var(--muted);margin-bottom:12px}
  nav.toc ul{list-style:none;margin:0;padding:0}
  nav.toc a{display:block;padding:7px 12px;color:var(--muted);text-decoration:none;
            border-left:2px solid var(--rule);line-height:1.4}
  nav.toc a:hover{color:var(--ink)}
  nav.toc a.active{color:var(--accent);border-left-color:var(--accent);font-weight:600}
  .toolbar{display:flex;gap:8px;margin-top:22px;flex-wrap:wrap}
  .toolbar button{font-family:var(--sans);font-size:12px;color:var(--muted);background:none;
                  border:1px solid var(--rule);border-radius:999px;padding:5px 11px;cursor:pointer}
  .toolbar button:hover{color:var(--accent);border-color:var(--accent)}

  /* --- Documento --- */
  article{padding-top:64px;min-width:0}
  h1{font-size:33px;line-height:1.18;letter-spacing:-.015em;margin:0 0 10px;font-weight:600}
  .lede{font-family:var(--sans);color:var(--muted);font-size:14px;margin:0 0 30px}
  dl.meta{display:grid;grid-template-columns:auto 1fr;gap:6px 18px;margin:0 0 34px;
          font-family:var(--sans);font-size:13.5px}
  dl.meta dt{color:var(--muted)} dl.meta dd{margin:0}
  hr{border:0;border-top:1px solid var(--rule);margin:0 0 8px}

  .sec{border-bottom:1px solid var(--rule);padding:10px 0 6px}
  .sec:last-of-type{border-bottom:0}
  .sec-head{display:flex;align-items:center;gap:12px}
  .sec-head .toggle{flex:1;display:flex;align-items:center;gap:10px;background:none;border:0;
                    padding:14px 0;cursor:pointer;color:inherit;text-align:left}
  .sec-head svg{width:14px;height:14px;flex:none;fill:none;stroke:var(--muted);stroke-width:2;
                stroke-linecap:round;stroke-linejoin:round;transition:transform .18s ease}
  .sec[data-collapsed="true"] svg{transform:rotate(-90deg)}
  .sec[data-collapsed="true"] .sec-body{display:none}
  .sec h2{font-family:var(--sans);font-size:12px;font-weight:600;letter-spacing:.13em;
          text-transform:uppercase;color:var(--accent);margin:0}
  .copy{font-family:var(--sans);font-size:11.5px;color:var(--muted);background:none;
        border:1px solid var(--rule);border-radius:6px;padding:4px 9px;cursor:pointer;opacity:0;
        transition:opacity .15s ease}
  .sec:hover .copy,.copy:focus{opacity:1}
  .copy:hover{color:var(--accent);border-color:var(--accent)}

  .sec-body{padding-bottom:22px}
  .sec-body p{margin:0 0 1.05em;text-align:justify;hyphens:auto}
  .sec-body p:last-child{margin-bottom:0}
  .sec-body h3{font-family:var(--sans);font-size:15px;font-weight:600;margin:1.7em 0 .5em;
               letter-spacing:0;text-transform:none;color:var(--ink)}
  .sec-body ul{margin:0 0 1.05em;padding-left:1.3em} .sec-body li{margin-bottom:.4em}
  .sec-body blockquote{margin:1.2em 0;padding-left:1em;border-left:2px solid var(--rule);
                       color:var(--muted);font-style:italic}
  .sec-body strong{font-weight:600}
  .sec-body code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9em;
                 background:var(--surface);padding:.1em .35em;border-radius:4px}

  footer{grid-column:1/-1;border-top:1px solid var(--rule);padding-top:18px;margin-top:20px;
         font-family:var(--sans);font-size:12.5px;color:var(--muted)}

  /* --- Impresión --- */
  @media print{
    @page{margin:20mm 18mm}
    #progress,nav.toc,.copy,.sec-head svg{display:none!important}
    html[data-theme]{--ink:#000;--muted:#444;--accent:#000;--rule:#bbb;--paper:#fff;--surface:#fff}
    body{font-size:10.5pt;line-height:1.55}
    .shell{display:block;max-width:none;padding:0}
    article{padding-top:0}
    h1{font-size:20pt}
    .sec{break-inside:avoid-page;border-bottom:0}
    .sec[data-collapsed="true"] .sec-body{display:block!important}
    .sec h2{font-size:9pt;color:#000;border-bottom:1px solid #bbb;padding-bottom:3px;margin-bottom:8px}
    .sec-head .toggle{padding:12px 0 0}
    a{color:#000;text-decoration:none}
  }
</style>
</head>
<body>
<div id="progress"></div>
<div class="shell">

  <nav class="toc" aria-label="Índice del documento">
    <div class="label">Contenido</div>
    <ul>${toc}</ul>
    <div class="toolbar">
      <button id="btn-fold">Plegar todo</button>
      <button id="btn-theme">Tema</button>
      <button id="btn-print">Imprimir</button>
    </div>
  </nav>

  <article>
    <h1>${escapeHtml(options.title)}</h1>
    <p class="lede">${escapeHtml(FOOTER)} · ${created}</p>
    ${metaRows.length ? `<dl class="meta">${metaRows.map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join('')}</dl>` : ''}
    <hr>
    ${preamble ? `<div class="sec-body">${preamble}</div>` : ''}
    ${body}
  </article>

  <footer>${escapeHtml(FOOTER)}. Documento generado el ${created}. Este archivo es autónomo: no necesita conexión.</footer>
</div>

<script>
(function () {
  var secs = Array.prototype.slice.call(document.querySelectorAll('.sec'));
  var links = Array.prototype.slice.call(document.querySelectorAll('nav.toc a'));

  // Plegar y desplegar
  secs.forEach(function (sec) {
    sec.querySelector('.toggle').addEventListener('click', function () {
      var collapsed = sec.getAttribute('data-collapsed') === 'true';
      sec.setAttribute('data-collapsed', collapsed ? 'false' : 'true');
      this.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
    });
  });

  var fold = document.getElementById('btn-fold');
  fold.addEventListener('click', function () {
    var closing = fold.textContent.indexOf('Plegar') === 0;
    secs.forEach(function (sec) {
      sec.setAttribute('data-collapsed', closing ? 'true' : 'false');
      sec.querySelector('.toggle').setAttribute('aria-expanded', closing ? 'false' : 'true');
    });
    fold.textContent = closing ? 'Desplegar todo' : 'Plegar todo';
  });

  // Copiar una sección al portapapeles
  Array.prototype.forEach.call(document.querySelectorAll('.copy'), function (btn) {
    btn.addEventListener('click', function () {
      var body = document.getElementById(btn.getAttribute('data-copy'));
      var text = body ? body.innerText : '';
      var done = function () { btn.textContent = 'Copiado'; setTimeout(function () { btn.textContent = 'Copiar'; }, 1400); };
      if (navigator.clipboard) { navigator.clipboard.writeText(text).then(done); }
      else {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta); done();
      }
    });
  });

  // Tema: auto -> claro -> oscuro
  var order = ['auto', 'light', 'dark'];
  document.getElementById('btn-theme').addEventListener('click', function () {
    var now = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', order[(order.indexOf(now) + 1) % order.length]);
  });

  document.getElementById('btn-print').addEventListener('click', function () { window.print(); });

  // Barra de progreso e indice que sigue la lectura
  var bar = document.getElementById('progress');
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';

    var active = null;
    secs.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= window.innerHeight * 0.3) active = sec.id;
    });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-target') === active);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
</script>
</body>
</html>`;
}

export function exportToHTML(options: ExportOptions): void {
  const html = buildHtmlDocument(options);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName('documento', options.title).replace(/\.pdf$/, '.html');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

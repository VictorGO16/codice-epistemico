# 📚 El Códice Epistémico

> **Una plataforma interactiva de filosofía de la ciencia y psicología potenciada por inteligencia artificial**

El Códice Epistémico es una aplicación web avanzada que permite explorar la filosofía de la ciencia y la psicología a través de una interfaz interactiva. Conversa con grandes pensadores históricos, simula debates filosóficos y analiza paradigmas científicos usando IA generativa.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)
![Google AI](https://img.shields.io/badge/Google_AI-Gemini-4285F4?style=flat-square&logo=google)

## ✨ Características Principales

### 🔮 **Oráculo Filosófico**
- **Conversaciones en tiempo real** con más de 15 filósofos y científicos históricos
- **Respuestas contextualmente precisas** basadas en sus obras y pensamientos reales
- **Persistencia de conversaciones** con capacidad de cambio de contexto
- **Exportación profesional** de diálogos en PDF y HTML

### ⚔️ **Sistema de Debates Avanzado**
- **Debates multi-participante** (2-4 pensadores simultáneamente)
- **Generación automática** de declaraciones de apertura
- **Modos automático y manual** para el flujo de turnos
- **Análisis completo con IA** de argumentos, refutaciones y coherencia filosófica
- **Sistema de puntuación** y evaluación de fuerza argumentativa
- **Mapeo visual** de argumentos y contra-argumentos

### 🧪 **Laboratorio de Paradigmas**
- **Análisis paradigmático** de cualquier objeto de estudio
- **6 paradigmas filosóficos principales**: Positivismo Lógico, Post-positivismo, Fenomenología, Hermenéutica, Construccionismo Social, Enactivismo
- **Análisis tridimensional**: Ontológico, Epistemológico y Metodológico
- **Síntesis integradora** automática con IA

### 🗺️ **Explorador de Conceptos**
- **Base de datos extensa** de conceptos filosóficos y científicos
- **Navegación interactiva** por categorías históricas
- **Sistema de búsqueda** en tiempo real
- **Favoritos persistentes** con almacenamiento local
- **Conexiones conceptuales** visualizadas

### 📄 **Sistema de Exportación Profesional**
- **Exportación PDF** con formato académico y metadatos
- **Exportación HTML** standalone con CSS embebido
- **Templates profesionales** para debates, conversaciones y análisis
- **Bibliografía automática** y citas apropiadas

## 🚀 Tecnologías Utilizadas

### Frontend
- **Next.js 15.5** - Framework React con App Router
- **React 19.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.x** - Tipado estático
- **Tailwind CSS 4.x** - Framework de estilos utilitarios
- **Framer Motion** - Animaciones y transiciones
- **Zustand** - Gestión de estado global

### Backend & IA
- **Google Gemini AI** - Modelo de lenguaje para conversaciones y análisis
- **Next.js API Routes** - Endpoints del servidor
- **Gemini 2.5 Flash** - Modelo optimizado para respuestas rápidas

### Utilidades
- **jsPDF** - Generación de documentos PDF
- **html2canvas** - Captura de elementos HTML
- **Marked** - Procesamiento de Markdown
- **KaTeX** - Renderizado de fórmulas matemáticas
- **DOMPurify** - Sanitización de HTML

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun
- Clave API de Google Gemini

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/codice-epistemico.git
cd codice-epistemico
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
# o
pnpm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env.local
```

Edita `.env.local` y agrega tu clave API de Gemini:
```env
GEMINI_API_KEY=tu_clave_api_de_gemini_aqui
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📖 Guía de Uso

### Explorar Conceptos
1. Usa la **barra lateral izquierda** para navegar por categorías históricas
2. **Busca conceptos específicos** usando la barra de búsqueda
3. **Marca favoritos** para acceso rápido
4. **Explora conexiones** entre diferentes pensadores y conceptos

### Conversar con el Oráculo
1. Selecciona un **filósofo o científico** del explorador
2. Haz clic en **"Consultar Oráculo"** en la barra lateral derecha
3. **Inicia una conversación** haciendo preguntas específicas
4. **Exporta la conversación** cuando termines

### Crear Debates
1. Ve a la sección **"Debates"** en la navegación
2. **Configura el tema** del debate
3. **Selecciona 2-4 participantes** de diferentes épocas
4. **Inicia el debate** y observa las interacciones
5. **Analiza los resultados** con IA al finalizar

### Analizar con Paradigmas
1. Accede al **"Laboratorio de Paradigmas"**
2. **Selecciona un paradigma** filosófico
3. **Define tu objeto de estudio** (ej: "la ansiedad en adolescentes")
4. **Obtén análisis** ontológico, epistemológico y metodológico
5. **Exporta el análisis** completo

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── api/               # Rutas de API
│   │   ├── debate/        # Endpoints de debates
│   │   ├── oracle/        # Endpoints del oráculo
│   │   ├── paradigm/      # Endpoints de análisis paradigmático
│   │   └── gemini/        # Endpoint general de Gemini
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── features/          # Componentes de funcionalidades
│   │   ├── ConceptExplorer/
│   │   ├── Debate/
│   │   ├── Oracle/
│   │   └── Paradigm/
│   ├── layout/            # Componentes de layout
│   └── ui/                # Componentes de interfaz
├── lib/                   # Utilidades y lógica
│   ├── data/              # Datos filosóficos
│   ├── hooks/             # Hooks personalizados
│   ├── stores/            # Stores de Zustand
│   └── utils/             # Utilidades generales
└── types/                 # Definiciones de TypeScript
```

## 🎯 Funcionalidades Avanzadas

### Sistema de Sesiones
- **Persistencia automática** de conversaciones y debates
- **Restauración de estado** al recargar la página
- **Gestión de múltiples sesiones** simultáneas

### Efectos Visuales
- **Fondo de partículas** animado con física realista
- **Transiciones suaves** entre secciones
- **Animaciones responsivas** optimizadas para rendimiento
- **Panel de configuración** para controlar efectos visuales

### Responsive Design
- **Diseño móvil-first** completamente responsive
- **Navegación adaptativa** para diferentes tamaños de pantalla
- **Interacciones táctiles** optimizadas
- **Sidebars colapsables** en dispositivos pequeños

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. **Fork** el proyecto
2. Crea una **rama de feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

---

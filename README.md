# LinguaTranslate

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Netlify Deployment](https://img.shields.io/badge/Deploy-Netlify-00AD7C?style=flat-square&logo=netlify)](https://netlify.com)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

**LinguaTranslate** is a complete, production-ready translation dashboard. It enables instant text translation in over 20 global and regional languages, featuring hands-free speech recognition, text-to-speech voice synthesis, OCR image parsing, local history logging, custom bookmarks (favorites), and document exports as plain text or PDF.

> **Tagline**: *"Translate Any Language Instantly"*

---

## Key Features

1. **Vibrant Glassmorphism Design**
   - Elegant responsive dashboard layout, dark-mode first design system (utilizing custom Tailwind tokens) with elegant light/dark transitions.
2. **Instant Translation Engine**
   - Integrates with public-tier MyMemory translation API. Implements request debouncing to conserve bandwidth and in-memory caches to prevent rate limiting.
3. **Language Auto-Detection**
   - Automatically detects original language inputs and shows a confidence/accuracy percentage tracker.
4. **Speech to Text (STT)**
   - Dictate sentences using standard browser SpeechRecognition (supported for English, Hindi, Telugu, and Tamil).
5. **Text to Speech (TTS)**
   - Hear translations read aloud with automatically configured accents matching target countries.
6. **OCR Image Capture**
   - Extract textual layers from uploaded files (like receipts or documents) using Tesseract.js.
7. **Local Persistence (History & Bookmarks)**
   - Keep log records and star favorite cards. All operations are kept locally inside LocalStorage and remain available offline.
8. **Recent Language Pairs**
   - Tracks your most frequent language selections for one-click restoration.
9. **Doc Downloads & Sharing**
   - Exporter utilities compile translation bodies as `.txt` files or formatted PDF reports. Integrates Web Share API support.
10. **Rich Counters**
    - High-fidelity statistics counter calculating character count, word counts, and line limits.

---

## Technologies Used

- **React.js**: Modular component architecture and hooks.
- **Vite**: Rapid compiler and hot module loader.
- **React Router DOM**: Single page application routers.
- **Axios**: Network request library with custom timeouts and caching.
- **Framer Motion**: Smooth entry, swap, and toast animations.
- **Lucide React**: Clean, modern vector icons.
- **jsPDF**: Multi-page client-side PDF document generator.
- **Tesseract.js**: Browser-compatible optical character recognition engine.
- **Vitest & Testing Library**: Unit and component tests running in a JSDOM mockup.

---

## Installation & Running Locally

Ensure you have **Node.js** installed on your machine.

1. **Clone and navigate to the project directory**:
   ```bash
   cd LinguaTranslate
   ```

2. **Install node dependencies**:
   ```bash
   npm install
   ```

3. **Launch local dev environment**:
   ```bash
   npm run dev
   ```
   *The console will print out the local server address (usually `http://localhost:5173`). Open it in your browser.*

4. **Execute tests**:
   ```bash
   npm run test
   ```

5. **Generate production build bundle**:
   ```bash
   npm run build
   ```

---

## Deployment Guides

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run command: `vercel`
3. Vercel detects Vite and deploys. The custom `vercel.json` ensures that history-router fallback works correctly.

### Netlify
1. Build code locally: `npm run build`
2. Upload the `dist/` output directory to Netlify.
3. The `public/_redirects` file is bundled inside the dist directory and automatically ensures routes like `/translate` load without 404 errors.

---

## Future Enhancements

- **Offline Translation Engine**: Integrate lightweight ONNX Webassembly engines to translate completely offline.
- **Camera Snapshot OCR**: Enable camera viewports directly inside the browser for mobile snapshot translation.
- **Speech Dialogues Mode**: Split screen view for double-sided live voice translations between two speakers.

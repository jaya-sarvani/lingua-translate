# Implementation Plan - LinguaTranslate Web Application

LinguaTranslate is a modern, production-ready, feature-rich translation web application. It is designed with a premium dark-mode-first aesthetic (with a beautiful glassmorphism light/dark toggle), smooth animations (Framer Motion), text-to-speech, speech-to-text, OCR image text extraction, and robust history/favorites management.

---

## Technical Stack & Libraries

- **Frontend Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS (version 3 for standard config compatibility, or version 4 depending on automatic installation defaults)
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Framer Motion (`framer-motion`)
- **API Client**: Axios (`axios`)
- **PDF Generation**: jsPDF (`jspdf`)
- **OCR Engine**: Tesseract.js (`tesseract.js`)
- **Routing**: React Router DOM (`react-router-dom`)
- **Testing**: Vitest + React Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
- **Translation API**: MyMemory Translation API (no API key required, reliable translation for free tier)
- **Language Auto-Detect**: MyMemory Auto-Detect + fallbacks
- **Speech Technologies**: HTML5 Web Speech API (SpeechRecognition for input, SpeechSynthesis for output)

---

## Proposed Project Structure

We will create the folder structure and files exactly as requested:

```
LinguaTranslate/ (workspace root)
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Translator.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── History.jsx
│   │   ├── Favorites.jsx
│   │   ├── SpeechInput.jsx
│   │   ├── SpeechOutput.jsx
│   │   ├── Statistics.jsx
│   │   ├── Loader.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Translate.jsx
│   │   ├── HistoryPage.jsx
│   │   └── FavoritesPage.jsx
│   ├── hooks/
│   │   ├── useSpeech.js
│   │   ├── useTheme.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   └── translationApi.js
│   ├── utils/
│   │   ├── downloadPdf.js
│   │   ├── downloadTxt.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── src/__tests__/
│   ├── translationApi.test.js
│   └── Translator.test.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Detailed Components Design

### 1. Landing Page (`src/pages/Home.jsx`)
- Premium hero section with a gradient logo text and a visually stunning illustration built out of CSS/SVG shapes (clean, futuristic).
- Features cards detailing: Instant Translation, Voice Input, Text to Speech, History, Favorites, OCR Image Translation, and Statistics.
- Quick link ("Get Started") to transition smoothly to the Translator.

### 2. Translator Page (`src/pages/Translate.jsx`)
- The main workhorse containing:
  - **Source/Target selection drop-downs** with searchable filters (`LanguageSelector.jsx`).
  - **Swap languages button** with a rotate animation.
  - **Textarea with Statistics**: counts characters, words, and lines.
  - **Speech Input** (voice translation trigger) and **Speech Output** (listen to results).
  - **OCR Section** to upload an image and extract text for translation.
  - **Download buttons** (TXT and PDF) and **Share button** (Web Share API / Copy Link).
  - **Favorite toggle** to quickly save translations.

### 3. State Management & Hooks
- `useTheme`: Manages light/dark mode, modifying the DOM `document.documentElement` class and saving to localStorage.
- `useLocalStorage`: Custom hook to synchronize React state with localStorage for history and favorites.
- `useSpeech`: Custom hook encapsulating speech recognition and speech synthesis, managing recording states and voice synthesis.

### 4. API Integration (`src/services/translationApi.js`)
- Queries MyMemory Translation API.
- Implements request debouncing (to avoid API rate limits during typing) and caching of recent requests in memory.
- Implements custom retry logic and a clear user message if the network fails.

### 5. Utilities
- `downloadTxt.js`: Converts text to file blob and triggers browser download.
- `downloadPdf.js`: Uses `jspdf` to format text into a clean PDF document, handling multi-line word wrapping and standard branding header.

---

## Open Questions

> [!NOTE]
> 1. **Default Source/Target Languages**: We plan to set the default source language to "Auto-Detect" and target language to "Hindi" (or "Spanish").
> 2. **Tesseract.js OCR Languages**: The default OCR language is English. We will support Hindi, French, German, Spanish if the language pack is downloaded. Let's make sure it is configured to run smoothly in browser environments.

---

## Verification Plan

### Automated Tests
We will run `npm test` using Vitest to verify:
1. `translationApi.js`: API request formatting, mock API responses, and empty string validations.
2. `Translator.jsx`: Component rendering, state updates, validation alerts on empty translation trigger, and correct button calls.

### Manual Verification
1. Verify the layout across desktop, tablet, and mobile views.
2. Test Dark Mode toggle: ensure the class list updates and theme changes color seamlessly (vibrant dark theme #0F172A vs elegant light theme #F8FAFC).
3. Test speech recognition and text-to-speech outputs in supported languages.
4. Verify local storage persistence for History and Favorites.
5. Perform an image upload and test OCR text extraction.

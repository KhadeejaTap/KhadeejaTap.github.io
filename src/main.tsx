import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// BUG FIX from original script.js: raw getElementById/querySelector calls at
// module top-level had no null guards and could crash if elements were missing.
// React's createRoot is the safe, idiomatic mount point.
const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('[main] #root element not found in DOM — check index.html');
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

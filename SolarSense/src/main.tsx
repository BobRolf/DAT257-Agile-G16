import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CoordinatesProvider } from './context/CoordinatesContext.tsx';
import { AreaProvider } from './context/AreaContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoordinatesProvider>
      <AreaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AreaProvider>
    </CoordinatesProvider>
  </StrictMode>
);


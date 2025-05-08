import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { CoordinatesProvider } from "./context/CoordinatesContext.tsx";
import { AreaProvider } from "./context/AreaContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { EfficiencyProvider } from "./context/EfficiencyContext.tsx";
import { ElectricityUsageProvider } from "./context/ElectricityUsageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoordinatesProvider>
      <AreaProvider>
        <EfficiencyProvider>
          <ElectricityUsageProvider>
            <ThemeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </ElectricityUsageProvider>
        </EfficiencyProvider>
      </AreaProvider>
    </CoordinatesProvider>
  </StrictMode>
);

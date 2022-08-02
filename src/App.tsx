import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import { AppThemeProvider } from "./shared/contexts";
import { DarkTheme } from "./shared/themes";

function App() {
  return (
    <div className="App">
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </div>
  );
}

export default App;

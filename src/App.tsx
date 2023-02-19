import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { light, dark } from "./infrastructure/theme/light-dark";

import theme from "./infrastructure/theme";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Stars from "./components/star-bg.component";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  theme.colors = mode === "light" ? light : dark;
  console.log(mode);

  const themeToggle = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
        <button type="button" onClick={themeToggle}>
          Switch Theme
        </button>
        <Stars />
      </HashRouter>
    </ThemeProvider>
  );
}

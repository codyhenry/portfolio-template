import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { light, dark } from "./infrastructure/theme/light-dark";
import theme from "./infrastructure/theme";
import useToggle from "./components/toggle-color-mode.component";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Stars from "./components/star-bg.component";
import NavBar from "./components/ui/navbar.component";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// pages should scroll but background and navbar should be static

export function WrappedApp() {
  const [currentTheme, themeToggle] = useToggle();
  theme.colors = currentTheme === "light" ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <NavBar />
        <App />
        <button type="button" onClick={themeToggle}>
          Switch Theme
        </button>
        <Stars />
      </HashRouter>
    </ThemeProvider>
  );
}

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { light, dark } from "./infrastructure/theme/light-dark";
import theme from "./infrastructure/theme";
import useToggle from "./components/toggle-color-mode.component";

import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Stars from "./components/star-bg.component";
import NavBar from "./components/ui/navbar.component";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// pages should scroll but background and navbar should be static

function App() {
  const [currentTheme, themeToggle] = useToggle();
  theme.colors = currentTheme === "light" ? light : dark;
  theme.type = currentTheme;
  return (
    <ThemeProvider theme={theme}>
      <NavBar themeChanger={themeToggle} />
      <Routing />
      <Stars />
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { ThemeProvider as MaterialTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./infrastructure/theme";

import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import NotFound from "./screens/NotFound";
import Stars from "./components/star-bg.component";
import NavBar from "./components/ui/navbar.component";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <MaterialTheme theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routing />
      <Stars />
    </MaterialTheme>
  );
}

export default App;

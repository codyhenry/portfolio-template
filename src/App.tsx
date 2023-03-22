import { Routes, Route } from "react-router-dom";
import { ThemeProvider as MaterialTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./infrastructure/theme";

import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Stars from "./components/ui/star-bg.component";
import NavBar from "./components/ui/navbar.component";

/**
 * Home: welcome page for introduction + "tell me about yourself"
 * School, hobbies, current projects
 * Links to job sites: Handshake, LinkedIn, Indeed, Github
 *
 * About: tool and tech stack + certificates
 *
 * Projects: link to github + 4 or 5 projects
 *
 * Resume: resume
 */

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
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

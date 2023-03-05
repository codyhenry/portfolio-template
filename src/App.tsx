import { Routes, Route } from "react-router-dom";
import { ThemeProvider as MaterialTheme } from "@mui/material/styles";
import defaultTheme from "./infrastructure/theme";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Stars from "./components/star-bg.component";
import NavBar from "./components/ui/navbar.component";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  console.log(defaultTheme);
  return (
    <MaterialTheme theme={defaultTheme}>
      <NavBar />
      <Routing />
      <Stars />
    </MaterialTheme>
  );
}

export default App;

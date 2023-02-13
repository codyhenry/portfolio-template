import { HashRouter, Routes, Route } from "react-router-dom";

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
  return (
    <HashRouter>
      <App />
      <Stars />
    </HashRouter>
  );
}

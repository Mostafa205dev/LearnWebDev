import Home from "./pages/Home.jsx";
import Html from "./pages/Html.jsx";
import Css from "./pages/CSS.jsx";
import JavaScript from "./pages/JavaScript.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import ComingSoonPage from "./pages/ComingSoon.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <main style={{ flex: 1 }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<ComingSoonPage />} />
        <Route path="/react" element={<ComingSoonPage />} />
      </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
}

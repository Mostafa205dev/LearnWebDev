import Home from "./pages/Home.jsx";
import Html from "./pages/Html.jsx";
import Css from "./pages/CSS.jsx";
import JavaScript from "./pages/JavaScript.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <main style={{ flex: 1 }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        <Route path="/HTML" element={<Html />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/JavaScript" element={<JavaScript />} />
      </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
}

import Home from "./pages/Home.jsx";
import Html from "./pages/Html.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <main style={{ flex: 1 }}> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/HTML" element={<Html />}/>
        </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
}

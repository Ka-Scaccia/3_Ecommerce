import "./App.css";
import { Header } from "./componenti/Header.js";
import { Nav } from "./componenti/Nav.js";
import { Footer } from "./componenti/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componenti/route/Home.js";
import { RisultatiRicerca } from "./componenti/RisultatiRicerca.js"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/risultati-ricerca" element={<RisultatiRicerca />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

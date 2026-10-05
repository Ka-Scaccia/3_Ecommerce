import "./App.css";
import { Header } from "./componenti/Header.js";
import { Footer } from "./componenti/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componenti/route/Home.js";
import { RisultatiRicerca } from "./componenti/RisultatiRicerca.js"
import { RepartoOrtofrutta } from "./componenti/reparti/RepartoOrtofrutta.js";
import { RepartoMacelleria } from "./componenti/reparti/RepartoMacelleria.js";
import { RepartoCantina } from "./componenti/reparti/RepartoCantina.js";
import { RepartoBio } from "./componenti/reparti/RepartoBio.js";
import { RepartoCondimenti } from "./componenti/reparti/RepartoCondimenti.js";
import { RepartoLatticini } from "./componenti/reparti/RepartoLatticini.js";
import { RepartoPescheria } from "./componenti/reparti/RepartoPescheria.js";
import { RepartoColazioneEforno } from "./componenti/reparti/RepartoColazioneEForno.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/risultati-ricerca" element={<RisultatiRicerca />} />
          <Route path="/reparto-ortofrutta" element={<RepartoOrtofrutta />} />
          <Route path="/reparto-macelleria" element={<RepartoMacelleria />} />
          <Route path="/reparto-colazioneEforno" element={<RepartoColazioneEforno />} />
          <Route path="/reparto-cantina" element={<RepartoCantina />} />
          <Route path="/reparto-bio" element={<RepartoBio />} />
          <Route path="/reparto-condimenti" element={<RepartoCondimenti />} />
          <Route path="/reparto-latticini" element={<RepartoLatticini />} />
          <Route path="/reparto-pescheria" element={<RepartoPescheria />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

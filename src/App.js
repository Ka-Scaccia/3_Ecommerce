import "./App.css";
import { Header } from "./componenti/Header.js";
import { Footer } from "./componenti/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componenti/route/Home.js";
import { RisultatiRicerca } from "./componenti/RisultatiRicerca.js";
import { RepartoOrtofrutta } from "./componenti/reparti/RepartoOrtofrutta.js";
import { RepartoMacelleria } from "./componenti/reparti/RepartoMacelleria.js";
import { RepartoCantina } from "./componenti/reparti/RepartoCantina.js";
import { RepartoBio } from "./componenti/reparti/RepartoBio.js";
import { RepartoCondimenti } from "./componenti/reparti/RepartoCondimenti.js";
import { RepartoLatticini } from "./componenti/reparti/RepartoLatticini.js";
import { RepartoPescheria } from "./componenti/reparti/RepartoPescheria.js";
import { RepartoColazioneEforno } from "./componenti/reparti/RepartoColazioneEForno.js";
import { Carrello } from "./componenti/Carrello.js";
// conteggio prodotti nel carrello e arrayCarrello
import { useState } from "react";

function App() {
  // conteggio prodotti nel carrello e arrayCarrello
  const [numProdotti, setNumProdotti] = useState(0);
  const [prodottiCarrello, setProdottiCarrello] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          countCarrello={numProdotti}
          setCountCarrello={setNumProdotti}
          arrayCarrello={prodottiCarrello}
          setArrayCarrello={setProdottiCarrello}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countCarrello={numProdotti}
                setCountCarrello={setNumProdotti}
                arrayCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route path="/risultati-ricerca" element={<RisultatiRicerca />} />
          <Route
            path="/reparto-ortofrutta"
            element={
              <RepartoOrtofrutta
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-macelleria"
            element={
              <RepartoMacelleria
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-colazioneEforno"
            element={
              <RepartoColazioneEforno
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-cantina"
            element={
              <RepartoCantina
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-bio"
            element={
              <RepartoBio
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-condimenti"
            element={
              <RepartoCondimenti
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-latticini"
            element={
              <RepartoLatticini
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="/reparto-pescheria"
            element={
              <RepartoPescheria
                countCarrello={numProdotti}
                setProdottiCarrello={setProdottiCarrello}
                prodottiCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
          <Route
            path="carrello"
            element={
              <Carrello
                countCarrello={numProdotti}
                setCountCarrello={setNumProdotti}
                arrayCarrello={prodottiCarrello}
                setArrayCarrello={setProdottiCarrello}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

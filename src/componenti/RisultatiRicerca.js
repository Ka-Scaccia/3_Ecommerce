import "../CSS/risultatiRicerca.css";
import { Plus } from "lucide-react";
// recupero dati pagina precedente
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { arrayProdotti } from "../componenti/prodotti.js";

export const RisultatiRicerca = ({
  countCarrello,
  setCountCarrello,
  prodottiCarrello,
  setProdottiCarrello,
}) => {
  // MODIFICO L'URL IN BASE ALLA PAROLA CERCATA
  const { state } = useLocation();
  const [SearchParams, setSearchParams] = useSearchParams();

  // 1. recupero la ricerca e i suggerimenti salvandoli su sessionStorage
  const [ricerca, setRicerca] = useState(() => {
    return (
      state?.ricerca ||
      SearchParams.get("q") ||
      sessionStorage.getItem("ultimaRicerca") ||
      ""
    );
  });

  const [suggerimentoRicerca, setSuggerimentoRicerca] = useState(() => {
    // CASO A: ricerca effettuata dalla pagina precedente
    if (state?.suggerimentoRicerca) {
      sessionStorage.setItem(
        "ultimiSuggerimenti",
        JSON.stringify(state.suggerimentoRicerca),
      );
      return state.suggerimentoRicerca;
    }

    // CASO B: refresh
    const saved = sessionStorage.getItem("ultimiSuggerimenti");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) return parsed;
    }

    // CASO C: condivisione link
    const queryUrl = SearchParams.get("q");
    if (queryUrl) {
      const queryLower = queryUrl.toLowerCase();
      return arrayProdotti.filter(
        (prodotto) =>
          prodotto.nomeProdotto.toLowerCase().includes(queryLower) ||
          prodotto.fornitore.toLowerCase().includes(queryLower),
      );
    }
    return [];
  });

  // 2. aggiorno l'URL con la query string
  useEffect(() => {
    if (ricerca) {
      setSearchParams({ q: ricerca });
      sessionStorage.setItem("ultimaRicerca", ricerca);
    }
  }, [ricerca, setSearchParams]);

  useEffect(() => {
    if (suggerimentoRicerca.length > 0) {
      sessionStorage.setItem(
        "ultimiSuggerimenti",
        JSON.stringify(suggerimentoRicerca),
      );
    }
  }, [suggerimentoRicerca]);

  // creazione array prodottiRicercaIMG
  const [prodottiRicercaIMG, setProdottiRicercaIMG] = useState([]);
  useEffect(() => {
    // ogni volta che suggerimentoRicerca cambia creo un nuovo elemento per
    // prodottiRicercaIMG e ci aggiungo i nomi dei suggerimenti della ricerca
    setProdottiRicercaIMG(suggerimentoRicerca.map((prodotto) => prodotto.img));
  }, [suggerimentoRicerca]);

  // calcolo numero suggerimenti per testo "ricerca"
  const numeroRisultati = suggerimentoRicerca.length;

  const incrementoProdottiCarrello = (nuovoProdotto) => {
    const prodottoGiaPresente = prodottiCarrello.some(
      (prodottoNelCarrello) => prodottoNelCarrello.nome === nuovoProdotto.nome,
    );

    if (prodottoGiaPresente) {
      alert("Questo prodotto è già presente nel carrello.");
      return;
    }

    if (countCarrello >= 10) {
      alert("Hai raggiunto il limite massimo di 10 prodotti.");
      return;
    }

    setProdottiCarrello((prodottiAttuali) => [
      ...prodottiAttuali,
      nuovoProdotto,
    ]);
    setCountCarrello((numeroAttuale) => numeroAttuale + 1);
  };

  return (
    <>
      <div className="head">
        <h2 className="head_titolo">
          Trovati <span className="numeroRisultati">{numeroRisultati}</span>{" "}
          risultati per
          <span className="testoRicerca"> {ricerca}</span>
        </h2>
      </div>
      <div className="risultatiRicerca flex">
        {suggerimentoRicerca.map((prodotto) => (
          <div className="risultatiRicerca_box cursorPOINTER" key={prodotto.id}>
            <div className="childTop flex">
              {prodottiRicercaIMG && (
                <img
                  src={prodotto.img}
                  alt={`${prodotto.nome}`}
                  className="child_img w100"
                />
              )}
              <h3 className="child_azienda">{prodotto.fornitore}</h3>
              <h2 className="child_nome">{prodotto.nomeProdotto}</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">
                  {prodotto.prezzo.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  &euro;
                </span>
                <span className="prezzoKG">
                  {prodotto.prezzoKG} &euro; / {prodotto.misura}
                </span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: prodotto.nomeProdotto,
                    prezzo: prodotto.prezzo,
                    quantita: 1,
                    img: prodotto.img,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

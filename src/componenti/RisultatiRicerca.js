import "../CSS/risultatiRicerca.css";
import { Plus } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { arrayProdotti } from "../componenti/prodotti.js";

export const RisultatiRicerca = ({
  countCarrello,
  setCountCarrello,
  prodottiCarrello,
  setProdottiCarrello,
}) => {
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [ricerca, setRicerca] = useState("");
  const [suggerimentoRicerca, setSuggerimentoRicerca] = useState([]);

  // Utilizo useEffect che ascolta ogni cambiamento di "state" o di "searchParams"
  useEffect(() => {
    let testoRicerca = "";
    let risultatiTrovati = [];

    // 1. CASO A: l'utente arriva dall'header 
    if (state?.ricerca) {
      testoRicerca = state.ricerca;
      risultatiTrovati = state.suggerimentoRicerca || [];
      
      // salvo in sessionStorage per eventuali refresh
      sessionStorage.setItem("ultimaRicerca", testoRicerca);
      sessionStorage.setItem("ultimiSuggerimenti", JSON.stringify(risultatiTrovati));
    } 
    // 2. CASO C: Condivisione link o modifica diretta dell'URL (es. ?q=...)
    else if (searchParams.get("q")) {
      testoRicerca = searchParams.get("q");
      const queryLower = testoRicerca.toLowerCase();
      
      risultatiTrovati = arrayProdotti.filter(
        (prodotto) =>
          prodotto.nomeProdotto.toLowerCase().includes(queryLower) ||
          prodotto.fornitore.toLowerCase().includes(queryLower)
      );
      
      sessionStorage.setItem("ultimaRicerca", testoRicerca);
      sessionStorage.setItem("ultimiSuggerimenti", JSON.stringify(risultatiTrovati));
    } 
    // 3. CASO B: Refresh della pagina (recupero da sessionStorage)
    else {
      const savedRicerca = sessionStorage.getItem("ultimaRicerca") || "";
      const savedSuggerimenti = sessionStorage.getItem("ultimiSuggerimenti");
      
      testoRicerca = savedRicerca;
      risultatiTrovati = savedSuggerimenti ? JSON.parse(savedSuggerimenti) : [];
    }

    setRicerca(testoRicerca);
    setSuggerimentoRicerca(risultatiTrovati);

    // sincronizzo l'URL se abbiamo una ricerca valida
    if (testoRicerca) {
      setSearchParams({ q: testoRicerca }, { replace: true });
    }
  }, [state, searchParams]); // Si attiva ogni volta che premi invio (aggiornando lo state) o cambi URL

  // Calcolo numero suggerimenti
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
              {prodotto.img && (
                <img
                  src={prodotto.img}
                  alt={prodotto.nomeProdotto}
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
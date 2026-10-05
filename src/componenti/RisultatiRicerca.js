import "../CSS/risultatiRicerca.css";
import { Plus } from "lucide-react";
// recupero dati pagina precedente
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const RisultatiRicerca = () => {
  // recupero dati pagina precedente
  const { state } = useLocation();
  const { ricerca, suggerimentoRicerca = [] } = state ?? {};

  // creazione array prodottiRicercaIMG
  const [prodottiRicercaIMG, setProdottiRicercaIMG] = useState([]);
  useEffect(() => {
    // ogni volta che suggerimentoRicerca cambia creo un nuovo elemento per
    // prodottiRicercaIMG e ci aggiungo i nomi dei suggerimenti della ricerca
    setProdottiRicercaIMG(suggerimentoRicerca.map((prodotto) => prodotto.img));
  }, [suggerimentoRicerca]);

  // calcolo numero suggerimenti per testo "ricerca"
  const numeroRisultati = suggerimentoRicerca.length;
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
                <img
                  src={prodotto.img}
                  alt={`${prodotto.nome}`}
                  className="child_img w100"
                /> 
              <h3 className="child_azienda">{prodotto.fornitore}</h3>
              <h2 className="child_nome">{prodotto.nomeProdotto}</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">{prodotto.prezzo} &euro;</span>
                <span className="prezzoKG">{prodotto.prezzoKG} &euro; / {prodotto.misura}</span>
              </div>
              <button className="childBottom_btn flex cursorPOINTER">
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

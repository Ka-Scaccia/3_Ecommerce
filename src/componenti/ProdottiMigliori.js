import "../CSS/route/home/prodottiMigliori.css";
import pomodoriniBio from "../asset/img/prodotti/pomodoriniBio.webp";
import olioOliva from "../asset/img/prodotti/olioOliva.webp";
import parmigianoReggiano from "../asset/img/prodotti/parmigianoReggiano.webp";
import salmoneFresco from "../asset/img/prodotti/salmoneFresco.webp";
import arance from "../asset/img/prodotti/arance.webp";
import mirtilli from "../asset/img/prodotti/mirtilli.webp";
import { Plus } from "lucide-react";

export const ProdottiMigliori = ({
  numProdotti,
  setNumProdotti,
  prodottiCarrello,
  setProdottiCarrello,
}) => {
  // incremento prodotti carrello
  const incrementoProdottiCarrello = (nuovoProdotto) => {
    // se un prodotto è già presente nel carrello non aggiungerlo
    const prodottoGiaPresente = prodottiCarrello.some(
      (prodotto) => prodotto.nome === nuovoProdotto.nome,
    );

    if (prodottoGiaPresente) {
      alert("Questo prodotto è già presente nel carrello.");
      return;
    }

    // limite massimo carrello
    if (numProdotti >= 10) {
      alert("Hai raggiunto il limite massimo di 10 prodotti.");
      return;
    }

    // aggiungo prodotto se non è stato già aggiunto
    setProdottiCarrello((prodottiAttuali) => [
      ...prodottiAttuali,
      nuovoProdotto,
    ]);

    // incremento num carrello
    setNumProdotti((numAttuale) => numAttuale + 1);
  };
  return (
    <>
      <div className="prodottiMigliori">
        <h2 className="prodottiMigliori_titolo">I prodotti migliori</h2>
        <div className="prodottiMigliori_container">
          {/* 1 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img
                src={pomodoriniBio}
                alt="pomodorini BIO"
                className="child_img w100"
              />
              <h3 className="child_azienda">Pachino igp</h3>
              <h2 className="child_nome">
                Pomodorini Ciliegino di Pachino I.G.P.
              </h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">2,49 &euro;</span>
                <span className="prezzoKG">4,98 &euro; /kg</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Pomodorini Ciliegino di Pachino I.G.P.",
                    prezzo: 2.49,
                    img: pomodoriniBio,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
          {/* 2 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img
                src={olioOliva}
                alt="olio oliva"
                className="child_img w100"
              />
              <h3 className="child_azienda">franotoio muraglia</h3>
              <h2 className="child_nome">Olio Extra Vergine 100% ITA 750ml</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">8,99 &euro;</span>
                <span className="prezzoKG">11,98 &euro; /l</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Olio Extra Vergine 100% ITA 750ml",
                    prezzo: 8.99,
                    img: olioOliva,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
          {/* 3 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img
                src={parmigianoReggiano}
                alt="parmigiano reggiano"
                className="child_img w100"
              />
              <h3 className="child_azienda">caseificio montano</h3>
              <h2 className="child_nome">Parmigiano Reggiano DOP 24 mesi</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">4,79 &euro;</span>
                <span className="prezzoKG">19,16 &euro; /kg</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Parmigiano Reggiano DOP 24 mesi",
                    prezzo: 4.79,
                    img: parmigianoReggiano,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
          {/* 4 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img
                src={salmoneFresco}
                alt="salmone fresco"
                className="child_img w100"
              />
              <h3 className="child_azienda">pescheria reale</h3>
              <h2 className="child_nome">Filetto di Salmone Fresco 300gr</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">5,90 &euro;</span>
                <span className="prezzoKG">19,67 &euro; /kg</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Filetto di Salmone Fresco 300gr",
                    prezzo: 5.9,
                    img: salmoneFresco,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
          {/* 5 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img src={arance} alt="arance" className="child_img w100" />
              <h3 className="child_azienda">bio sicilia</h3>
              <h2 className="child_nome">
                Arance Tarocco I.G.P. Bio da Spremitura
              </h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">3,12 &euro;</span>
                <span className="prezzoKG">2,08 &euro; /kg</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Arance Tarocco I.G.P. Bio da Spremitura",
                    prezzo: 3.12,
                    img: arance,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
          {/* 6 / 6 */}
          <div className="prodottiMigliori_child flex">
            <div className="childTop flex">
              <img src={mirtilli} alt="mirtilli" className="child_img w100" />
              <h3 className="child_azienda">bosco trentino</h3>
              <h2 className="child_nome">Mirtilli Neri Giganti Selvatici</h2>
            </div>
            <div className="childBottom">
              <div className="childBottom_prezzo flex">
                <span className="prezzoNetto">2,29 &euro;</span>
                <span className="prezzoKG">18,32 &euro; /kg</span>
              </div>
              <button
                className="childBottom_btn flex cursorPOINTER"
                onClick={() =>
                  incrementoProdottiCarrello({
                    nome: "Mirtilli Neri Giganti Selvatici",
                    prezzo: 2.29,
                    img: mirtilli,
                    quantita: 1,
                  })
                }
              >
                <Plus size={20} className="btnIcon" />
                <span className="btnText">Aggiungi</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

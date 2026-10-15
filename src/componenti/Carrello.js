import "../CSS/carrello.css";
import { Plus, Minus } from "lucide-react";

export const Carrello = ({
  countCarrello,
  setCountCarrello,
  arrayCarrello,
  setArrayCarrello,
}) => {
  // gestione svuotamento carrello
  const svuotaCarrello = () => {
    setArrayCarrello([]);
    setCountCarrello(0);
  };

  // gestione incremento / decremento prodotto
  const incrementaProdotto = (index) => {
    setArrayCarrello((prodotti) =>
      prodotti.map((prodotto, i) =>
        i === index
          ? {
              ...prodotto,
              quantita: prodotto.quantita + 1,
            }
          : prodotto,
      ),
    );
  };

  const decrementaProdotto = (index) => {
    setArrayCarrello((prodotto) =>
      prodotto.map((prodotto, i) =>
        prodotto.quantita > 1 && i === index
          ? { ...prodotto, quantita: prodotto.quantita - 1 }
          : prodotto,
      ),
    );
  };

  // gestione somma subtotale e totale
  const costoSpedizione = arrayCarrello.length > 0 ? 3.90 : 0;
  const totaleCarrello =
    arrayCarrello.reduce(
      (totale, prodotto) =>
        totale + Math.round(prodotto.prezzo * 100) * prodotto.quantita,
      0,
    ) / 100;

  return (
    <>
      <div className="carrello">
        <div className="carrelloHead flex">
          <h2 className="carrelloHead_title">
            Il mio Carrello ({countCarrello})
          </h2>
          <span
            className="carrelloHead_svuota cursorPOINTER"
            onClick={svuotaCarrello}
          >
            Svuota
          </span>
        </div>
        <div className="carrelloBody flex">
          <div className="carrelloBody_text flex">
            <span className="carrelloBody_title">Articoli nel carrello</span>
            <span className="carrelloBody_numProdotti">
              {countCarrello} prodotti
            </span>
          </div>
          <div className="carrelloBody_prodotti flex">
            {arrayCarrello.map((prodotto, index) => (
              <div className="carrelloBody_prodottiBox flex" key={index}>
                <div className="prodottiBox_Img">
                  <img
                    src={prodotto.img}
                    alt={prodotto.nome}
                    className="w100"
                  />
                </div>
                <div className="prodottiBox_content">
                  <h2>{prodotto.nome}</h2>
                  <h3 className="prodottiBoxContente_prezzo">
                    {/* per mostrare lo 0 finale */}
                    {(prodotto.prezzo * prodotto.quantita).toLocaleString(
                      "it-IT",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    )}
                    &euro;
                  </h3>
                  <button className="prodottiBox_btn flex">
                    <span
                      className="prodottiBox_btnMinus cursorPOINTER"
                      onClick={() => decrementaProdotto(index)}
                    >
                      <Minus />
                    </span>
                    <span className="prodottiBox_btnNumber">
                      {prodotto.quantita}
                    </span>
                    <span
                      className="prodottiBox_btnPlus cursorPOINTER"
                      onClick={() => incrementaProdotto(index)}
                    >
                      <Plus />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carrelloFoot flex">
          <div className="carrelloFoot_singoliPrezzi">
            <ul className="carrelloFoot_listaSubtotale flex">
              <li>
                <h2>Subtotale prodotti</h2>
              </li>
              <li>
                <span className="singoliPrezzi_subtotale">
                  {totaleCarrello.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  &euro;
                </span>
              </li>
            </ul>
            <ul className="carrelloFoot_listaSpedizioneStandard flex">
              <li>
                <h2>Spedizione standard</h2>
              </li>
              <li>
                <span className="singoliPrezzi_spedizioneStandard">
                  {costoSpedizione.toLocaleString("it-IT", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  &euro;
                </span>
              </li>
            </ul>
          </div>
          <ul className="carrelloFoot_prezzoTotale flex">
            <li>
              <h2>Totale</h2>
            </li>
            <li>
              <span className="prezzoTotale">
                {(totaleCarrello + costoSpedizione).toLocaleString("it-IT", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                &euro;
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

import "../../CSS/reparti.css";
import { arrayProdotti } from "../prodotti";
import { Plus } from "lucide-react";

export const RepartoLatticini = () => {
  return (
    <>
      <h1 className="titleReparto">Reparto Latticini</h1>
      <div className="repartoElenco flex">
        {arrayProdotti
          .filter((prodotto) => prodotto.reparto === "latticini")
          .map((prodotto) => (
            <div key={prodotto.id} className="repartoElenco_box">
              <div className="childTop flex">
                <img
                  src={prodotto.img}
                  alt={`${prodotto.nome}`}
                  className="repartoElenco_child_img w100"
                />
                <h3 className="child_azienda">{prodotto.fornitore}</h3>
                <h2 className="child_nome">{prodotto.nomeProdotto}</h2>
              </div>
              <div className="childBottom">
                <div className="childBottom_prezzo flex">
                  <span className="prezzoNetto">{prodotto.prezzo} &euro;</span>
                  <span className="prezzoKG">
                    {prodotto.prezzoKG} &euro; / {prodotto.misura}
                  </span>
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

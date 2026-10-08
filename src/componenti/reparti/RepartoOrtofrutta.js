import "../../CSS/reparti.css";
import { arrayProdotti } from "../prodotti";
import { Plus } from "lucide-react";

export const RepartoOrtofrutta = ({
  countCarrello,
  setCountCarrello,
  prodottiCarrello,
  setProdottiCarrello,
}) => {
  const incrementoProdottiCarrello = (nuovoProdotto) => {
    const prodottoGiaPresente = prodottiCarrello.some(
      (prodottoNelCarrello) => prodottoNelCarrello.nome === nuovoProdotto.nome
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
      <h1 className="titleReparto">Reparto Ortofrutta</h1>
      <div className="repartoElenco flex">
        {arrayProdotti
          .filter((prodotto) => prodotto.reparto === "ortofrutta")
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
                <button
                  className="childBottom_btn flex cursorPOINTER"
                  onClick={() =>
                    incrementoProdottiCarrello({
                      nome: prodotto.nomeProdotto,
                      prezzo: Number(prodotto.prezzo.replace(",", ".")),
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

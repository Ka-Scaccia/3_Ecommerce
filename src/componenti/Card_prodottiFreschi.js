import "../CSS/card_prodottiFreschi.css";
import cardProdottiFreschi from "../asset/img/card_prodottiFreschi.webp";

export const Card_prodottiFreschi = () => {
  return (
    <>
    <div className="cardProdottiFreschi flex">
        {/* testo */}
        <div className="box_prodottiFreschi flex">
            <span className="prodottiFreschi_label">100% locale & stagionale</span>
            <h2 className="prodottiFreschi_titolo">Freschezza Quotidiana, <span className="prodottiFreschi_bgGreen">dal produttore alla tua tavola</span> in sole
                2 ore
            </h2>
            <p className="prodottiFreschi_paragrafo">Raccogliamo ogni mattina dai contadini del territorio per
                garantirti sapore autonetico e filiera cortissima.
            </p>
            <a href="#" className="prodottiFreschi_btn cursorPOINTER">Esplora i Freschi</a>
        </div>
        {/* img */}
        <div className="box_prodottiFreschi">
            <img src={cardProdottiFreschi} alt="foto card prodotti freschi"
            className="prodottiFreschi_img"/>
        </div>
    </div>
    </>
  )
}

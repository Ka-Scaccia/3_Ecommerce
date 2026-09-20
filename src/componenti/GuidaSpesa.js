import "../CSS/guidaSpesa.css";

export const GuidaSpesa = () => {
  return (
    <>
      <div className="guidaSpesa">
        <h2 className="guidaSpesa_titolo">Come funziona ProntoSpesa</h2>
        <ul className="guidaSpesa_listaStep flex">
          <li className="guidaSpesa_elementoListaStep">
            <div className="elementoListaStep_testo flex">
              <span className="elementoListaStep_numero">1</span>
              <span className="elementoListaStep_titolo">
                Scegli la freschezza
              </span>
            </div>
            <p className="elementoListaStep_paragrafo">
              Riempi il carrello con prodotti locali raccolti in giornata e le
              tue marche di fiducia.
            </p>
          </li>
          <li className="guidaSpesa_elementoListaStep">
            <div className="elementoListaStep_testo flex">
              <span className="elementoListaStep_numero">2</span>
              <span className="elementoListaStep_titolo">
                Prepariamo con cura
              </span>
            </div>
            <p className="elementoListaStep_paragrafo">
              Personal shopper esperti scelgono ogni frutto come se facessero la
              propria spesa.
            </p>
          </li>
          <li className="guidaSpesa_elementoListaStep">
            <div className="elementoListaStep_testo flex">
              <span className="elementoListaStep_numero">3</span>
              <span className="elementoListaStep_titolo">
                Direttamente alla porta
              </span>
            </div>
            <p className="elementoListaStep_paragrafo">
              Furgoni refrigerati consegnano al piano nell'orario esatto che
              decidi tu.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

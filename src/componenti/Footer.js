import "../CSS/footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerTop">
            <ul className="footerTop_lista flex">
                <li className="footerTopLista_item">Assistenza Clienti</li>
                <li className="footerTopLista_item">Termini di Vendita</li>
                <li className="footerTopLista_item">Informativa Privacy</li>
                <li className="footerTopLista_item">Certificazioni Bio</li>
            </ul>
        </div>
        <div className="footerBottom">
            <span className="footerBottom_informazioniLegali">
                ProntoSpesa S.r.l. • Milano, Italia
            </span>
        </div>
      </footer>
    </>
  );
};

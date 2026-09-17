import "../CSS/nav.css";

export const Nav = () => {
  return (
    <>
      <div className="nav">
        <nav>
          <ul className="listaNav flex">
            <li className="elementoNav">
              <a href="#"
              className="linkNav">Tutte le Categorie</a>
            </li>
            <li className="elementoNav">
              <a href="#"
              className="linkNav">Freschi & Ortofrutta</a>
            </li>
            <li className="elementoNav">
              <a href="#"
              className="linkNav">Dispensa</a>
            </li>
            <li className="elementoNav">
              <a href="#"
              className="linkNav">Cantina & Bevande</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

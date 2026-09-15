import "../CSS/nav.css";

export const Nav = () => {
  return (
    <>
      <div className="nav">
        <nav>
          <ul className="flex">
            <li>
              <a href="#">Tutte le Categorie</a>
            </li>
            <li>
              <a href="#">Freschi & Ortofrutta</a>
            </li>
            <li>
              <a href="#">Dispensa</a>
            </li>
            <li>
              <a href="#">Cantina & Bevande</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

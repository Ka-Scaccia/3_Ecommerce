import "../CSS/menuReparti.css";
import { Apple, Beef, Croissant, Wine, Leaf } from "lucide-react";

export const MenuReparti = () => {
  return (
    <>
      <div className="menuReparti">
        <h2 className="titoloMenuReparti">Esplora per reparto</h2>
        <ul className="listaMenuReparti flex">
          <li className="elementoListaMenuReparti flex">
            <Apple className="iconaListaMenuReparti ortofrutta" />
            <a href="#"
            className="linkListaMenuReparti cursorPOINTER">Ortofrutta</a>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Beef className="iconaListaMenuReparti macelleria" />
            <a href="#"
            className="linkListaMenuReparti cursorPOINTER">Macelleria & Salumi</a>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Croissant className="iconaListaMenuReparti colazione" />
            <a href="#"
            className="linkListaMenuReparti cursorPOINTER">Colazione & Forno</a>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Wine className="iconaListaMenuReparti cantina"/>
            <a href="#"
            className="linkListaMenuReparti cursorPOINTER">Cantina & Birre</a>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Leaf className="iconaListaMenuReparti bio"/>
            <a href="#"
            className="linkListaMenuReparti cursorPOINTER">100% Prodotti Bio</a>
          </li>
        </ul>
      </div>
    </>
  );
};

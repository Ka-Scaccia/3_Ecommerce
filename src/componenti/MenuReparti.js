import "../CSS/route/home/menuReparti.css";
import {
  Apple,
  Beef,
  Croissant,
  Wine,
  Leaf,
  Amphora,
  Milk,
  Fish,
} from "lucide-react";
import { Link } from "react-router-dom";

export const MenuReparti = () => {
  return (
    <>
      <div className="menuReparti">
        <h2 className="titoloMenuReparti">Esplora per reparto</h2>
        <ul className="listaMenuReparti flex">
          <li className="elementoListaMenuReparti flex">
            <Apple className="iconaListaMenuReparti ortofrutta" />
            <Link
              to="/reparto-ortofrutta"
              className="linkListaMenuReparti cursorPOINTER"
            >
              Ortofrutta
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Beef className="iconaListaMenuReparti macelleria" />
            <Link to="/reparto-macelleria" className="linkListaMenuReparti cursorPOINTER">
              Macelleria & Salumi
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Croissant className="iconaListaMenuReparti colazione" />
            <Link to="/reparto-colazioneEforno" className="linkListaMenuReparti cursorPOINTER">
              Colazione & Forno
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Wine className="iconaListaMenuReparti cantina" />
            <Link to="/reparto-cantina" className="linkListaMenuReparti cursorPOINTER">
              Cantina & Birre
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Leaf className="iconaListaMenuReparti bio" />
            <Link to="/reparto-bio" className="linkListaMenuReparti cursorPOINTER">
              100% Prodotti Bio
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Amphora className="iconaListaMenuReparti condimenti" />
            <Link to="/reparto-condimenti" className="linkListaMenuReparti cursorPOINTER">
              Condimenti
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Milk className="iconaListaMenuReparti latticini" />
            <Link to="/reparto-latticini" className="linkListaMenuReparti cursorPOINTER">
              Latticini
            </Link>
          </li>
          <li className="elementoListaMenuReparti flex">
            <Fish className="iconaListaMenuReparti pescheria" />
            <Link to="/reparto-pescheria" className="linkListaMenuReparti cursorPOINTER">
              Pescheria
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

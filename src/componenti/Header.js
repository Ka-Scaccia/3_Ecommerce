import "../CSS/header.css";
import "../CSS/utili.css";
import "../CSS/root.css";
import logo from "../asset/img/logo.webp";
import avatar from "../asset/img/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <>
      <header>
        {/* logo, titolo, ricerca */}
        <div className="header flex">
          <div className="headerLeft flex">
            <img src={logo} alt="logo" id="logo" className="w100 cursorPOINTER" />
            <h1>Pronto Spesa</h1>
            <div className="inputBox flex">
              <input type="text" placeholder="Cerca..." className="input" />
              <FontAwesomeIcon
                icon={faSearch}
                className="iconInput cursorPOINTER"
              />
            </div>
          </div>
          {/* preferiti, avatar, carrello */}
          <div className="headerRight flex">
            <div className="basketBox cursorPOINTER">
              <ShoppingBasket size={28} className="iconBasket cursorPOINTER" />
              <span className="articoliCarrello">0</span>
            </div>
            <img src={avatar} alt="foto avatar" id="avatar" className="w100 cursorPOINTER" />
          </div>
        </div>
      </header>
    </>
  );
};

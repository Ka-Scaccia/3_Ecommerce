import { arrayProdotti } from "./prodotti";
import "../CSS/header.css";
import "../CSS/utili.css";
import "../CSS/root.css";
import logo from "../asset/img/logo.webp";
import avatar from "../asset/img/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Header = ({ countCarrello }) => {
  // gestione ricerca prodotti
  const [testoRicerca, setTestoRicerca] = useState("");
  const [suggerimentoRicerca, setSuggerimentoRicerca] = useState([]);
  const salvataggioTestoRicercaESuggerimenti = (e) => {
    const valore = e.target.value;
    setTestoRicerca(valore);

    // se il testo inserito è vuoto annulla algoritmo suggerimenti
    if (valore.trim() === "") {
      setSuggerimentoRicerca([]);
      return;
    }

    // confronto con testo inserito con array oggetti prodotti
    const filtrati = arrayProdotti.filter((item) =>
      item.nome.toLowerCase().includes(valore.toLowerCase()),
    );

    setSuggerimentoRicerca(filtrati);
  };

  // gestione click su un suggerimento
  const selezionaSuggerimento = (nomeProdotto) => {
    setTestoRicerca(nomeProdotto);
    setSuggerimentoRicerca([]);
  };

  // controllo input ricerca
  const navigate = useNavigate();

  const eseguiRicerca = (valore = testoRicerca) => {
    const ricerca = valore.trim();
    if (!ricerca) {
      alert("Scrivi qualcosa!");
      return;
    } else {
      const risultati = arrayProdotti.filter((item) =>
        item.nome.toLowerCase().includes(ricerca.toLowerCase()),
      );

      navigate("/risultati-ricerca", {
        state: { ricerca, suggerimentoRicerca: risultati },
      });

      setSuggerimentoRicerca([]);
    }
  };

  // gestione click icona carrello
  const clickCarrello = () => {
    if (countCarrello === 0) {
      alert("Aggiungi qualcosa al carrello!");
    } else {
      // controllo input ricerca
      navigate("/carrello");
    }
  };

  return (
    <>
      <header>
        {/* logo, titolo, ricerca */}
        <div className="header flex">
          <div className="headerLeft flex">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                id="logo"
                className="w100 cursorPOINTER"
              />
            </Link>
            <h1>Pronto Spesa</h1>
            <div className="inputBox flex">
              <input
                type="text"
                placeholder="Cerca..."
                className="input"
                value={testoRicerca}
                onChange={salvataggioTestoRicercaESuggerimenti}
              />
              <button
                className="link_iconInput"
                onClick={() => eseguiRicerca()}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="iconInput cursorPOINTER"
                ></FontAwesomeIcon>
              </button>
              {suggerimentoRicerca.length > 0 && (
                  <div className="risultatiRicercaSuggerimenti flex cursorPOINTER">
                    {suggerimentoRicerca.slice(0,5).map((item) => (
                      <div
                        className="risultatiRicerca_box flex"
                        key={item.id}
                        onClick={() => selezionaSuggerimento(item.nome)}
                      >
                        <span className="risultatiRicercaBox_icona">
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className="risultatiRicercaBox_nome">
                          {item.nome}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
          {/* preferiti, avatar, carrello */}
          <div className="headerRight flex">
            <div className="basketBox cursorPOINTER">
              <ShoppingBasket
                size={28}
                className="iconBasket cursorPOINTER"
                onClick={clickCarrello}
              />
              <span className="articoliCarrello">{countCarrello}</span>
            </div>
            <img
              src={avatar}
              alt="foto avatar"
              id="avatar"
              className="w100 cursorPOINTER"
            />
          </div>
        </div>
      </header>
    </>
  );
};

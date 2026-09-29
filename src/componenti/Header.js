import "../CSS/header.css";
import "../CSS/utili.css";
import "../CSS/root.css";
import logo from "../asset/img/logo.webp";
import avatar from "../asset/img/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  // elenco prodotti
  const prodotti = [
    { id: 1, nome: "arance" },
    { id: 2, nome: "mirtilli" },
    { id: 3, nome: "olio d'oliva" },
    { id: 4, nome: "parmigiano reggiano" },
    { id: 5, nome: "pomodorini bio" },
    { id: 6, nome: "salmone fresco" },
  ];

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
    const filtrati = prodotti.filter((item) =>
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

  const controlloInputRicerca = (e) => {
    const ricerca = testoRicerca;
    if (ricerca.trim() === "") {
      e.preventDefault();
      alert("Scrivi qualcosa!");
      return;
    } else {
      navigate("/risultati-ricerca", { state: { ricerca } });
    }
  };

  return (
    <>
      <header>
        {/* logo, titolo, ricerca */}
        <div className="header flex">
          <div className="headerLeft flex">
            <img
              src={logo}
              alt="logo"
              id="logo"
              className="w100 cursorPOINTER"
            />
            <h1>Pronto Spesa</h1>
            <div className="inputBox flex">
              <input
                type="text"
                placeholder="Cerca..."
                className="input"
                onChange={salvataggioTestoRicercaESuggerimenti}
              />
              <Link to="/risultati-ricerca" className="link_iconInput">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="iconInput cursorPOINTER"
                  onClick={controlloInputRicerca}
                />
              </Link>
              {suggerimentoRicerca.length > 0 && (
                <div className="inputBox_risultatiRicerca flex cursorPOINTER">
                  {suggerimentoRicerca.map((item) => (
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
              <ShoppingBasket size={28} className="iconBasket cursorPOINTER" />
              <span className="articoliCarrello">0</span>
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

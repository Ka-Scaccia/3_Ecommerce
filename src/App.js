import './App.css';
import { Card_prodottiFreschi } from './componenti/Card_prodottiFreschi.js';
import { GuidaSpesa } from './componenti/GuidaSpesa.js';
import { Header } from "./componenti/Header.js";
import { MenuReparti } from './componenti/MenuReparti.js';
import { Nav } from "./componenti/Nav.js";
import { ProdottiMigliori } from './componenti/ProdottiMigliori.js';
import { Footer } from './componenti/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Card_prodottiFreschi />
      <MenuReparti />
      <GuidaSpesa />
      <ProdottiMigliori />
      <Footer />
    </div>
  );
}

export default App;

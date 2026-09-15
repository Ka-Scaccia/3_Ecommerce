import './App.css';
import { Card_prodottiFreschi } from './componenti/Card_prodottiFreschi.js';
import { Header } from "./componenti/Header.js";
import { Nav } from "./componenti/Nav.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Card_prodottiFreschi />
    </div>
  );
}

export default App;

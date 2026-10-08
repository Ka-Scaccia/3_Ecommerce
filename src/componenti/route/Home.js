import { Card_prodottiFreschi } from "../Card_prodottiFreschi.js";
import { GuidaSpesa } from "../GuidaSpesa.js";
import { MenuReparti } from "../MenuReparti.js";
import { ProdottiMigliori } from "../ProdottiMigliori.js";

export const Home = ({
  countCarrello,
  setCountCarrello,
  arrayCarrello,
  setArrayCarrello,
}) => {
  return (
    <>
      <Card_prodottiFreschi />
      <MenuReparti
        prodottiCarrello={arrayCarrello}
        setProdottiCarrello={setArrayCarrello}
      />
      <GuidaSpesa />
      <ProdottiMigliori
        numProdotti={countCarrello}
        setNumProdotti={setCountCarrello}
        prodottiCarrello={arrayCarrello}
        setProdottiCarrello={setArrayCarrello}
      />
    </>
  );
};

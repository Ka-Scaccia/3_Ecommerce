import { Card_prodottiFreschi } from "../Card_prodottiFreschi.js";
import { GuidaSpesa } from "../GuidaSpesa.js";
import { MenuReparti } from "../MenuReparti.js";
import { ProdottiMigliori } from "../ProdottiMigliori.js";

export const Home = () => {
  return (
    <>
      <Card_prodottiFreschi />
      <MenuReparti />
      <GuidaSpesa />
      <ProdottiMigliori />
    </>
  );
};

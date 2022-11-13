import st from "./Cards.module.css";

import { Link } from "react-router-dom";
import { recuperar } from "../../../../../0-GeneralComp/0-StaticData/dataProv";

export function Cards({ rabitID, rabitImage, rabitRaza, rabitGen, rabitInfo }) {
  return (
    <>
      <Link
        to="/vitae"
        onClick={() => {
          recuperar(rabitID, rabitInfo);
        }}
      >
        <button className={st.container} id={rabitID}>
          <div className={st.panelId}>
            <img className={st.rabitImg} src={rabitImage} alt="" />
            <div className={st.idName}>{rabitID}</div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div className={st.titles}>
            Estado:
            <br />
            Raza:
            <br />
            Genero:
            <br />
            <br />
            Concepción:
            <br />
            Fecha:
            <br />
            Procedencia:
          </div>
          <div className={st.ask}>
            -----------------------------
            <br />
            {rabitRaza}
            <br />
            {rabitGen}
            <br />
            <br />
            -----------------------------
            <br />
            -----------------------------
            <br />
            -----------------------------
          </div>
        </button>
      </Link>
    </>
  );
}

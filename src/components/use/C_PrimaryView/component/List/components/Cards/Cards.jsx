import st from "./Cards.module.css";

import { Link } from "react-router-dom";
import { recuperar } from "../../../../../0-GeneralComp/0-StaticData/dataProv";

export function Cards({ rabitID, rabitRaza, date, stage }) {
  return (
    <>
      <Link
        to="/vitae"
        onClick={() => {
          recuperar(rabitID);
        }}
      >
        <button className={st.container} id={rabitID}>
          <div className={st.panelId}>
            <div className={st.idName}>{rabitID}</div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div className={st.titles}>
            Raza:
            <br />
            Fecha:
            <br />
          </div>
          <div className={st.ask}>
            {rabitRaza}
            <br />
            {date}
            <br />
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div className={st.ask}>{stage}</div>
        </button>
      </Link>
    </>
  );
}

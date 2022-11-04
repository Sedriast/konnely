import st from "./Cards.module.css";

import { Link } from "react-router-dom";

export function Cards({ changeID, date, description, user }) {
  return (
    <>
      <button className={st.container} id={changeID}>
        <div className={st.subPan}>
          <div className={st.ask}>{changeID}</div>
        </div>
        <br />
        <hr />
        <br />
        <div className={st.subPan}>
          <div className={st.title}>Fecha: </div>
          <div className={st.ask}>{date}</div>
        </div>
        <br />
        <div className={st.subPan}>
          {/* esto es opcional */}
          <div className={st.title}>Causa: </div>
          <div className={st.ask}>
            <p>{description}</p>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className={st.user}>
          <div className={st.name}>{user}</div>
        </div>
      </button>
    </>
  );
}

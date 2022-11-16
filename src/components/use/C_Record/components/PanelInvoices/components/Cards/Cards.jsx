import st from "./Cards.module.css";

import { Link } from "react-router-dom";

export function Cards({ ID, date, totalValue, sender, user }) {
  return (
    <>
      <button className={st.container} id={ID}>
        <div className={st.subPan}>
          <div className={st.title}>Número: </div>
          <div className={st.ask}>{ID}</div>
        </div>
        <div className={st.subPan}>
          <div className={st.title}>Fecha: </div>
          <div className={st.ask}>{ID}</div>
        </div>
        <br />
        <hr />
        <br />
        <div className={st.subPan}>
          <div className={st.title}>Conejos: </div>
          <div className={st.ask}>{date}</div>
        </div>
        <div className={st.subPan}>
          <div className={st.title}>Valor total: </div>
          <div className={st.ask}>{date}</div>
        </div>
        <div className={st.subPan}>
          <div className={st.title}>Remitente: </div>
          <div className={st.ask}>{date}</div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div className={st.subPan}>
          <div className={st.title}>Creado por: </div>
          <div className={st.ask}>{user}</div>
        </div>
      </button>
    </>
  );
}

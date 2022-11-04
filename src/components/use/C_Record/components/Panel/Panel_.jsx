import st from "./Panel_.module.css";

import { Cards } from "./component/Cards/Cards";

export function Panel_() {
  return (
    <>
      {" "}
      <div className={st.panelSearchBar}>
        <form onSubmit={() => {}}>
          <input name="buscar" placeholder="Buscar" onChange={() => {}} />
          <button className={st.btnSearch} type="submit">
            🔎
          </button>
        </form>
      </div>
      <div className={st.cards}>
        <Cards />
      </div>
    </>
  );
}

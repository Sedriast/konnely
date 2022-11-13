import st from "./PanelChanges.module.css";

import { Cards } from "./components/Cards/Cards";

export function PanelChanges() {
  const r = [{}, {}, {}, {}];
  return (
    <>
      <div className={st.container}>
        <div className={st.panelSearchBar}>
          <form onSubmit={() => {}}>
            <input name="buscar" placeholder="Buscar" onChange={() => {}} />
            <button className={st.btnSearch} type="submit">
              🔎
            </button>
          </form>
        </div>
        <div className={st.panelCards}>
          <div className={st.cards}>
            {r.map((item, index) => {
              return <Cards key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

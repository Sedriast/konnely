import st from "./PanelInvoice.module.css";

import { Cards } from "./components/Cards/Cards";

export function PanelInvoice() {
  const r = [{}, {}, {}, {}];
  return (
    <>
      <div className={st.container}>
        <div className={st.panelSearchBar}>
          <form onSubmit={(e) => {}}>
            <input name="buscar" placeholder="Buscar" onChange={(e) => {}} />
            <button className={st.btnSearch} type="submit">
              🔎
            </button>
          </form>
        </div>
        <div className={st.panelCards}>
          <div className={st.cards}>
            {" "}
            {r.map((item, index) => {
              return <Cards key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

import st from "./Cards.module.css";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Buttons } from "../../../../../../../0-GeneralComp/1-Buttons/Buttons";

import { Ref } from "./components/Ref";

export function Cards({ editor, stages }) {
  return (
    <div className={st.container}>
      {editor?.length === 1 ? (
        <>
          <div className={st.panelId}>Editor: {editor}</div>
        </>
      ) : (
        <>
          <div className={st.panelId}>
            Editores:
            {editor?.map((u) => (
              <h1> {"* " + u}</h1>
            ))}
          </div>
        </>
      )}
      <div className={st.panelId}>
        <div className={st.btnEdit}>
          <Buttons
            route="/formEditRepro"
            label="Editar"
            direction="bottom"
            btnIconText={faPenToSquare}
          />
        </div>
      </div>
      <br />
      <div className={st.panelInfo}>
        {stages?.map((element, index) => {
          return (
            <>
              <Ref key={index} stage={element} />
              {element.title === "Destete" ? "" : ">"}
            </>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

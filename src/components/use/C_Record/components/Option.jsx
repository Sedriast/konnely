import st from "../Record.module.css";

import { Cards } from "./Cards/Cards";

export function Option({ op }) {
  switch (op) {
    case false:
      return (
        <div className={st.cards}>
          <Cards />
        </div>
      );
    case true:
      return <></>;
    default:
      break;
  }
}

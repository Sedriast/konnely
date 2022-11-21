import st from "./Invoice.module.css";

import { newTreats } from "../../0-GeneralComp/0-StaticData/options";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { Form } from "./component/Form/Form";

export function Invoice() {
  const cm = (
    <>
      <LeftBottomMenu
        backCancel={newTreats}
        click={() => {
          window.history.back();
        }}
      />
      <div className={st.optionContainer}>
        <Form />
      </div>
    </>
  );

  return cm;
}

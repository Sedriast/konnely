import st from "./PrintView.module.css";

import {
  dataMonta,
  dataPalpa,
  dataParto,
  dataDestete,
} from "../../../0-GeneralComp/2-FakeData/reproductiveCycle";

import { newTreats } from "../../../0-GeneralComp/0-StaticData/options";

import { Body } from "./components/Body";
import { LeftBottomMenu } from "../../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";

export function PrintView({ data }) {
  const cm = (
    <>
      <LeftBottomMenu
        backCancel={newTreats}
        click={() => {
          window.history.back();
        }}
      />
      <div className={st.optionContainer}>
        <Body
          Montas={dataMonta}
          Palpas={dataPalpa}
          Partos={dataParto}
          Destetes={dataDestete}
        />
      </div>
    </>
  );
  return cm;
}

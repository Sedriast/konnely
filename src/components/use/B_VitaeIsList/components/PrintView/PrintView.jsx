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
import { basicData } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { QueriesSimple_ } from "../../../../firebase/funtions/GetInformation";

import s from "../../../../img/ed.png";

export function PrintView() {
  const cicles = QueriesSimple_({
    coleccion: "reproductive",
    parametro: "uidMother",
    busqueda: basicData.info.uid,
  }).props.children;
  console.log(cicles);
  const cm = (
    <>
      <LeftBottomMenu
        backCancel={newTreats}
        click={() => {
          window.history.back();
        }}
      />
      <div className={st.optionContainer}>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <img src="../../../../img/ed.png" alt="" />
                </th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        <Body cicles={cicles} />
      </div>
    </>
  );
  return cm;
}

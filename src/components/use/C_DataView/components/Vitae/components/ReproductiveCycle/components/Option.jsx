import st from "../ReproductiveCycle.module.css";

import { Buttons } from "../../../../../../0-GeneralComp/1-Buttons/Buttons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Cards } from "./Cards/Cards";

import { basicData } from "../../../../../../0-GeneralComp/0-StaticData/dataProv";
import { QueriesSimple_ } from "../../../../../../../firebase/funtions/GetInformation";
import { Loading } from "../../../../../../0-GeneralComp/1-Loading/Loading";

export function Option({ op }) {
  const reproductiveCycles = QueriesSimple_({
    coleccion: "reproductive",
    parametro: "uidMother",
    busqueda: basicData.info.uid,
  }).props.children;
  switch (op) {
    case false:
      return (
        <div className={st.act}>
          <Buttons
            route="/NewRepro"
            label="Nueva camada"
            direction="bottom"
            btnIconText={faCirclePlus}
          />
          <br />
          Nueva camada
        </div>
      );
    case true:
      return reproductiveCycles !== "[]" ? (
        reproductiveCycles?.map(
          (item, index) =>
            item.state === true && (
              <>
                <div className={st.con}>
                  <Cards
                    key={index}
                    id={item.id}
                    editor={item.displayNameEditors}
                    stages={item.stages}
                  />
                </div>
              </>
            )
        )
      ) : (
        <>
          <Loading />
        </>
      );
    default:
      return <></>;
  }
}

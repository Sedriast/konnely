import st from "./VitaeIsList.module.css";

import {
  viewsListOptions,
  generalOptions,
} from "../0-GeneralComp/0-StaticData/options";

import { Option } from "./components/Option";
import { useState } from "react";
import { RigthTopButtons } from "../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons";
import { LeftBottomMenu } from "../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { faCircleInfo, faSyringe } from "@fortawesome/free-solid-svg-icons";

export function ViewIsList() {
  const [optionSelect, setOptionSelect] = useState(false);

  const tru = () => {
    return setOptionSelect(true);
  };

  const dataViewOptions = [
    {
      id: 0,
      icon: faCircleInfo,
      path: "/impVeiw",
      label: "Información general",
    },
    {
      id: 1,
      state: tru,
      icon: faSyringe,
      path: "#",
      label: "Tratamientos",
    },
  ];

  const cm = (
    <>
      <LeftBottomMenu
        backCancel={optionSelect ? viewsListOptions[0] : null}
        options={!optionSelect ? dataViewOptions : null}
        click={() => {
          setOptionSelect(!optionSelect);
        }}
      />
      <div className={st.optionContainer}>
        <Option op={optionSelect} />
      </div>
      {optionSelect ? <></> : <RigthTopButtons BTNS={generalOptions} />}
    </>
  );

  return cm;
}

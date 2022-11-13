import st from "./Record.module.css";

import {
  faFileInvoice,
  faFileWaveform,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { generalOptions } from "../0-GeneralComp/0-StaticData/options";
import { LeftBottomMenu } from "../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { RigthTopButtons } from "../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons";
import { Option } from "./components/Option";

export function Record() {
  const [optionSelect, setOptionSelect] = useState(false);
  const fal = () => {
    setOptionSelect(false);
  };
  const tru = () => {
    setOptionSelect(true);
  };
  const dataViewOptions = [
    {
      id: 0,
      state: fal,
      icon: faFileWaveform,
      path: "#",
      label: "Cambios",
    },
    {
      id: 1,
      state: tru,
      icon: faFileInvoice,
      path: "#",
      label: "Facturación",
    },
  ];

  return (
    <>
      <LeftBottomMenu options={dataViewOptions} />
      <div className={st.optionContainer}>
        <Option op={optionSelect} />
      </div>
      <RigthTopButtons BTNS={generalOptions} />
    </>
  );
}

import React from "react";
import { ReactComponent as Fattening } from "./assets/logos/rabbit_fattening_131007.svg";
import { ReactComponent as Palpation } from "./assets/logos/latex_globes_13256.svg";
import { ReactComponent as Weaning } from "./assets/logos/baby_bottle_13945.svg";
import { ReactComponent as Ride } from "./assets/logos/rabbit_ride_13244.svg";
import { ReactComponent as Prepartum } from "./assets/logos/nest_13318.svg";
import { ReactComponent as Partum } from "./assets/logos/partum_13329.svg";
import { ReactComponent as UDEC } from "./assets/logos/UDEC_103633.svg";
import { ReactComponent as Close } from "./assets/close_0911320.svg";

import { icon_keys } from "./keys";

const type_ = {
    [icon_keys.FATTENING]: <Fattening />,
    [icon_keys.PALPATION]: <Palpation />,
    [icon_keys.PREPARTUM]: <Prepartum />,
    [icon_keys.WEANING]: <Weaning />,
    [icon_keys.PARTUM]: <Partum />,
    [icon_keys.CLOSE]: <Close />,
    [icon_keys.RIDE]: <Ride />,
    [icon_keys.UDEC]: <UDEC />,
};

export function icon(type = "") {
    return (
        <picture>
            {type_[type]}
        </picture>
    );
}
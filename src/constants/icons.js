import React from "react";
import { ReactComponent as Close } from "./assets/close_0911320.svg";

import { icon_keys } from "./keys";

const type_ = {
    [icon_keys.CLOSE]: <Close />,
};

export function icon(type = "") {
    return (
        <picture>
            {type_[type]}
        </picture>
    );
}
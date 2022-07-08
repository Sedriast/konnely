import r from "../../img/c/r.jpeg";
import g from "../../img/c/g.jpeg";
import b from "../../img/c/b.jpeg";
import w from "../../img/c/w.jpeg";
import st from "./css/List.module.css";

import { useState } from "react";
import { Buttons } from "../Tools/Buttons/Buttons";
import { DropdownList } from "./DropdownList";

export function List() {
    const [filter, setFilter] = useState("red");
    return (
        <>
            <div className={st.container}>
                <div className={st.pa}>
                    <div className={st.fil}>
                        <div className={st.opF} id="b">
                            <Buttons
                                link_="#"
                                text_="Azul"
                                icon_={b}
                                click_={() => {
                                    setFilter("blue");
                                }}
                            />
                        </div>
                        <div className={st.opF} id="r">
                            <Buttons
                                link_="#"
                                text_="Rojo"
                                icon_={r}
                                click_={() => {
                                    setFilter("red");
                                }}
                            />
                        </div>
                        <div className={st.opF} id="g">
                            <Buttons
                                link_="#"
                                text_="Verde"
                                icon_={g}
                                click_={() => {
                                    setFilter("green");
                                }}
                            />
                        </div>
                        <div className={st.opF} id="w">
                            <Buttons
                                link_="#"
                                text_="Blanco"
                                icon_={w}
                                click_={() => {
                                    setFilter("white");
                                }}
                            />
                        </div>
                    </div>
                    <div className={st.se}>
                        <input placeholder="Buscar"></input>
                    </div>
                </div>
                <div className={st.panel}>
                    {filter === "red" && <DropdownList filter={filter} />}
                    {filter === "blue" && <DropdownList filter={filter} />}
                    {filter === "white" && <DropdownList filter={filter} />}
                    {filter === "green" && <DropdownList filter={filter} />}
                </div>
            </div>
        </>
    );
}

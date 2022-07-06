import r from "../../img/c/r.jpeg";
import g from "../../img/c/g.jpeg";
import b from "../../img/c/b.jpeg";
import w from "../../img/c/w.jpeg";
import st from "./css/List.module.css";

import { useState } from "react";
import { Cards } from "../Tools/Cards/Cards";
import { Buttons } from "../Tools/Buttons/Buttons";
import { QueriesSimple_ } from "../../firebase/funtions/QueriesSimple_";

export function List() {
    const [filter, setFilter] = useState(null);
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
                    {QueriesSimple_({
                        coleccion: "conejos",
                        parametro: "grupo",
                        busqueda: "red",
                    }).props.children.map((a, index) => (
                        <Cards
                            clsName={st.card}
                            key={index}
                            id_={index}
                            cGp={a.grupo}
                            url={a.url}
                            rabitDataName={a.id}
                            data={a}
                            data1={a.raza}
                            data2={a.genero}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

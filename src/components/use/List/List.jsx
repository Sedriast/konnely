import r from "../../img/c/r.jpeg";
import g from "../../img/c/g.jpeg";
import b from "../../img/c/b.jpeg";
import w from "../../img/c/w.jpeg";
import st from "./css/List.module.css";

import { useState } from "react";
import { DropdownList } from "./DropdownList";
import { Buttons } from "../Tools/Buttons/Buttons";

export function List() {
    const [filter, setFilter] = useState("");
    const [auxsearch_, setAuxsearch_] = useState("");
    const [search_, setSearch_] = useState("");
    const search = { busqueda: "", vieja: "" };
    function handleChange(e) {
        const { value } = e.target;
        setAuxsearch_(value);
    }
    function change(props) {
        search.vieja = props;
    }

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
                                    search.busqueda = "";
                                    search.vieja = "";
                                    setAuxsearch_("");
                                    setSearch_("");
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
                                    search.busqueda = "";
                                    search.vieja = "";
                                    setAuxsearch_("");
                                    setSearch_("");
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
                                    search.busqueda = "";
                                    search.vieja = "";
                                    setAuxsearch_("");
                                    setSearch_("");
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
                                    search.busqueda = "";
                                    search.vieja = "";
                                    setAuxsearch_("");
                                    setSearch_("");
                                    setFilter("white");
                                }}
                            />
                        </div>
                    </div>
                    <div className={st.se}>
                        <input
                            value={auxsearch_}
                            placeholder="Buscar"
                            onChange={handleChange}></input>
                        <Buttons
                            link_="#"
                            text_="Buscar"
                            click_={() => {
                                setSearch_(auxsearch_);
                                setFilter("");
                                setAuxsearch_("");
                            }}
                        />
                    </div>
                </div>
                <div className={st.panel}>
                    {filter === "red" && (
                        <DropdownList
                            coleccion="conejos"
                            parametro="grupo"
                            busqueda={filter}
                        />
                    )}
                    {filter === "blue" && (
                        <DropdownList
                            coleccion="conejos"
                            parametro="grupo"
                            busqueda={filter}
                        />
                    )}
                    {filter === "white" && (
                        <DropdownList
                            coleccion="conejos"
                            parametro="grupo"
                            busqueda={filter}
                        />
                    )}
                    {filter === "green" && (
                        <DropdownList
                            coleccion="conejos"
                            parametro="grupo"
                            busqueda={filter}
                        />
                    )}
                    {console.log(search_)}
                    {console.log(search.vieja)}
                    {auxsearch_ === search.vieja && (
                        <DropdownList
                            coleccion="conejos"
                            parametro="id"
                            busqueda={search_}
                            change={change}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

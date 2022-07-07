import st from "./css/List.module.css";

import { Cards } from "../Tools/Cards/Cards";
import { QueriesSimple_ } from "../../firebase/funtions/QueriesSimple_";

export function DropdownList(props) {
    return (
        <>
            {QueriesSimple_({
                coleccion: "conejos",
                parametro: "grupo",
                busqueda: props.filter,
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
        </>
    );
}

import swal from "sweetalert";
import st from "./css/List.module.css";

import { useEffect } from "react";
import { Cards } from "../Tools/Cards/Cards";
import { QueriesSimple_ } from "../../firebase/funtions/QueriesSimple_";

export function DropdownList(props) {
    const resultado = QueriesSimple_({
        coleccion: props.coleccion,
        parametro: props.parametro,
        busqueda: props.busqueda,
    }).props.children;
    useEffect(() => {
        if (resultado.length === 0 && props.parametro === "id") {
            swal({
                title: "El identificador no corresponde a un registro actual.",
                icon: "error",
                button: "aceptar",
            });
        }
    }, [resultado, props]);

    return (
        <>
            {QueriesSimple_({
                coleccion: props.coleccion,
                parametro: props.parametro,
                busqueda: props.busqueda,
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
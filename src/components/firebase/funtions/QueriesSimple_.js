import app from "../credentials";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export const QueriesSimple_ = (props) => {
    const [data_, setData_] = useState([{}]);

    useEffect(() => {
        const simpleQueries = async (datos) => {
            const q = query(
                collection(db, datos.coleccion),
                where(datos.parametro, "==", datos.busqueda)
            );
            const querySnapshot = await getDocs(q);
            setData_(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
        };
        simpleQueries(props);
    }, [props.coleccion]);

    return (
        <>
            {data_?.map((Object) => {
                return Object;
            })}
        </>
    );
};

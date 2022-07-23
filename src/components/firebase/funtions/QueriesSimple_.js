import app from '../credentials';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

export const QueriesSimple_ = (props) => {
    const coleccion = props.coleccion;
    const parametro = props.parametro;
    const busqueda = props.busqueda;
    const [data_, setData_] = useState([{}]);

    useEffect(() => {
        const simpleQueries = async () => {
            const q = query(collection(db, coleccion), where(parametro, '==', busqueda));
            const querySnapshot = await getDocs(q);
            setData_(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
        };
        simpleQueries();
    }, [coleccion, busqueda, parametro]);

    return (
        <>
            {data_?.map((Object) => {
                return Object;
            })}
        </>
    );
};

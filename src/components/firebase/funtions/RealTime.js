import app from '../credentials';

import { collection, onSnapshot, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

export const RealTime = (props) => {
    const coleccion = props.coleccion;
    const parametro = props.parametro;
    const busqueda = props.busqueda;
    const [data_, setData_] = useState([
        {
            name: 'Loading...',
            url: null,
            genero: null,
            raza: null,
            concepcion: null,
            grupo: null,
            destete: null,
            id: null,
            idMadre: null,
            idPadre: null,
            motivo: null,
            nacimiento: null,
            peso: null,
            tema: null,
        },
    ]);

    useEffect(() => {
        const q = query(collection(db, coleccion), where(parametro, '==', busqueda));
        onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
    }, [parametro, busqueda, coleccion]);

    return (
        <>
            {props.coleccion === 'conejos' || props.coleccion === 'usuarios'
                ? data_?.map((Object) => {
                      return Object;
                  })
                : props.coleccion !== 'conejos' &&
                  data_?.map((Object) => {
                      return Object.name;
                  })}
        </>
    );
};

import app from '../credentials';

import { collection, onSnapshot, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

export const RealTime = ({ coleccion, parametro, busqueda }) => {
    const [data_, setData_] = useState([{}]);

    useEffect(() => {
        const q = query(collection(db, coleccion), where(parametro, '==', busqueda));
        onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
    }, [parametro, busqueda, coleccion]);

    return (
        <>
            {coleccion === 'rabbits' || coleccion === 'usuarios'
                ? data_?.map((Object) => {
                      return Object;
                  })
                : coleccion !== 'rabbits' &&
                  data_?.map((Object) => {
                      return Object.name;
                  })}
        </>
    );
};

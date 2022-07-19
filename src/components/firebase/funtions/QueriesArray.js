import app from '../credentials';
import { useEffect } from 'react';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

export const QueriesSimple_ = (props) => {
    useEffect(() => {
        const simpleQueries = async (datos) => {
            const q = query(
                collection(db, datos.coleccion),
                where(datos.parametro, '==', datos.busqueda)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) => console.log({ ...doc.data() }));
        };
        simpleQueries(props);
    }, [props]);

    return <></>;
};

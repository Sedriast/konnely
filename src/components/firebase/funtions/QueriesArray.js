import app from '../credentials';
import { useEffect } from 'react';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

export const QueriesArray = () => {
    useEffect(() => {
        const simpleQueries = async () => {
            const q = query(collection(db, 'Prueba'), where('Pruebas_2', 'array-contains-any', [1]));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
        };
        simpleQueries();
    }, []);

    return <></>;
};

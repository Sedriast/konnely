import app from '../credentials';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

export const GetDocument = ({ coleccion, list }) => {
    const [data_, setData_] = useState([{ values: ['Loading...'] }]);

    useEffect(() => {
        const simpleQueries = async () => {
            const q = doc(db, coleccion, list);
            const querySnapshot = await getDoc(q);
            setData_([querySnapshot.data()]);
        };
        simpleQueries();
    }, [coleccion, list]);

    return (
        <>
            {data_?.map((Object) => {
                return Object;
            })}
        </>
    );
};

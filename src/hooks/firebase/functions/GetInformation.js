import app from '../credentials';
import { getFirestore, doc, getDoc, query, collection, getDocs, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

/// Función para obtener una lista de valores para los formularios de la base de datos

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

/// Función para obtener uno o varios documentos especificos de la base de datos

export const QueriesSimple_ = ({ coleccion, parametro, busqueda }) => {
    const [data_, setData_] = useState([]);

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

/// Función para obtener uno o varios documentos especificos de la base de datos

export const QueriesSimple_2 = async ({ coleccion, parametro, busqueda }) => {
    let data_ = [];
    const q = query(collection(db, coleccion), where(parametro, '==', busqueda));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => data_.push({ ...doc.data() }));
    return (
        <>
            {data_?.map((Object) => {
                return Object;
            })}
        </>
    );
};

/// Función para obtener un documento especifico en tiempo real de la base de datos

export const RealTime = ({ coleccion, parametro, busqueda }) => {
    const [data_, setData_] = useState([{}]);

    useEffect(() => {
        const q = query(collection(db, coleccion), where(parametro, '==', busqueda));
        onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
    }, [parametro, busqueda, coleccion]);

    return (
        <>
            {data_?.map((Object) => {
                return Object;
            })}
        </>
    );
};

/// function that extract all documents from one collection specified
export const getAllCollection = async (collection_) => {
    const querySnapshot = await getDocs(collection(db, collection_));
    return querySnapshot.docs.map((doc) => doc.data());
};
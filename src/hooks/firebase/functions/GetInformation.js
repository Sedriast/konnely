import app from '../credentials';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, query, collection, getDocs, where } from 'firebase/firestore';

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

/// Función para obtener la busqueda de un documento especifico de la base de datos
export async function GetOneDocument({ collection_, parameter_, search_ }) {
    console.log(collection_, parameter_, search_);

    let document = [];
    const q = query(collection(db, collection_), where('id', '==', '13'));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => document.push({ ...doc.data() }));
    return document;
}

// Function that extracts data from a specified collection in real time.

export async function GetAllCollection(collectionName) {
    const q = collection(db, collectionName);
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
};


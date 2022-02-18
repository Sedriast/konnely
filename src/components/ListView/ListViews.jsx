import app from '../firebase/credenciales';
import style from '../css/ListViews.module.css';
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { CardMin } from './CardMin';
const db = getFirestore(app);

export function ListViews(props){

    const imagenurl = 'https://drive.google.com/uc?export=download&id='+props.idImage
	const [data, setData] = useState([{Objeto:{}}]);

	useEffect(
		() =>
		  onSnapshot(collection(db, 'conejos'), (snapshot) =>
			setData(snapshot.docs.map((doc) => ({ ...doc.data()})))
		  ),
		[]);

		function Informacion () {
			const lo = [ ];
			data.map((color) => (
				lo.push(color.Objeto.nombre)
				))
			return lo
		}


		console.log(data);


    return(
        <>
            <div className={style.subPanel}>
			{ Informacion().map(a=> <CardMin url={imagenurl} rabitData={a}/>)}
            </div>
        </>
    );
}
import db from '../firebase/credenciales';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import style from '../css/ListViews.module.css';
import { CardMin } from './CardMin';

export function ListViews(props){

    const imagenurl = 'https://drive.google.com/uc?export=download&id='+props.idImage
	const [data, setData] = useState([{}]);

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
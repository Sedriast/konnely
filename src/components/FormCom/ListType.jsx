import db from '../firebase/credenciales';
import style3 from './css/aditionalData.module.css';
import style2 from './css/basicData.module.css';
import { InputImage } from './InputImage';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';

import style from './css/basicData.module.css';

export function ListType(props){

	const coleccion = props.collection;


	const [values, setValues] = useState([{ name: "Loading..."}]);
	const [list, setList] = useState([{ name: "Loading...", id: "initial" }]);

	useEffect(
		() =>
		  onSnapshot(collection(db, coleccion), (snapshot) =>
			setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
		  ),
		[]);


	function lista () {
		const lo = [ ];
		list.map((color) => (
			lo.push(color.name)
			))
		return lo
	}


	const handleChange = e => {
		const {name, value} = e.target;
        setValues({[name]:value})
	};
	
//Esta funcion se usa para enviar los datos seleccionados a donde te plasca
	
/** 
 	function handleSubmit (event) {
		alert('selected is: ' + this.state);
	}
*/

	return (
		<select name="name" className={style.listTypes} onChange={handleChange} >
			{ lista().map(a=><option key={a} value={a}>{a}</option>)}
		</select>
	);
}
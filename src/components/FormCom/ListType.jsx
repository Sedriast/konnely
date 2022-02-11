import db from '../firebase/credenciales';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import style from '../css/Form.module.css';

export function ListType(props){

	const coleccion = props.collection;
	const {handleChanche} = props;

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
	return (
		<select name={coleccion} className={style.listTypes} onChange={handleChanche} >
			{ lista().map(a=><option key={a} value={a}>{a}</option>)}
		</select>
	);
}
import app from '../firebase/credenciales';
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
const db = getFirestore(app);

export function ListTypeMH(props){

	const coleccion = props.collection;
	const {handleChanche} = props;
	const clName = props.clName;

	const [list, setList] = useState([{ name: "Loading...", id: "initial" }]);
    const [enable, setEnable] = useState({estado:true});

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

	const Estado = e =>{
        setEnable({estado:false});
		console.log('Hola');
    }

	return (
		<select className={clName} name={coleccion} onChange={handleChanche}  disabled={enable.estado} onMouseEnter={Estado}>{ lista().map(a=><option key={a} value={a}>{a}</option>)}
		</select>
	);
}
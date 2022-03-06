import app from "./credentials";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function Search(props) {
	const coleccion = props.coleccion;
	const { mostrar } = props;
	const [data_, setData_] = useState();

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setData_(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);
	console.log(mostrar);

	return (
		<>
			<button value={data_} onClick={mostrar}></button>
		</>
	);
}

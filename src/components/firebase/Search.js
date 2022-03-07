import app from "./credentials";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function Search(props) {
	const coleccion = props.coleccion;
	const [data_, setData_] = useState();

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setData_(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);

	return (
		<>
			{data_?.map((Object) => {
				return Object.name;
			})}
		</>
	);
}

import app from "../firebase/credenciales";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function ListType(props) {
	const [list, setList] = useState([{ name: "Loading..." }]);
	const coleccion = props.collection;
	const { handleChanche } = props;
	const clName = props.clName;

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setList(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);

	return (
		<select className={clName} name={coleccion} onChange={handleChanche}>
			{list.map((a) => (
				<option key={a.name} value={a.name}>
					{a.name}
				</option>
			))}
		</select>
	);
}

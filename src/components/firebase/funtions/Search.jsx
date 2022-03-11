import app from "../credentials";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = getFirestore(app);

export const Search = (props) => {
	const coleccion = props;
	const [data_, setData_] = useState([{ name: "Loading..." }]);

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setData_(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[coleccion]
	);

	return (
		<>
			{data_?.map((Object) => {
				return Object.name;
			})}
		</>
	);
};

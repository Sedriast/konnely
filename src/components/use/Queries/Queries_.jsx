import app from "../../firebase/credentials";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const db = getFirestore(app);

export const Queries_ = (props) => {
	const [data_, setData_] = useState([
		{
			url: null,
			genero: null,
			raza: null,
			concepcion: null,
			grupo: null,
			destete: null,
			id: null,
			idMadre: null,
			idPadre: null,
			motivo: null,
			nacimiento: null,
			peso: null,
		},
	]);

	useEffect(() => {
		const simpleQueries = async (datos) => {
			const q = query(
				collection(db, "conejos"),
				where("id", "==", datos)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setData_([doc.data()]);
			});
		};
		simpleQueries(props);
	}, [props]);

	return (
		<>
			{data_?.map((Object) => {
				return Object;
			})}
		</>
	);
};
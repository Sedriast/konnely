import app from "../credentials";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = getFirestore(app);

export const Search = (props) => {
	const coleccion = props;
	const [data_, setData_] = useState([
		{
			datos: {
				name: "Loading...",
				url: null,
				genero: null,
				raza: null,
				enjendramiento: null,
				grupo: null,
				tema: null,
			},
		},
	]);

	useEffect(
		() =>
			onSnapshot(collection(db, coleccion), (snapshot) =>
				setData_(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[coleccion]
	);

	return (
		<>
			{(coleccion === "conejos") | (coleccion === "usuarios")
				? data_?.map((Object) => {
						return Object;
				  })
				: coleccion !== "conejos" &&
				  data_?.map((Object) => {
						return Object.datos.name;
				  })}
		</>
	);
};

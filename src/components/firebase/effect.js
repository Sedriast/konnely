import app from "../firebase/credentials";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);

export function effect({ col }) {
	const [data_, setData_] = useState();

	useEffect(
		() =>
			onSnapshot(collection(db, col), (snapshot) =>
				setData_(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);

	return data_;
	return <></>;
}

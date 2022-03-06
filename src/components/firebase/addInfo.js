import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function effect ({ col }){

	useEffect(
		() =>
			onSnapshot(collection(db, col), (snapshot) =>
				setList(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);
}
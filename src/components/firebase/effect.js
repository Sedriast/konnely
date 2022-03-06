import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function firestore ({ col }){
	
	const addInfo = async (Objeto) => {
		try {
			const storageRef = ref(storage, image.name);
			await uploadBytes(storageRef, image);
			const urlDescarga = await getDownloadURL(storageRef);
			Objeto.url = urlDescarga;
			await addDoc(collection(db, col), { Objeto });
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	useEffect(
		() =>
			onSnapshot(collection(db, col), (snapshot) =>
				setList(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);
}
import app from "../credentials";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export const Add = (props) => {
	const addImageAndInfo = async (Objeto) => {
		const storageRef = ref(storage, props.image.name);
		await uploadBytes(storageRef, props.image);
		const urlDescarga = await getDownloadURL(storageRef);
		delete Objeto.image;
		Objeto.url = urlDescarga;
		console.log(Objeto);
		await addDoc(collection(db, "conejos"), { Objeto });
	};
	addImageAndInfo(props);
};

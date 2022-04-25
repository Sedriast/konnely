import app from "../credentials";
import { useAuth } from "../../../context/AuthContext";
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import swal from "sweetalert";

const db = getFirestore(app);
const storage = getStorage(app);

export const addImageAndInfo = (props) => {
	const addImageAndInfo = async (datos) => {
		try {
			const storageRef = ref(storage, props.image.name);
			await uploadBytes(storageRef, props.image);
			const urlDescarga = await getDownloadURL(storageRef);
			delete datos.image;
			datos.url = urlDescarga;
			await addDoc(collection(db, "conejos"), datos);
		} catch (error) {
			swal({
				title: "No ha seleccionado una imagen",
				icon: "error",
				button: "aceptar",
			});
		}
	};

	addImageAndInfo(props);
};

export const AddInfoProfile = (props) => {
	console.log(props);
	const AddInfoProfile = async (datos) => {
		try {
			await setDoc(doc(db, "usuarios", datos.user), datos.data);
		} catch (error) {
			swal({
				title: "Err",
				icon: error,
				button: "aceptar",
			});
		}
	};
	AddInfoProfile(props);
};

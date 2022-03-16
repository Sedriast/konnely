import app from "../credentials";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import swal from "sweetalert";

const db = getFirestore(app);
const storage = getStorage(app);

export const Add = (props) => {
	const addImageAndInfo = async (datos) => {
		try {
			const storageRef = ref(storage, props.image.name);
			await uploadBytes(storageRef, props.image);
			const urlDescarga = await getDownloadURL(storageRef);
			delete datos.image;
			datos.url = urlDescarga;
			await addDoc(collection(db, "conejos"), { datos });
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

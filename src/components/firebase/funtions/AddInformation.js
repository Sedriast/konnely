import app from "../credentials";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    updateDoc,
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
    const AddInfoProfile = async (datos) => {
        try {
            await setDoc(doc(db, "usuarios", datos.user), datos.data);
        } catch (error) {
            swal({
                title: error,
                icon: "error",
                button: "aceptar",
            });
        }
    };
    AddInfoProfile(props);
};

export const UpdateInfoProfile = (props) => {
    const UpdateInfoProfile = async (datos) => {
        try {
            await updateDoc(doc(db, "usuarios", datos.user), datos.data);
        } catch (error) {
            swal({
                title: error,
                icon: "error",
                button: "aceptar",
            });
        }
    };
    UpdateInfoProfile(props);
};

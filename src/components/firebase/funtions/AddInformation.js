import swal from "sweetalert";
import app from "../credentials";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    uploadString,
} from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export const addImageAndInfo = (props) => {
    const addImageAndInfo = async (datos) => {
        try {
            if (datos.typeImage !== "camera") {
                const storageRef = ref(storage, datos.image.name);
                await uploadBytes(storageRef, datos.image);
                const urlDescarga = await getDownloadURL(storageRef);
                datos.url = urlDescarga;
            } else {
                var auxiliar = [];
                auxiliar = datos.image.split(",");
                const refStorage = ref(storage, "base2");
                await uploadString(refStorage, auxiliar[1], "base64");
                const urlDescarga = await getDownloadURL(refStorage);
                datos.url = urlDescarga;
            }
            delete datos.image;
            delete datos.typeImage;
            await addDoc(collection(db, "conejos"), datos);
        } catch (error) {
            console.log(error);
            // swal({
            //     title: "No ha seleccionado una imagen",
            //     icon: "error",
            //     button: "aceptar",
            // });
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

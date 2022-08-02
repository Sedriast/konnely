import swal from 'sweetalert';
import app from '../credentials';

import { getStorage, ref, getDownloadURL, uploadString } from 'firebase/storage';
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

const db = getFirestore(app);
const storage = getStorage(app);

export const addImageAndInfo = (props) => {
    const funtionAddImageAndInfo = async (datos) => {
        try {
            let auxiliar = [];
            auxiliar = datos.image.split(',');
            if (datos.lactancia) {
                datos.lifecycle[1].peso = datos.lactancia;
            }
            if (datos.levante) {
                datos.lifecycle[2].peso = datos.levante;
            }
            if (datos.engorde) {
                datos.lifecycle[3].peso = datos.engorde;
            }
            if (datos.ceba) {
                datos.lifecycle[4].peso = datos.ceba;
            }
            datos.lifecycle[0].peso = datos.peso;
            const refStorage = ref(storage, datos.id);
            await uploadString(refStorage, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(refStorage);
            datos.url = urlDescarga;
            delete datos.image;
            delete datos.peso;
            await addDoc(collection(db, 'conejos'), datos);
        } catch (error) {
            swal({
                title: 'Ha ocurrido un error con su registro',
                icon: 'error',
                button: 'aceptar',
            });
        }
    };

    funtionAddImageAndInfo(props);
};

export const AddInfoProfile = (props) => {
    const funtionAddInfoProfile = async (datos) => {
        try {
            await setDoc(doc(db, 'usuarios', datos.user), datos.data);
        } catch (error) {
            swal({
                title: error,
                icon: 'error',
                button: 'aceptar',
            });
        }
    };
    funtionAddInfoProfile(props);
};

export const UpdateInfoProfile = (props) => {
    const funtionUpdateInfoProfile = async (datos) => {
        try {
            await updateDoc(doc(db, 'usuarios', datos.user), datos.data);
        } catch (error) {
            swal({
                title: error,
                icon: 'error',
                button: 'aceptar',
            });
        }
    };
    funtionUpdateInfoProfile(props);
};

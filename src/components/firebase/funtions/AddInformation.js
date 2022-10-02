import swal from 'sweetalert';
import app from '../credentials';

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from 'firebase/storage';
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

const db = getFirestore(app);
const storage = getStorage(app);

export const addImageAndInfo = (props) => {
    const funtionAddImageAndInfo = async (datos) => {
        try {
            let auxiliar = [];
            auxiliar = datos.image.split(',');
            if (!datos.origen) {
                datos.origen = 'Ubaté';
            }
            if (datos.levante) {
                datos.lifecycle[1].date = datos.levantefin;
                datos.lifecycle[1].weigth = datos.levante;
                delete datos.levantefin;
                delete datos.levante;
            }
            if (datos.engorde) {
                datos.lifecycle[2].date = datos.engordefin;
                datos.lifecycle[2].weigth = datos.engorde;
                delete datos.engordefin;
                delete datos.engorde;
            }
            if (datos.ceba) {
                datos.lifecycle[3].date = datos.cebafin;
                datos.lifecycle[3].weigth = datos.ceba;
                delete datos.cebafin;
                delete datos.ceba;
            }
            const refStorage = ref(storage, datos.id);
            await uploadString(refStorage, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(refStorage);
            datos.url = urlDescarga;
            delete datos.image;
            delete datos.peso;
            const docRef = await addDoc(collection(db, 'rabbits'), datos);
            await updateDoc(doc(db, 'rabbits', docRef.id), { uid: docRef.id });
        } catch (error) {
            console.log(error.message);
            swal({
                title: 'Ha ocurrido un error con su registro',
                icon: 'error',
                button: 'aceptar',
            });
        }
    };

    funtionAddImageAndInfo(props);
};

export const EditImageAndInfo = (props) => {
    const funtionEditImageAndInfo = async (datos) => {
        try {
            if (datos.image.includes(',')) {
                let auxiliar = [];
                const desertRef = ref(storage, datos.idOld);
                await deleteObject(desertRef);
                auxiliar = datos.image.split(',');
                const refStorage = ref(storage, datos.id);
                await uploadString(refStorage, auxiliar[1], 'base64');
                const urlDescarga = await getDownloadURL(refStorage);
                datos.url = urlDescarga;
                delete datos.image;
            }
            await updateDoc(doc(db, 'rabbits', datos.uid), datos);
        } catch (error) {
            console.log(error);
            swal({
                title: error,
                icon: 'error',
                button: 'aceptar',
            });
        }
    };

    funtionEditImageAndInfo(props);
};

export const AddInfoProfile = (props) => {
    const funtionAddInfoProfile = async ({ user, data }) => {
        try {
            await setDoc(doc(db, 'users', user), data);
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
            await updateDoc(doc(db, 'users', datos.user), datos.data);
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

export const AddTratament = (props) => {
    const funtionAddTratament = async ({ data }) => {
        try {
            const docRef = await addDoc(collection(db, 'trataments'), data);
            await updateDoc(doc(db, 'trataments', docRef.id), { uid: docRef.id });
        } catch (error) {
            swal({
                title: error,
                icon: 'error',
                button: 'aceptar',
            });
        }
    };
    funtionAddTratament(props);
};

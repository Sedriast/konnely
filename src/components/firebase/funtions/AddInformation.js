import swal from 'sweetalert';
import app from '../credentials';

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from 'firebase/storage';
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(app);
const storage = getStorage(app);

/// Función para enviar un nuevo registro de un conejo a la base de datos

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
            delete datos.image;
            delete datos.peso;
            const docRef = await addDoc(collection(db, 'rabbits'), datos);
            const refStorage = ref(storage, docRef.id);
            await uploadString(refStorage, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(refStorage);
            await updateDoc(doc(db, 'rabbits', docRef.id), { uid: docRef.id, url: urlDescarga });
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

/// Función para editar la información basica de un conejo en la base de datos

export const EditImageAndInfo = (props) => {
    const funtionEditImageAndInfo = async (datos) => {
        try {
            if (datos.image.includes(',')) {
                let auxiliar = [];
                const Ref = ref(storage, datos.uid);
                await deleteObject(Ref);
                auxiliar = datos.image.split(',');
                await uploadString(Ref, auxiliar[1], 'base64');
                const urlDescarga = await getDownloadURL(Ref);
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

/// Función para editar el ciclo de vida de un conejo en la base de datos

export const EditInfoRabbit = (props) => {
    const funtionEditInfoRabbit = async (datos) => {
        try {
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

    funtionEditInfoRabbit(props);
};

/// Función para registrar un nuevo usuario en la base de datos

export const AddInfoProfile = (props) => {
    const funtionAddInfoProfile = async (datos) => {
        try {
            await setDoc(doc(db, 'users', datos.user), datos.data);
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

/// Función para editar la información de un usuario en la base de datos

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

/// Función para registrar un nuevo tratamiento en la base de datos

export const AddTratament = (props) => {
    const funtionAddTratament = async (datos) => {
        try {
            const docRef = await addDoc(collection(db, 'trataments'), datos);
            await updateDoc(doc(db, 'trataments', docRef.id), {
                uid: docRef.id,
                state: 'Activo',
                removalDate: null,
            });
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

/// Función para cambiar el estado de un tratamiento en la base de datos

export const AddAudit = (props) => {
    const funtionAddAudit = async (datos) => {
        console.log(datos);
        await updateDoc(doc(db, 'trataments', datos.uidTratament), { state: 'Inactivo', removalDate: Date.now() });
    };
    funtionAddAudit(props);
};

/// Función para borrar un tratamiento en la base de datos

export const RemovalTratament = (props) => {
    const functionRemovalTratament = async (datos) => {
        await deleteDoc(doc(db, 'trataments', datos));
    };
    functionRemovalTratament(props);
};

import app from '../credentials';

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from 'firebase/storage';
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ValidationErrors } from '../../use/0-GeneralComp/0-Scripts/ValidationErrors';
import {
    getAuth,
    updateProfile,
    deleteUser,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
} from 'firebase/auth';

const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

/// Función para enviar un nuevo registro de un conejo a la base de datos

export const addImageAndInfo = async (props) => {
    try {
        let auxiliar = [];
        auxiliar = props.image.split(',');
        if (!props.origen) {
            props.origen = 'Ubaté';
        }
        if (props.levante) {
            props.lifecycle[1].date = props.levantefin;
            props.lifecycle[1].weigth = props.levante;
            delete props.levantefin;
            delete props.levante;
        }
        if (props.engorde) {
            props.lifecycle[2].date = props.engordefin;
            props.lifecycle[2].weigth = props.engorde;
            delete props.engordefin;
            delete props.engorde;
        }
        if (props.ceba) {
            props.lifecycle[3].date = props.cebafin;
            props.lifecycle[3].weigth = props.ceba;
            delete props.cebafin;
            delete props.ceba;
        }
        delete props.image;
        delete props.peso;
        const docRef = await addDoc(collection(db, 'rabbits'), props);
        const refStorage = ref(storage, docRef.id);
        await uploadString(refStorage, auxiliar[1], 'base64');
        const urlDescarga = await getDownloadURL(refStorage);
        await updateDoc(doc(db, 'rabbits', docRef.id), { uid: docRef.id, url: urlDescarga });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para editar la información basica de un conejo en la base de datos

export const EditImageAndInfo = async (props) => {
    try {
        if (props.image.includes(',')) {
            let auxiliar = [];
            const Ref = ref(storage, props.uid);
            await deleteObject(Ref);
            auxiliar = props.image.split(',');
            await uploadString(Ref, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(Ref);
            props.url = urlDescarga;
            delete props.image;
        }
        delete props.image;
        await updateDoc(doc(db, 'rabbits', props.uid), props);
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para editar el ciclo de vida de un conejo en la base de datos

export const EditInfoRabbit = async (props) => {
    try {
        await updateDoc(doc(db, 'rabbits', props.uid), props);
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para editar la información en la base de datos

export const UpdateInformation = async ({ coleccion, uid, data }) => {
    try {
        await updateDoc(doc(db, coleccion, uid), data);
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para registrar un nuevo tratamiento en la base de datos

export const AddTratament = async (props) => {
    try {
        const docRef = await addDoc(collection(db, 'trataments'), props);
        await updateDoc(doc(db, 'trataments', docRef.id), {
            uid: docRef.id,
            state: 'Activo',
            removalDate: null,
            uidAudit: null,
        });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para cambiar el estado de un tratamiento en la base de datos

export const AddAudit = async (props) => {
    try {
        const docRef = await addDoc(collection(db, 'audit'), props);
        await updateDoc(doc(db, 'audit', docRef.id), { uid: docRef.id });
        await updateDoc(doc(db, 'trataments', props.uidTratament), {
            state: 'Inactivo',
            removalDate: Date.now(),
            uidAudit: docRef.id,
        });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para borrar un tratamiento y su documento auditor en la base de datos

export const RemovalTratament = async (props) => {
    try {
        await deleteDoc(doc(db, 'trataments', props.uid));
        await deleteDoc(doc(db, 'audit', props.uidAudit));
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para reactivar un registro en la base de datos

export const ReactivateTratament = async ({ coleccion, uidAudit, uid, data }) => {
    try {
        await deleteDoc(doc(db, 'audit', uidAudit));
        await updateDoc(doc(db, coleccion, uid), data);
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para añadir un nuevo ciclo reproductivo a la base de datos

export const AddReproductiveCycle = async (props) => {
    try {
        const docRef = await addDoc(collection(db, 'reproductive'), props);
        await updateDoc(doc(db, 'reproductive', docRef.id), { uid: docRef.id });
        if (props.stages[4].state === true) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
        } else {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: true });
        }
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para actualizar un ciclo reproductivo a la base de datos

export const UpdateReproductiveCycle = async (props) => {
    try {
        await updateDoc(doc(db, 'reproductive', props.uid), props);
        if (props.stages[4].state === true) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
        } else {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: true });
        }
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para editar la información e imagen de un usuario

export const EditImageAndInfoUser = async (props) => {
    let photo =
        'https://firebasestorage.googleapis.com/v0/b/konnely-67d6a.appspot.com/o/ImagenDeUsuario.png?alt=media&token=e4b0499b-1ff2-42b3-93f9-e95d11533536';
    try {
        let auxiliar = [];
        if (props.image.includes(',') && props.photoAux === photo) {
            const Ref = ref(storage, props.uid);
            auxiliar = props.image.split(',');
            await uploadString(Ref, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(Ref);
            props.photo = urlDescarga;
            delete props.image;
        } else if (props.image.includes(',') && props.photoAux !== photo) {
            const Ref = ref(storage, props.uid);
            await deleteObject(Ref);
            auxiliar = props.image.split(',');
            await uploadString(Ref, auxiliar[1], 'base64');
            const urlDescarga = await getDownloadURL(Ref);
            props.photo = urlDescarga;
            delete props.image;
        }
        if (props.perfil === props.uid) {
            await updateProfile(auth.currentUser, {
                displayName: props.user,
                photoURL: props.photo,
            }).catch((error) => {
                ValidationErrors(error.code);
            });
        }
        delete props.perfil;
        delete props.image;
        delete props.photoAux;
        await updateDoc(doc(db, 'users', props.uid), props);
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para desactivar o activar un usuario en la base de datos

export const StateUser = async (props) => {
    try {
        await updateDoc(doc(db, 'users', props.user.uid), { state: props.state });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para borrar un tratamiento y su documento auditor en la base de datos

export const RemovalUser = async (props) => {
    try {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, props.contraseña);
        await reauthenticateWithCredential(props.user, credential).then(async () => {
            await updateDoc(doc(db, 'users', props.data.uid), { state: 'activo' });
            const docRef = await addDoc(collection(db, 'deleteUsers'), {
                code: props.data.code,
                name: props.data.names + ' ' + props.data.lastNames,
                user: props.data.user,
                phone: props.data.phone,
                email: props.data.email,
            });
            await updateDoc(doc(db, 'deleteUsers', docRef.id), { uid: docRef.id });
            await deleteDoc(doc(db, 'users', props.data.uid));
            await deleteUser(auth.currentUser);
        });
    } catch (error) {
        console.log(error.code);
        ValidationErrors(error.code);
    }
};

/// Función para borrar un tratamiento y su documento auditor en la base de datos

export const RemovalUserAdmin = async (props) => {
    try {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, props.contraseña);
        await reauthenticateWithCredential(props.user, credential).then(async () => {
            await updateDoc(doc(db, 'users', props.data.uid), { state: 'activo' });
            const docRef = await addDoc(collection(db, 'deleteUsers'), {
                code: props.data.code,
                name: props.data.names + ' ' + props.data.lastNames,
                user: props.data.user,
                phone: props.data.phone,
                email: props.data.email,
            });
            await updateDoc(doc(db, 'deleteUsers', docRef.id), { uid: docRef.id });
            await deleteDoc(doc(db, 'users', props.data.uid));
            await deleteUser(auth.currentUser);
        });
    } catch (error) {
        window.location.reload(true);
    }
};

/// Función para cambiar la contraseña de un usuario en la base de datos

export const ChangePassword = async (props) => {
    try {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, props.oldpassword);
        await reauthenticateWithCredential(auth.currentUser, credential).then(async () => {
            await updatePassword(auth.currentUser, props.newpassword);
        });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

/// Función para borrar una camada de la base de datos

export const RemovalCamada = async (props) => {
    try {
        await deleteDoc(doc(db, 'reproductive', props.uid));
        await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
    } catch (error) {
        ValidationErrors(error.code);
    }
};

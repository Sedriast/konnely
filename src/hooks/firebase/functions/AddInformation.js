import app from '../credentials';

import { getStorage, ref, getDownloadURL, uploadString, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { errorAlert } from '../../useContexts';
import {
    getAuth,
    deleteUser,
    updateProfile,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from 'firebase/auth';

const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

/// Function to send a new record of a rabbit to the database

export async function addRabbits(doc) {
    try {
        await addDoc(collection(db, 'bunnies'), doc);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Function to edit a record of a rabbit to the database
export async function editRabbits(doc) {
    try {
        await updateDoc(doc(db, 'bunnies',), doc);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para editar el ciclo de vida de un conejo en la base de datos

export const EditInfoRabbit = async (props) => {
    try {
        await updateDoc(doc(db, 'rabbits', props.uid), props);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para editar la información en la base de datos

export const UpdateInformation = async ({ coleccion, uid, data }) => {
    try {
        await updateDoc(doc(db, coleccion, uid), data);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para registrar un nuevo tratamiento en la base de datos

export const addRegisters = async ({ coleccion, props, conejos }) => {
    try {
        if (coleccion === 'sales') {
            conejos.map(async (rabbit) => {
                await updateDoc(doc(db, 'rabbits', rabbit.uid), {
                    estado: 'Inactivo',
                    InactiveDate: Date.now(),
                    ReactiveDate: null,
                });
            });
        }
        await addDoc(collection(db, coleccion), props).then(async (docRef) => {
            await updateDoc(doc(db, coleccion, docRef.id), {
                uid: docRef.id,
                state: 'Activo',
                removalDate: null,
                uidAudit: null,
            });
        });
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para cambiar el estado de un tratamiento en la base de datos

export const AddAudit = async ({ coleccion, props }) => {
    try {
        const docRef = await addDoc(collection(db, 'audit'), props).then(async (docRef) => {
            await updateDoc(doc(db, 'audit', docRef.id), { uid: docRef.id });
        });
        await updateDoc(doc(db, coleccion, props.uidTratament), {
            state: 'Inactivo',
            removalDate: Date.now(),
            uidAudit: docRef.id,
        });
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para borrar un tratamiento y su documento auditor en la base de datos

export const RemovalTratament = async (props) => {
    try {
        await deleteDoc(doc(db, 'trataments', props.uid));
        await deleteDoc(doc(db, 'audit', props.uidAudit));
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para reactivar un registro en la base de datos

export const ReactivateRegistration = async ({ coleccion, uidAudit, uid, data }) => {
    try {
        await deleteDoc(doc(db, 'audit', uidAudit));
        await updateDoc(doc(db, coleccion, uid), data);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para añadir un nuevo ciclo reproductivo a la base de datos

export const AddReproductiveCycle = async ({ props, reproductivecycle }) => {
    try {
        if (props.stages[4].state) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
        } else if (!props.stages[4].state && !reproductivecycle) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: true });
        }
        await addDoc(collection(db, 'reproductive'), props).then(async (docRef) => {
            await updateDoc(doc(db, 'reproductive', docRef.id), { uid: docRef.id });
        });
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para actualizar un ciclo reproductivo a la base de datos

export const UpdateReproductiveCycle = async ({ props, reproductivecycle }) => {
    try {
        if (props.stages[4].state) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
        } else if (!props.stages[4].state && !reproductivecycle) {
            await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: true });
        }
        await updateDoc(doc(db, 'reproductive', props.uid), props);
    } catch (error) {
        errorAlert(error.code);
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
            await uploadString(Ref, auxiliar[1], 'base64')
                .then(async () => {
                    const urlDescarga = await getDownloadURL(Ref);
                    props.photo = urlDescarga;
                    delete props.image;
                })
                .catch((error) => {
                    errorAlert(error.code);
                });
        } else if (props.image.includes(',') && props.photoAux !== photo) {
            const Ref = ref(storage, props.uid);
            auxiliar = props.image.split(',');
            await deleteObject(Ref)
                .then(async () => {
                    await uploadString(Ref, auxiliar[1], 'base64');
                    const urlDescarga = await getDownloadURL(Ref);
                    props.photo = urlDescarga;
                    delete props.image;
                })
                .catch((error) => {
                    errorAlert(error.code);
                });
        }
        if (props.perfil === props.uid) {
            await updateProfile(auth.currentUser, {
                displayName: props.user,
                photoURL: props.photo,
            }).catch((error) => {
                errorAlert(error.code);
            });
        }
        delete props.perfil;
        delete props.image;
        delete props.photoAux;
        await updateDoc(doc(db, 'users', props.uid), props);
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para desactivar o activar un usuario en la base de datos

export const StateUser = async (props) => {
    try {
        await updateDoc(doc(db, 'users', props.user.uid), { state: props.state });
    } catch (error) {
        errorAlert(error.code);
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
        errorAlert(error.code);
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
        errorAlert(error.code);
    }
};

/// Función para borrar una camada de la base de datos

export const RemovalCamada = async (props) => {
    try {
        await deleteDoc(doc(db, 'reproductive', props.uid));
        await updateDoc(doc(db, 'rabbits', props.uidMother), { reproductivecycle: false });
    } catch (error) {
        errorAlert(error.code);
    }
};
/// Función para registrar un nueva extracción en la base de datos

export const AddExtraction = async (props) => {
    try {
        await addDoc(collection(db, 'extraction'), props).then(async (docRef) => {
            await updateDoc(doc(db, 'extraction', docRef.id), {
                uid: docRef.id,
                state: 'Activo',
                removalDate: null,
                uidAudit: null,
            });
        });
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para borrar una extracción y su documento auditor en la base de datos

export const RemovalExtraction = async (props) => {
    try {
        await deleteDoc(doc(db, 'extraction', props.uid));
        await deleteDoc(doc(db, 'audit', props.uidAudit));
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para registrar un nuevo tratamiento en la base de datos

export const AddSales = async (props) => {
    try {
        await addDoc(collection(db, 'trataments'), props).then(async (docRef) => {
            await updateDoc(doc(db, 'trataments', docRef.id), {
                uid: docRef.id,
                state: 'Activo',
                removalDate: null,
                uidAudit: null,
            });
        });
    } catch (error) {
        errorAlert(error.code);
    }
};

/// Función para cambiar el estado de un conejo en la base de datos

export const StateRabbit = async ({ coleccion, props, estado }) => {
    try {
        if (estado === 'Inactivo') {
            await updateDoc(doc(db, coleccion, props.uid), {
                estado: estado,
                InactiveDate: Date.now(),
                ReactiveDate: null,
            });
        } else {
            await updateDoc(doc(db, coleccion, props.uid), {
                estado: estado,
                InactiveDate: null,
                ReactiveDate: Date.now(),
            });
        }
    } catch (error) {
        errorAlert(error.code);
    }
};
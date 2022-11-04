import swal from 'sweetalert';
import app from '../components/firebase/credentials';
import { createContext, useContext, useEffect, useState } from 'react';
import { AddInfoProfile } from '../components/firebase/funtions/AddInformation';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    getAuth,
    updateProfile,
    sendEmailVerification,
} from 'firebase/auth';

export const auth = getAuth(app);
const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is no Auth provider');
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const tema = 0;
    const imagenPerfil =
        'https://firebasestorage.googleapis.com/v0/b/konnely-67d6a.appspot.com/o/ImagenDeUsuario.png?alt=media&token=e4b0499b-1ff2-42b3-93f9-e95d11533536';

    const logout = () => signOut(auth);
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
    const verificarEmail = async (usuario) => sendEmailVerification(usuario);
    const signup = async (email, idIns, userName, name, lastName, noTel, password) => {
        await createUserWithEmailAndPassword(auth, email, password).then(() => {
            verificarEmail(auth.currentUser);
        });
        AddInfoProfile({
            user: auth.currentUser.uid,
            data: {
                uid: auth.currentUser.uid,
                names: name,
                lastNames: lastName,
                code: idIns,
                phone: noTel,
                user: userName,
                email: auth.currentUser.email,
                rol: 'usuario',
                theme: tema,
                photo: imagenPerfil,
            },
        });
        updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: imagenPerfil,
        }).catch((error) => {
            notification_err(error, 'error', 'aceptar');
        });

        if (!auth.currentUser.emailVerified) {
            await logout();
        }
    };

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then(async () => {
            if (!auth.currentUser.emailVerified) {
                await logout();
            }
        });
    };
    const notification_err = (titulo, icono, boton) => {
        swal({
            title: titulo,
            icon: icono,
            button: boton,
        });
    };

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);

    return (
        <>
            <authContext.Provider
                value={{
                    signup,
                    login,
                    user,
                    loading,
                    logout,
                    resetPassword,
                    notification_err,
                }}>
                {children}
            </authContext.Provider>
        </>
    );
}

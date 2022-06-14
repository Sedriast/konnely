import app from "../components/firebase/credentials";
import swal from "sweetalert";
import { AddInfoProfile } from "../components/firebase/funtions/AddInformation";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    getAuth,
    updateProfile,
    sendEmailVerification,
    RecaptchaVerifier,
} from "firebase/auth";
const authContext = createContext();
export const auth = getAuth(app);
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const tema =
        "url(https://drive.google.com/uc?export=download&id=1bqq3el_cZUMSzOvs9OyBW5UakjNES9Iv)";

    const logout = () => signOut(auth);
    const resetPassword = async (email) => await sendPasswordResetEmail(auth, email);
    const verificarEmail = async (usuario) => await sendEmailVerification(usuario);
    auth.useDeviceLanguage();

    const createRecaptcha = (id) => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            id,
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // ...
                },
                "expired-callback": () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                },
            },
            auth
        );
    };
    const signup = async (userName, email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, {
            displayName: userName,
        }).catch((error) => {
            swal({
                title: error,
                icon: "error",
                button: "aceptar",
            });
        });
        AddInfoProfile({
            user: auth.currentUser.uid,
            data: {
                uid: auth.currentUser.uid,
                usuario: userName,
                email: auth.currentUser.email,
                rol: "usuario",
                tema: tema,
            },
        });
        verificarEmail(auth.currentUser);
    };
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then(async () => {
            if (!auth.currentUser.emailVerified) {
                swal({
                    title: "Debes verificar tu cuenta primero",
                    icon: "error",
                    button: "aceptar",
                });
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
        <authContext.Provider
            value={{
                signup,
                login,
                user,
                loading,
                logout,
                resetPassword,
                notification_err,
                createRecaptcha,
            }}>
            {children}
        </authContext.Provider>
    );
}

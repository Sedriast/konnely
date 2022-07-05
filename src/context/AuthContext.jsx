import swal from "sweetalert";
import app from "../components/firebase/credentials";
import { createContext, useContext, useEffect, useState } from "react";
import { AddInfoProfile } from "../components/firebase/funtions/AddInformation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    getAuth,
    updateProfile,
    sendEmailVerification,
} from "firebase/auth";

export const auth = getAuth(app);
const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const tema = 3;
    const imagenPerfil =
        "https://firebasestorage.googleapis.com/v0/b/konnely-67d6a.appspot.com/o/ImagenDeUsuario.png?alt=media&token=e4b0499b-1ff2-42b3-93f9-e95d11533536";

    const logout = () => signOut(auth);
    const resetPassword = async (email) => await sendPasswordResetEmail(auth, email);
    const verificarEmail = async (usuario) => await sendEmailVerification(usuario);

    auth.useDeviceLanguage();
    // auth.settings.appVerificationDisabledForTesting = true;
    // var phoneNumber = "+573202063426";
    // var testVerificationCode = "888888";

    // const createRecaptcha = (id) => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //         id,
    //         {
    //             size: "invisible",
    //         },
    //         auth
    //     );
    // };
    const signup = async (verification, userName, email, password) => {
        if (verification === "correo") {
            await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, {
                displayName: userName,
                photoURL: imagenPerfil,
            }).catch((error) => {
                notification_err(error, "error", "aceptar");
            });
            AddInfoProfile({
                user: auth.currentUser.uid,
                data: {
                    uid: auth.currentUser.uid,
                    usuario: userName,
                    email: auth.currentUser.email,
                    rol: "usuario",
                    tema: tema,
                    foto: imagenPerfil,
                },
            });
            verificarEmail(auth.currentUser);
        }
        // else if (verification === "telefono") {
        //     let longitud = telefono.length;
        //     console.log(telefono);
        //     if ((longitud = 13)) {
        //         createRecaptcha(verification);
        //         const appVerifier = window.recaptchaVerifier;
        //         await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        //             .then((confirmationResult) => {
        //                 window.confirmationResult = confirmationResult;
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //             });
        //     }
        // }
    };
    // const verifyOtp = (code, userName, userEmail) => {
    //     let longitud = code.length;
    //     if (longitud === 6) {
    //         let confirmationResult = window.confirmationResult;
    //         confirmationResult
    //             .confirm(testVerificationCode)
    //             .then((result) => {
    //                 const user = result.user;
    //                 updateProfile(user, {
    //                     displayName: userName,
    //                 })
    //                     .then(() => {
    //                         updateEmail(user, userEmail);
    //                     })
    //                     .catch((error) => {
    //                         notification_err(error, "error", "aceptar");
    //                     });
    //             })
    //             .catch((error) => {
    //                 // User couldn't sign in (bad verification code?)
    //                 // ...
    //                 console.log(error);
    //             });
    //     }
    // };
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
                    // verifyOtp,
                }}>
                {children}
            </authContext.Provider>
        </>
    );
}

import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	sendPasswordResetEmail,
	getAuth,
	updateProfile,
} from "firebase/auth";
import app from "../components/firebase/credentials";
import swal from "sweetalert";
export const auth = getAuth(app);

const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error("There is no Auth provider");
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const signup = (userName, email, password) => {
		return createUserWithEmailAndPassword(auth, email, password).then(
			() => {
				updateProfile(auth.currentUser, {
					displayName: userName,
				}).catch((error) => {
					swal({
						title: error,
						icon: "error",
						button: "aceptar",
					});
				});
				console.log(auth.currentUser);
			}
		);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const notification_err = (titulo, icono, boton) => {
		swal({
			title: titulo,
			icon: icono,
			button: boton,
		});
	};

	const logout = () => signOut(auth);

	const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

	useEffect(() => {
		const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log({ currentUser });
			setUser(currentUser);
		});
		return () => unsubuscribe();
	}, []);

	return (
		<authContext.Provider
			value={{
				signup,
				login,
				user,
				logout,
				resetPassword,
				notification_err,
			}}
		>
			{children}
		</authContext.Provider>
	);
}

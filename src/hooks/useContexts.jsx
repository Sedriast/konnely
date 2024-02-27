import Swal from "sweetalert2";
import { reducer } from "./reducer";
import app from "../hooks/firebase/credentials";
import { es as language } from "../constants/i18n";
import { createContext, useReducer, useEffect, useContext } from "react";
import {
	getAuth,
	signOut,
	updateProfile,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	fetchSignInMethodsForEmail,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { reducer_keys, language_keys } from "../constants/keys";
import { GetAllCollection } from "./firebase/functions/GetInformation";

const picture_ =
	"https://firebasestorage.googleapis.com/v0/b/konnely-67d6a.appspot.com/o/ImagenDeUsuario.png?alt=media&token=e4b0499b-1ff2-42b3-93f9-e95d11533536";
const db = getFirestore(app);
export const auth = getAuth(app);
/********************************************************
 *
 *
 * 				         NOTIFICATIONS
 *
 *
 *
 *
 ********************************************************/

export function errorAlert(error) {
	const response =
		language[language_keys.ERRORS][error] ||
		language[language_keys.ERRORS]["default"];
	Swal.fire({ text: response, icon: "error" });
}

/********************************************************
 *
 *
 * 				         AUTH CONTEXT
 *
 *
 *
 *
 ********************************************************/
const AuthContext = createContext();

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("There is no Auth provider");
	return context;
};

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		email: "",
		theme: 0,
		user: null,
		loading: true,
		picture: picture_,
	});

	const setUser = (currentUser) => {
		dispatch({ type: reducer_keys.setUser, payload: currentUser });
	};

	const setEmail = (newEmail) => {
		dispatch({ type: reducer_keys.newEmail, payload: newEmail });
	};

	async function register(target) {
		const values = {
			user: target[0].value,
			name: target[2].value,
			lastName: target[3].value,
			password: target[5].value,
			institutionalId: target[1].value,
			cellphoneNumber: target[4].value,
			email: `${target[0].value}@ucundinamarca.edu.co`,
		};
		if (target[5].value === target[6].value) {
			try {
				await signup(values);
			} catch (error) {
				errorAlert(error.code);
			}
		} else {
			errorAlert("register-password-mismatch");
		}
	}

	async function signup({
		name,
		user,
		email,
		lastName,
		password,
		idInstitutional,
		cellphoneNumber,
	}) {
		await createUserWithEmailAndPassword(auth, email, password).then(
			async () => {
				await sendEmailVerification(auth.currentUser).catch((error) => {
					alert(error);
				});
				await setDoc(doc(db, "users", auth.currentUser.uid), {
					rol: "user",
					names: name,
					user: user,
					state: "active",
					theme: state.theme,
					lastNames: lastName,
					photo: state.picture,
					code: idInstitutional,
					phone: cellphoneNumber,
					uid: auth.currentUser.uid,
					email: auth.currentUser.email,
				}).catch((error) => {
					alert(error);
				});
			}
		);
		updateProfile(auth.currentUser, {
			displayName: user,
			photoURL: state.picture,
		}).catch((error) => {
			alert(error);
		});
		if (!auth.currentUser.emailVerified) {
			await logout();
		}
	}

	async function login(email, password) {
		let nav = false;
		try {
			await signInWithEmailAndPassword(auth, email, password).then(async () => {
				if (!auth.currentUser.emailVerified) {
					await logout();
				}
				nav = true;
			});
			return nav;
		} catch (error) {
			errorAlert(error.code);
			return false;
		}
	}

	async function isEmailRegistered(email) {
		try {
			const signInMethods = await fetchSignInMethodsForEmail(auth, email);
			return signInMethods.length > 0;
		} catch (error) {
			errorAlert(error.code);
			return false;
		}
	}

	function forgotPassword(email) {
		const { FORGOT_message, FORGOT_ok, FORGOT_cancel, FORGOT_confirm } =
			language[language_keys.ACCOUNT].LOGIN;
		if (email !== null || email !== "") {
			if (email.includes("@")) {
				Swal.fire({
					icon: "warning",
					showCancelButton: true,
					cancelButtonText: FORGOT_cancel,
					confirmButtonText: FORGOT_confirm,
					text: `${FORGOT_message} ${email}`,
				}).then(async ({ value }) => {
					try {
						value &&
							sendPasswordResetEmail(auth, email).then(() => {
								Swal.fire({ text: FORGOT_ok, icon: "success" });
							});
					} catch (error) {
						errorAlert(error.code);
					}
				});
			} else {
				errorAlert("auth/invalid-email");
			}
		}
	}

	function logout() {
		signOut(auth);
	}

	useEffect(() => {
		const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubuscribe();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				login,
				register,
				language,
				setEmail,
				forgotPassword,
				user: state.user,
				isEmailRegistered,
				email: state.email,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export { useAuth, AuthProvider };

/********************************************************
 *
 *
 *
 * 				       RABBIT LIST CONTEXT
 *
 *
 *
 *
 ********************************************************/

// camadaID: {
// 	id: "000000000",
// 	mom_id: "0000",
// 	dad_id: "0000",
// 	startDate: "00-00-00",
// 	finishDate: "00-00-00",
// 	averangeWeigthOnWeaning: "000",
//	type: "Monta Natural", // Monta Natural, Inseminación Artificial
// },

const rabbitDataSkeleton = {
	id: "000000000",
	litter: "false",
	isFemale: true,
	origin: "Ubaté",
	status: { changeDate: "00-00-00", active: false },
	userSignature: { name: "admin", uid: "000000000" },
	pictureURL:
		"https//:www.**********************************************************.com",
	lifecycle: {
		birth: {
			litter: "000",
			name: "Nacimiento",
			race: [
				{ name: "Californiano", percentage: "50" },
				{ name: "Azul de viena", percentage: "50" },
			],
		},
		weaning: {
			weight: "000",
			finish: false,
			name: "Destete",
			date: "00-00-00",
		},
		fattening: {
			weight: "000",
			finish: false,
			name: "Engorde",
			date: "00-00-00",
		},
	},
};

const RabbitListContext = createContext();

const useRabbits = () => {
	const context = useContext(RabbitListContext);
	if (!context) throw new Error("There is no rabbit data provider");
	return context;
};

function RabbitListProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		litters: [],
		rabbitsList: [],
		rabbit: rabbitDataSkeleton,
	});
	const setRabbit = (rabbitData) => {
		dispatch({ type: reducer_keys.setRabbit, payload: rabbitData });
	};
	const setRabbitsList = (newRabbitsList) => {
		dispatch({ type: reducer_keys.setRabbitsList, payload: newRabbitsList });
	};
	const setLitters = (newLitter) => {
		dispatch({ type: reducer_keys.setLitters, payload: newLitter });
	};

	async function refreshData() {
		setRabbitsList(await GetAllCollection("bunnies"));
		setLitters(await GetAllCollection("litters"));
	}

	function searchRabbits(id_) {
		setRabbitsList(state.rabbitsList.find((rabbit_) => rabbit_.id === id_));
	}

	function filterRabbits(filter_) {
		switch (filter_) {
			case "inactive":
				setRabbitsList(
					state.rabbitsList.filter((rabbit_) => rabbit_.status.state === false)
				);
				break;
			case "female":
				setRabbitsList(
					state.rabbitsList.filter((rabbit_) => rabbit_.isFemale === true)
				);
				break;
			case "male":
				setRabbitsList(
					state.rabbitsList.filter((rabbit_) => rabbit_.isFemale === false)
				);
				break;
			default:
				refreshData();
				break;
		}
	}
	useEffect(() => {
		refreshData();
	});
	return (
		<RabbitListContext.Provider
			value={{
				setRabbit,
				refreshData,
				filterRabbits,
				searchRabbits,
				rabbit: state.rabbit,
				litters: state.litters,
				rabbitsList: state.rabbitsList,
			}}>
			{children}
		</RabbitListContext.Provider>
	);
}

export { useRabbits, RabbitListProvider };

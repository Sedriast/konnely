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
import { reducer_keys, language_keys, filters_keys } from "../constants/keys";
import { getAllCollection } from "./firebase/functions/GetInformation";

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

export function yesNotAlert(MSG, FN) {
	Swal.fire({
		text: MSG,
		icon: "question",
		showCancelButton: true,
		confirmButtonText: "Sí",
		cancelButtonText: "No",
	}).then((tr) => FN(tr));
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
		theme: 0,
		email: "",
		user_: null,
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
				user: state.user_,
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
const firebaseTimestamp = {
	toDate: function () {
		return new Date();
	},
};

const litterDataSkeleton = {
	id: 0,
	stages: {
		ride: {
			male: -2,
			female: -1,
			isNatural: true,
			date_r: firebaseTimestamp,
		},
		palpation: {
			date_pal: firebaseTimestamp,
		},
		partum: { alive: 5, dead: 2, homogenized: 1, date_par: firebaseTimestamp },
		prepartum: {
			date_pr: firebaseTimestamp,
		},
		weaning: {
			date_w: firebaseTimestamp,
			females: 1,
			males: 1,
			averageWeight: 100,
		},
		sales: [],
	},
	userSignature: { name: "admin", uid: "0000ds0faa0df0a0dfa" },
};

const rabbitDataSkeleton = {
	id: 1,
	isFemale: true,
	pictureURL:
		"https//:www.**********************************************************.com",
	userSignature: { name: "admin", uid: "000000000" },
	states: {
		transferred: {
			mom_id: 0,
			dad_id: 0,
			status: false,
			origin: "Ubaté",
			date: firebaseTimestamp,
		},
		changeDate: firebaseTimestamp,
		isAlive: true,
	},
	lifecycle: {
		birth: {
			litter: 0,
			race: [
				{ name: "Californiano", value: 20 },
				{ name: "Azul de viena", value: 80 },
			],
		},
		weaning: {
			weight: 500,
			date: firebaseTimestamp,
		},
		currentWeight: 100,
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
		filter: ["female", ""],
		litter: litterDataSkeleton,
		rabbit: rabbitDataSkeleton,
		rabbits: [rabbitDataSkeleton, rabbitDataSkeleton],
		litters: [litterDataSkeleton, litterDataSkeleton],
		littersList: [litterDataSkeleton, litterDataSkeleton],
		rabbitsList: [rabbitDataSkeleton, rabbitDataSkeleton, rabbitDataSkeleton],
	});

	const setRabbit = (rabbitData) => {
		dispatch({ type: reducer_keys.setRabbit, payload: rabbitData });
	};

	const setLitter = (litter) => {
		dispatch({ type: reducer_keys.setLitter, payload: litter });
	};

	const setRabbits = (rabbits) => {
		dispatch({ type: reducer_keys.setRabbits, payload: rabbits });
	};

	const setLitters = (litters) => {
		dispatch({ type: reducer_keys.setLitters, payload: litters });
	};

	const setRabbitsList = (newRabbitsList) => {
		dispatch({ type: reducer_keys.setRabbitsList, payload: newRabbitsList });
	};

	const setLitterList = (newLitterList) => {
		dispatch({ type: reducer_keys.setLitterList, payload: newLitterList });
	};

	const setFilter = (newFilter) => {
		dispatch({ type: reducer_keys.setFilter, payload: newFilter });
	};

	const filterBy = (property, value) => (rabbit__) =>
		rabbit__[property] === value && rabbit__.states.isAlive;

	function filterRabbits(filter_) {
		let filteredList;
		switch (filter_[0]) {
			case filters_keys.INACTIVE:
				filteredList = state.rabbits.filter(
					(rabbit__) => !rabbit__.states.isAlive
				);
				break;
			case filters_keys.FEMALE:
				filteredList = state.rabbits.filter(filterBy("isFemale", true));
				break;
			case filters_keys.MALE:
				filteredList = state.rabbits.filter(filterBy("isFemale", false));
				break;
			case filters_keys.SEARCH:
				filteredList = state.rabbits.filter(
					(rabbit_) => rabbit_.id === filter_[1]
				);
				break;
			case filters_keys.UPLOAD_RABBIT:
				setRabbits([...state.rabbits, filter_[1]]);
				filteredList = state.rabbits;
				break;
			case filters_keys.UPLOAD_LITTER:
				setLitters([...state.litters, filter_[1]]);
				filteredList = state.litters;
				break;
			default:
				filteredList = state.rabbits;
				break;
		}
		setRabbitsList(filteredList);
	}

	function fetchData(case_) {
		switch (case_) {
			case "rabbits":
				getAllCollection("bunnies").then((res) => setRabbits(res));
				break;
			case "litters":
				getAllCollection("litters").then((res) => setLitters(res));
				break;
			default:
				break;
		}
	}

	function litterRecord() {
		setLitterList(
			state.litters.filter((lit) => lit.stages.ride.female === state.rabbit.id)
		);
	}

	// //this useEffet is used to fetch the data from the database when the app is mounted
	// useEffect(() => {
	// 	fetchData("rabbits");
	// 	fetchData("litters");
	// });

	//	this useEffect is used to filter rabbit's litters when the rabbit is changed
	useEffect(() => {
		litterRecord();
		// eslint-disable-next-line
	}, [state.rabbit]);

	// this useEffect is used to filter the rabbits when the filter is changed and update rabbitsList when the fetched data is finished
	useEffect(() => {
		filterRabbits(state.filter);
		// eslint-disable-next-line
	}, [state.filter, state.rabbits]);

	return (
		<RabbitListContext.Provider
			value={{
				setRabbit,
				setLitter,
				setFilter,
				litter: state.litter,
				rabbit: state.rabbit,
				litters_: state.littersList,
				rabbits_: state.rabbitsList,
			}}>
			{children}
		</RabbitListContext.Provider>
	);
}

export { useRabbits, RabbitListProvider };

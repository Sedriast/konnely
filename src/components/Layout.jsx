import st from "./Layout.module.css";
import app from "../components/firebase/credentials";

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

import { useAuth } from "../context/AuthContext";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import { themesData } from "./use/0-GeneralComp/0-StaticData/customThemeData";

import { User } from "./use/A_User/User";
import { NewTrat } from "./use/F-Forms/NewTrats/NewTrat";
import { DataView } from "./use/C_DataView/DataView";
import { ViewIsList } from "./use/B_VitaeIsList/VitaeIsList";
import { EditUserData } from "./use/F-Forms/EditUserData/EditUserData";
import { LoginRegister } from "./use/A_LoginRegister/LoginRegister";
import { EditRabbitData } from "./use/F-Forms/EditRabbitData/EditRabbitData";
import { ReproView } from "./use/C_ReproView/ReproView";
import { EditLife } from "./use/F-Forms/EditLifedata/EditLife";
import { EditRepro } from "./use/F-Forms/EditReproData/EditRepro";
import { EditTrats } from "./use/F-Forms/EditTrats/EditTrats";
import { RemovalTratament, RemovalUserAdmin } from "./firebase/funtions/AddInformation";
import { DashBoard } from "./use/B_DashBoard/DashBoard";
import { Record } from "./use/B_Record/Record";
import { NewRepro } from "./use/F-Forms/NewReproData/NewRepro";
import { getAuth, updateProfile } from "firebase/auth";

import swal from "sweetalert";
import { PrintView1 } from "./use/B_VitaeIsList/components/PrintView1/PrintView1";
import { PrintView2 } from "./use/B_VitaeIsList/components/PrintView2/PrintView2";
import { NewHistory } from "./use/F-Forms/NewHistory/NewHistory";
import { NewSemen } from "./use/F-Forms/NewSemen/NewSemen";
import { EditExtraction } from "./use/F-Forms/EditExtraction/EditExtraction";
import { Loading } from "./use/0-GeneralComp/1-Loading/Loading";

const db = getFirestore(app);
export const auth = getAuth(app);

export function Layout() {
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			let u = { theme: 0 };
			async function getData() {
				const query_ = query(collection(db, "users"), where("uid", "==", user.uid));
				const querySnapshot = await getDocs(query_);
				querySnapshot.forEach((doc) => {
					u = doc.data();
				});
				document
					.getElementById("lay")
					.style.setProperty("background-image", `url(${themesData[u.theme].theme})`);
				document.getElementById("lay").style.setProperty("background-repeat", "no-repeat");
				document.getElementById("lay").style.setProperty("background-size", "cover");
			}
			async function getTrataments() {
				const trataments = await getDocs(collection(db, "trataments"));
				trataments.forEach((doc) => {
					if (
						doc.data().state === "Inactivo" &&
						Date.now() - Date.parse(doc.data().removalDate) > 5259600000
					) {
						RemovalTratament({
							uid: doc.data().uid,
							uidAudit: doc.data().uidAudit,
						});
					}
				});
			}
			async function profileUpdate() {
				const docRef = doc(db, "users", user.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					await updateProfile(auth.currentUser, {
						photoURL: docSnap.data().photo,
					}).catch((error) => {
						console.log(error);
					});
				}
			}
			async function profileDelete() {
				const docRef = doc(db, "users", user.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists() && docSnap.data().state === "Inactivo") {
					swal(
						"El administrador a desactivado su cuenta, ingrese su contraseña para verificar su estado",
						{
							closeOnEsc: false,
							closeOnClickOutside: false,
							dangerMode: true,
							content: {
								element: "input",
								attributes: {
									placeholder: "Contraseña",
									type: "password",
								},
							},
							button: {
								text: "Aceptar",
								closeModal: false,
							},
						}
					).then((value) => {
						RemovalUserAdmin({
							data: docSnap.data(),
							contraseña: value,
							user: user,
						});
					});
				}
			}
			getData();
			getTrataments();
			profileUpdate();
			profileDelete();
		}
	}, [user]);

	return (
		<>
			<div className={st.container} id='lay'>
				<Router>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<div className={st.initContainer}>
									<LoginRegister />
								</div>
							}
						/>
						<Route
							exact
							path='/users'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<User />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/vitaeslist'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<ViewIsList />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/vitae'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<DataView />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/user'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditUserData />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/formEdit'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditRabbitData />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route exact path='/analitics' element={<ProtectedRoute></ProtectedRoute>} />
						<Route exact path='/record' element={<ProtectedRoute></ProtectedRoute>} />
						<Route
							exact
							path='/addTrat'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<NewTrat />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/litterList'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<ReproView />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/editLife'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditLife />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/formEditRepro'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditRepro />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/NewRepro'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<NewRepro />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/editTrats'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditTrats />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/dashboard'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<DashBoard />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/reco'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<Record />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/print1'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<PrintView1 />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/addSemen'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<NewSemen />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/editExtraction'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<EditExtraction />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/print2'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<PrintView2 />
									</div>
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path='/addHis'
							element={
								<ProtectedRoute>
									<div className={st.componentContainer}>
										<NewHistory />
									</div>
								</ProtectedRoute>
							}
						/>
					</Routes>
				</Router>
			</div>
		</>
	);
}

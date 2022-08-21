import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { useAuth } from '../context/AuthContext';
import { themesData } from './use/A_User/scripts/customThemeData';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { Decorations } from './use/0-GeneralComp/A-Deco/Decorations';

import { LoginRegister } from './use/A_LoginRegister/LoginRegister';
import { User } from './use/A_User/User';
import { ViewIsList } from './use/B_VitaeIsList/VitaeIsList';
// import { Form } from './use/Form/Form';
// import { Invoice } from './use/Invoice/Invoice';
import { Curriculum } from './use/Vitae/Curriculum';
import { PanelButtons } from './use/0-GeneralComp/0-PanelButtons/PanelButtons';

const db = getFirestore(app);

export function Layout() {
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			let u = {};
			const getData = async () => {
				const query_ = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
				const querySnapshot = await getDocs(query_);
				querySnapshot.forEach((doc) => {
					u = doc.data();
				});
				document
					.getElementById('lay')
					.style.setProperty('background-image', `url(${themesData[u.theme].theme})`);
				document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
				document.getElementById('lay').style.setProperty('background-size', 'cover');
			};
			getData();
		}
	}, [user]);

	return (
		<>
			<div className={st.container} id="lay">
				<Router>
					<Routes>
						<Route
							exact
							path="/"
							element={
								<div className={st.A_Login_Register}>
									<Decorations />
									<LoginRegister />
								</div>
							}
						/>
						<Route
							exact
							path="/users"
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
						<Route
							exact
							path="/vitaeslist"
							element={
								<>
									<ProtectedRoute>
										<div className={st.B_ViewIsList}>
											<ViewIsList />
											<PanelButtons />
										</div>
									</ProtectedRoute>
								</>
							}
						/>
						<Route
							exact
							path="/vitae"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<Curriculum />
									</ProtectedRoute>
								</>
							}
						/>
						{/* 
						<Route
							exact
							path="/home"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
									</ProtectedRoute>
								</>
							}
						/>

						<Route
							exact
							path="/invoice"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<Invoice
											clsName={st.invoice}
											name="sadfadf"
											nit="safasdfa"
											email="sadfads@asdfasdfaf.com"
											date="asdfasdf"
											userID="asdfassdfad"
										/>
									</ProtectedRoute>
								</>
							}
						/> */}
					</Routes>
				</Router>
			</div>
		</>
	);
}

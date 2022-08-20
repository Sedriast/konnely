import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { themesData } from './use/A_User/scripts/customThemeData';
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';

import { LoginRegister } from './use/A_LoginRegister/LoginRegister';
import { User } from './use/A_User/User';
import { List } from './use/List/List';
import { Form } from './use/Form/Form';
import { Invoice } from './use/Invoice/Invoice';
import { Curriculum } from './use/Vitae/Curriculum';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { Decorations } from './use/Tools/Deco/Decorations';

const db = getFirestore(app);

export function Layout() {
	const { user } = useAuth();

	useEffect(() => {
		let u = {
			uid: null,
			photo: null,
			displayName: null,
			email: null,
			rol: null,
			theme: 0,
		};

		if (user !== null) {
			const getData = async () => {
				const query_ = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
				const querySnapshot = await getDocs(query_);
				querySnapshot.forEach((doc) => {
					u = doc.data();
				});
			};
			getData();
		}
		document
			.getElementById('lay')
			.style.setProperty('background-image', `url(${themesData[u.theme].theme})`);
		document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
		document.getElementById('lay').style.setProperty('background-size', 'cover');
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
							path="/data"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<Curriculum />
									</ProtectedRoute>
								</>
							}
						/>
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
							path="/form"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<div className={st.form}>
											<Form />
										</div>
									</ProtectedRoute>
								</>
							}
						/>
						<Route
							exact
							path="/list"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<div className={st.list}>
											<List />
										</div>
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
						/>
					</Routes>
				</Router>
			</div>
		</>
	);
}

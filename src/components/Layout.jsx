import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { Init } from './use/Init/Init';
import { List } from './use/List/List';
import { Form } from './use/Form/Form';
import { useState, useEffect } from 'react';
import { DataC } from './use/Customer/DataC';
import { Invoice } from './use/Invoice/Invoice';
import { useAuth } from '../context/AuthContext';
import { Customer } from './use/Customer/Customer';
import { Users } from '../components/use/Users/Users';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Vitae } from './use/Vitae/Vitae';
import { Items } from './use/Vitae/com/Items';

const db = getFirestore(app);

export function Layout() {
	const { user } = useAuth();
	const [user_, setUser_] = useState({
		uid: null,
		rol: null,
		tema: null,
		foto: null,
		email: null,
		usuario: null,
	});

	function s() {
		if (user && user_.tema !== null) {
			document
				.getElementById('lay')
				.style.setProperty('background-image', `url(${DataC[user_.tema].miniature})`);
			document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
			document.getElementById('lay').style.setProperty('background-size', 'cover');
		}
	}

	useEffect(() => {
		const obtener = async () => {
			const q = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setUser_(doc.data());
			});
			// onSnapshot(q, (snapshot) =>
			//     snapshot.docs.map((doc) => setUser_({ ...doc.data() }))
			// );
		};
		if (user) {
			obtener();
		}
	}, [user]);

	return (
		<>
			<div className={st.container} id="lay" onLoad={s()}>
				<Router>
					<Routes>
						<Route
							exact
							path="/data"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<Items />
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
							path="/"
							element={
								<div className={st.initPanel}>
									<Init />
								</div>
							}
						/>
						<Route
							exact
							path="/customer"
							element={
								<>
									<ProtectedRoute>
										<Customer clsName={st.customer} />
									</ProtectedRoute>
								</>
							}
						/>
						<Route
							exact
							path="/users"
							element={
								<>
									<ProtectedRoute>
										<Users
											clsName={st.users}
											src_={user_.foto}
											title={user_.usuario}
											label="Administrador"
										/>
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

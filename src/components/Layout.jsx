import st from './Layout.module.css';
import app from '../components/firebase/credentials';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Init } from './use/Init/Init';
import { List } from './use/List/List';
import { Form } from './use/Form/Form';
import { useState, useEffect } from 'react';
import { Invoice } from './use/Invoice/Invoice';
import { useAuth } from '../context/AuthContext';
import { Calendar } from './use/Calendar/Calendar';
import { Customer } from './use/Customer/Customer';
import { Users } from '../components/use/Users/Users';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function Layout() {
	const { user } = useAuth();
	const [user_, setUser_] = useState([
		{
			tema: '',
			usuario: '',
			email: '',
			rol: '',
			uid: '',
			foto: '',
		},
	]);

	useEffect(() => {
		if (user) {
			const q = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
			onSnapshot(q, (snapshot) => setUser_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
		}
	}, [user]);

	const s = (u) => {
		document.getElementById('lay').style.setProperty('background', 'url(' + u[0].tema + ')');
		document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
		document.getElementById('lay').style.setProperty('background-size', 'cover');
	};

	return (
		<>
			<div className={st.container} id="lay" onLoad={() => s(user_)}>
				<Router>
					<Routes>
						<Route
							exact
							path="/home"
							element={
								<>
									<ProtectedRoute>
										<PanelButtons />
										<Calendar />
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
											src_={user_[0].foto}
											title={user_[0].usuario}
											label="Adminitrador"
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

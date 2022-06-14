import app from '../components/firebase/credentials';
import st from './Layout.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import g from './img/view.png';
import { Users } from '../components/use/Users/Users';
import { Customer } from './use/Customer/Customer';
import { Form } from './use/Form/Form';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { List } from './use/List/List';
import { useState, useEffect } from 'react';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { Invoice } from './use/Invoice/Invoice';
import { useAuth } from '../context/AuthContext';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { Init } from './use/Init/Init';

const db = getFirestore(app);

export function Layout(props) {
	const { user } = useAuth();
	const [init, setInit] = useState(false);
	const [user_, setUser_] = useState([
		{
			tema: '',
			usuario: '',
			email: '',
			rol: '',
			uid: '',
		},
	]);

	useEffect(() => {
		if (user) {
			const q = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
			onSnapshot(q, (snapshot) => setUser_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
		}
	}, [user]);

	const s = () => {
		document.getElementById('lay').style.setProperty('background', user_[0].tema);
		document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
		document.getElementById('lay').style.setProperty('background-size', 'cover');
	};

	const changeLoad = () => {
		setInit(true);
		setTimeout(() => {
			setInit(false);
		}, 3000);
	};

	return (
		<>
			<div className={st.container} id="lay" onLoad={s}>
				<Router>
					<Routes>
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
											src_="https://drive.google.com/uc?export=download&id=1E7CWChneuESSmcVQ-CpZHTMQxLwbedyi"
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
									<PanelButtons />
									<div className={st.form}>
										<Form />
									</div>
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
									<PanelButtons />
									<Invoice
										clsName={st.invoice}
										name="sadfadf"
										nit="safasdfa"
										email="sadfads@asdfasdfaf.com"
										date="asdfasdf"
										userID="asdfassdfad"
									/>
								</>
							}
						/>
					</Routes>
				</Router>
			</div>
		</>
	);
}

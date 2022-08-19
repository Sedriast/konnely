import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { LoginRegister } from './use/A_LoginRegister/LoginRegister';
import { User } from './use/A_User/User';
import { List } from './use/List/List';
import { Form } from './use/Form/Form';
import { useState, useEffect } from 'react';
import { DataC } from './use/Customer/DataC';
import { Invoice } from './use/Invoice/Invoice';
import { useAuth } from '../context/AuthContext';
import { NewTrats } from './use/NewTrats/NewTrats';
import { Customer } from './use/Customer/Customer';
import { Curriculum } from './use/Vitae/Curriculum';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { FormCR } from './use/Tools/Cards/FormCR';
import { Decorations } from './use/Tools/Deco/Decorations';

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
								<>
									<ProtectedRoute>
										<User src_={user_.foto} title={user_.usuario} label={user_.rol} />
									</ProtectedRoute>
								</>
							}
						/>
						<Route
							exact
							path="/test"
							element={
								<>
									<ProtectedRoute>
										<FormCR />
									</ProtectedRoute>
								</>
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

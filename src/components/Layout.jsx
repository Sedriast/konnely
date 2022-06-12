import app from '../components/firebase/credentials';
import st from './Layout.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import g from './img/load.png';
import { Users } from '../components/use/Users/Users';
import { Navbar } from './use/Menu/Navbar';
import { Customer } from './use/Customer/Customer';
import { Form } from './use/Form/Form';
import { PanelButtons } from './use/PanelButons/PanelButtons';
import { List } from './use/List/List';
import { Loading } from './use/Tools/Loading';
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
			<div className={st.container}>
				<div className={st.panel} id="lay" onLoad={s}>
					{init ? (
						<>
							<Loading clsName={st.loading} src_={g} />
						</>
					) : (
						<Router>
							<Routes>
								<Route
									exact
									path="/test"
									element={
										<>
											<Navbar clsName={st.menu} />
										</>
									}
								/>
								<Route exact path="/" element={<Init />} />
								<Route
									exact
									path="/customer"
									element={
										<>
											<Navbar clsName={st.menu} />
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
											<Navbar clsName={st.menu} />
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
											<Navbar clsName={st.menu} />
											<PanelButtons clsName={st.panelButtons} loading_={changeLoad} />
											<Form clsName={st.form_} />
										</>
									}
								/>
								<Route
									exact
									path="/list"
									element={
										<>
											<Navbar clsName={st.menu} />
											<ProtectedRoute>
												<PanelButtons clsName={st.panelButtons} loading_={changeLoad} />
												<List clsName={st.list} />
											</ProtectedRoute>
										</>
									}
								/>
								<Route
									exact
									path="/invoice"
									element={
										<>
											<Navbar clsName={st.menu} />
											<PanelButtons clsName={st.panelButtons} loading_={changeLoad} />
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
					)}
				</div>
			</div>
		</>
	);
}

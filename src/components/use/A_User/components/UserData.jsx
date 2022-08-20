import st from '../style/UserData.module.css';
import swal from 'sweetalert';
import app from '../../../firebase/credentials';

import { useAuth } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function UserData() {
	const { logout, user } = useAuth();
	const navigate = useNavigate();

	const [userData, setUserData] = useState({
		uid: null,
		photo: null,
		displayName: null,
		email: null,
		rol: null,
		theme: 0,
	});

	useEffect(() => {
		const getData = async () => {
			const query_ = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
			const querySnapshot = await getDocs(query_);
			querySnapshot.forEach((doc) => {
				setUserData(doc.data());
			});
		};

		if (user) {
			getData();
		}
	}, [user]);

	const handleSubmit = async () => {
		await logout();
	};

	const exit = () => {
		try {
			swal({
				title: '¿Desea cerrar sesión?',
				icon: 'warning',
				buttons: ['No', 'Si'],
			}).then((respuesta) => {
				if (respuesta) {
					handleSubmit();
					navigate('/');
				}
			});
		} catch (error) {}
	};

	return (
		<>
			<div className={st.profilePhoto}>
				<img src={userData.photo} alt="" href="" />
			</div>
			<div className={st.userData}>
				<div className={st.paragraph}>
					<div>{userData.displayName}</div>
					<div>{userData.email}</div>
					<p>
						Otros datos del usuario
						<br />
						Tema: {userData.theme}
						<br />
						<br />
						fadfadfafdsafaf
					</p>
				</div>
				{/* Aqui estan los botones de la parte inferior de la informacion del usuario */}
				<div className={st.btnP}>
					<figure id="btnBack" title="Atras" tooltip-dir="left">
						<button
							onClick={() => {
								if (user) {
									navigate(-1);
								}
							}}
						>
							🔙
						</button>
					</figure>
					<figure id="btnBack" title="Salir" tooltip-dir="left">
						<button
							onClick={() => {
								if (user) {
									exit();
								}
							}}
						>
							📤
						</button>
					</figure>
				</div>
			</div>
		</>
	);
}

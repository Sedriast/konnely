import st from './styles/User.module.css';
import app from '../../firebase/credentials';

import { useEffect, useState } from 'react';

import { optionsDataUser, optionsDataAdmin } from './scripts/optionsData';

import { Option } from './components/Option';
import { UserData } from './components/UserData';
import { useAuth } from '../../../context/AuthContext';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function User() {
	const { user } = useAuth();
	const [optionSelect, setOptionSelect] = useState(1);
	const [rol, setRol] = useState(null);

	useEffect(() => {
		async function setSelect() {
			if (optionSelect !== null) {
				try {
					const recuest = optionSelect;
					if (recuest === String) {
						console.log(recuest);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
		const getData = async () => {
			const query_ = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
			const querySnapshot = await getDocs(query_);

			querySnapshot.forEach((doc) => {
				setRol(doc.data());
			});
		};

		if (user) {
			getData();
		}
		setSelect();
	}, [user, optionSelect]);
	return (
		<>
			{rol !== null && (
				<div className={st.container}>
					<div className={st.menuLeft}>
						{rol.rol === 'usuario'
							? optionsDataUser.map((option) => {
									return (
										<figure key={option.id} id={option.id} title={option.label} tooltip-dir="rigth">
											<button
												className={st.optionST}
												onClick={() => {
													setOptionSelect(option.id);
												}}
											>
												{option.icon}
											</button>
										</figure>
									);
							  })
							: optionsDataAdmin.map((option) => {
									return (
										<figure key={option.id} id={option.id} title={option.label} tooltip-dir="rigth">
											<button
												className={st.optionST}
												onClick={() => {
													setOptionSelect(option.id);
												}}
											>
												{option.icon}
											</button>
										</figure>
									);
							  })}
					</div>
					<div className={st.panel}>
						<Option op={optionSelect}></Option>
					</div>
					<div className={st.menuRigth}>
						<UserData />
					</div>
				</div>
			)}
		</>
	);
}

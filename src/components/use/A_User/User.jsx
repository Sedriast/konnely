import st from './User.module.css';
import app from '../../firebase/credentials';

import { useEffect, useState } from 'react';

import { optionsDataUser, optionsDataAdmin } from '../0-GeneralComp/0-StaticData/options';
import { useAuth } from '../../../context/AuthContext';

import { Option } from './components/Option';
import { UserData } from './components/UserData/UserData';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Buttons } from '../0-GeneralComp/1-Buttons/Buttons';

const db = getFirestore(app);

export function User() {
	const { user } = useAuth();
	const [optionSelect, setOptionSelect] = useState(0);
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
										<div key={option.id} id={option.id} className={st.optionST}>
											<Buttons
												route="#"
												label={option.label}
												direction="rigth"
												btnIconText={option.icon}
												btnClick={() => {
													setOptionSelect(option.id);
												}}
											/>
										</div>
									);
							  })
							: optionsDataAdmin.map((option) => {
									return (
										<div key={option.id} id={option.id} className={st.optionST}>
											<Buttons
												route="#"
												label={option.label}
												direction="rigth"
												btnIconText={option.icon}
												btnClick={() => {
													setOptionSelect(option.id);
												}}
											/>
										</div>
									);
							  })}
					</div>
					<div className={st.panel}>
						<Option op={optionSelect}></Option>
					</div>
					<div className={st.menuRigth}>
						<UserData user_={rol} />
					</div>
				</div>
			)}
		</>
	);
}

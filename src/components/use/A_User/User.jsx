import st from './styles/User.module.css';

import { useEffect, useState } from 'react';

import { optionsData } from './scripts/optionsData';

import { Option } from './components/Option';
import { UserData } from './components/UserData';

export function User() {
	const [optionSelect, setOptionSelect] = useState(0);

	useEffect(() => {
		async function setSelect() {
			if (optionSelect !== null) {
				try {
					const recuest = optionSelect;
					if (recuest === String) {
						console.log(recuest);
					}
				} catch (error) {
					console.log();
				}
			}
		}
		setSelect();
	}, [optionSelect]);

	return (
		<>
			<div className={st.container}>
				<div className={st.menuLeft}>
					{optionsData.map((option) => {
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
		</>
	);
}

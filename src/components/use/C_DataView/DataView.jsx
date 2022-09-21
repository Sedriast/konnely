import st from './styles/DataView.module.css';

import { useState } from 'react';

import { faCircleInfo, faSyringe } from '@fortawesome/free-solid-svg-icons';

import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { RigthTopButtons } from '../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Option } from './components/Option';

export function DataView() {
	const [optionSelect, setOptionSelect] = useState(false);
	const fal = () => {
		setOptionSelect(false);
	};
	const tru = () => {
		setOptionSelect(true);
	};
	const dataViewOptions = [
		{
			id: 0,
			state: fal,
			icon: faCircleInfo,
			path: '#',
			label: 'Información general',
		},
		{
			id: 1,
			state: tru,
			icon: faSyringe,
			path: '#',
			label: 'Tratamientos',
		},
	];

	return (
		<>
			<LeftBottomMenu options={dataViewOptions} />
			<div className={st.optionContainer}>
				<Option op={optionSelect} />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}

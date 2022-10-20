import st from './Record.module.css';

import { faFileInvoice, faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';

export function Record() {
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
			icon: faFileInvoice,
			path: '#',
			label: 'Facturación',
		},
		{
			id: 1,
			state: tru,
			icon: faFileWaveform,
			path: '#',
			label: 'Cambios',
		},
	];

	return (
		<>
			<LeftBottomMenu options={dataViewOptions} />
			<div className={st.optionContainer}>sadasd</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}

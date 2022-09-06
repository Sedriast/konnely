import st from './styles/DataView.module.css';

import { useState } from 'react';

import { dataViewOptions } from '../0-GeneralComp/0-StaticData/DataView/dataView';
import { generalOptions } from '../0-GeneralComp/0-StaticData/generalOptions';
import { RigthTopButtons } from '../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Option } from './components/Option';

export function DataView() {
	const [optSelect, setOptSelect] = useState(false);
	const [optionSelect, setOptionSelect] = useState(0);

	return (
		<div className={st.container}>
			<LeftBottomMenu
				options={dataViewOptions}
				click={() => {
					setOptSelect(!optSelect);
				}}
			/>
			<div className={st.optionContainer}>
				<Option op={optSelect} />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</div>
	);
}

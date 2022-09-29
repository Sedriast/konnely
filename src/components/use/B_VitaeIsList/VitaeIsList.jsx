import st from './styles/VitaeIsList.module.css';

import { viewsListOptions, generalOptions } from '../0-GeneralComp/0-StaticData/options';

import { Option } from './components/Option';
import { useState } from 'react';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

export function ViewIsList() {
	const [optionSelect, setOptionSelect] = useState(false);

	return (
		<>
			<LeftBottomMenu
				backCancel={optionSelect ? viewsListOptions[0] : null}
				additionExtras={!optionSelect ? viewsListOptions[1] : null}
				click={() => {
					setOptionSelect(!optionSelect);
				}}
			/>
			<div className={st.optionContainer}>
				<Option op={optionSelect} />
			</div>
			{optionSelect ? <></> : <RigthTopButtons BTNS={generalOptions} />}
		</>
	);
}

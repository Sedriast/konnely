import st from './styles/VitaeIsList.module.css';

import { generalOptions } from '../0-GeneralComp/0-StaticData/generalOptions';
import { viewsListOptions } from '../0-GeneralComp/0-StaticData/viewsListOptions';

import { Option } from './components/Option';
import { useState } from 'react';
import { RigthTopButtons } from '../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';

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
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}

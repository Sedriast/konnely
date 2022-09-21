import st from './ReproductiveCycle.module.css';

import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Option } from './components/Option';
import { Buttons } from '../../../../../0-GeneralComp/F-Buttons/Buttons';

export function ReproductiveCycle() {
	//este será el estado de la ultima camada; true: activa; false: inactiva
	//si la ultima camada está inactiva el boton de iniciar camada se mostrará
	//de lo contrario se mostrará un resumen de la ultima camada activa
	const [opt, setOpt] = useState(false);
	return (
		<>
			<div className={st.tit}>
				Camada
				<div>
					<Buttons
						route="/litterList"
						label="Lista de camadas"
						direction="bottom"
						btnIconText={faRectangleList}
					/>
				</div>
			</div>
			<br />
			<Option
				op={opt}
				click={() => {
					setOpt(true);
				}}
			/>
		</>
	);
}

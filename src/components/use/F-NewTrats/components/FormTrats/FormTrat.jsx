import st from './FormTrat.module.css';

import { useState } from 'react';
import { QueriesArray } from '../../../../firebase/funtions/QueriesArray';

import { Inputs } from '../../../0-GeneralComp/F-Inputs/Inputs';
import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';

export function FormTrat() {
	const [values, setValues] = useState({});
	function handleChange(e) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}
	QueriesArray();

	return (
		<div className={st.container}>
			<div className={st.d}>
				Tratamiento:
				<br />
				<br />
				Mostrar id del tratamiento
			</div>
			<form action="">
				<Inputs name="date" type="date" leyend="Fecha" handleChange={handleChange} />
				<Inputs name="signs" type="text" leyend="Sintomas" handleChange={handleChange} />
				<Inputs name="diagnosis" type="text" leyend="Diagnostico" handleChange={handleChange} />
				<Inputs name="treatment" type="text" leyend="Tratamiento" handleChange={handleChange} />
				<Inputs name="result" type="text" leyend="Resultados" handleChange={handleChange} />
				<Inputs name="professional" type="text" leyend="Nombre del profecional" />
				<div className={st.btn}>
					<Buttons direction="bottom" btnIconText="💾" label="Guardar" route="/vitae" />
				</div>
			</form>
		</div>
	);
}

import st from '../styles/FormTrat.module.css';

import { useState } from 'react';
import { QueriesArray } from '../../../firebase/funtions/QueriesArray';

import { Inputs } from '../../0-GeneralComp/F-Inputs/Inputs';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';

export function FormTrat() {
	const [values, setValues] = useState({});
	function handleChange(e) {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	}
	QueriesArray();

	return (
		<div className={st.container}>
			<div className={st.panel}>
				<Inputs
					name="tratamiento"
					type="text"
					handleChange={handleChange}
					leyend="ID.Tratamiento"
				/>

				<Inputs leyend="Fecha" type="text" handleChange={handleChange} />

				<Inputs name="Enfremedad" leyend="Enfermedad" type="text" handleChange={handleChange} />

				<Inputs name="Chequeo" leyend="Chequeo" type="text" handleChange={handleChange} />

				<Inputs
					name="Observaciones"
					leyend="Obserbaciones"
					type="text"
					handleChange={handleChange}
				/>

				<Inputs
					name="Imagenes"
					leyend="Imagenes"
					type="file"
					HaveImage={(e) => {
						console.log(e);
					}}
				/>
			</div>
			<div className={st.btn}>
				{/**Este boton tiene que enviar los datos del conejo para lograr regresar a al componenete de la ruta '/vitae'*/}
				<Buttons direction="bottom" btnIconText="💾" label="Guardar" route="/vitae" />
			</div>
		</div>
	);
}

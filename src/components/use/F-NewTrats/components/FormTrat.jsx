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
					name_="tratamiento"
					type_="text"
					handleChange={handleChange}
					leyend="ID.Tratamiento"
				/>

				<Inputs leyend="Fecha" type_="text" handleChange={handleChange} />

				<Inputs name_="Enfremedad" leyend="Enfermedad" type_="text" handleChange={handleChange} />

				<Inputs name_="Chequeo" leyend="Chequeo" type_="text" handleChange={handleChange} />

				<Inputs
					name_="Observaciones"
					leyend="Obserbaciones"
					type_="text"
					handleChange={handleChange}
				/>

				<Inputs
					name_="Imagenes"
					leyend="Imagenes"
					type_="file"
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

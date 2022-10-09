/* eslint-disable array-callback-return */
import st from './EditTrats.module.css';

import { faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { FormTrat } from './components/FormTrats/FormTrat';

export function EditTrats() {
	return (
		<>
			<div className={st.leftMenu}>
				<div className={st.btnBack}>
					{/**Este boton tiene que enviar los datos del conejo para lograr regresar a al componenete de la ruta '/vitae'*/}
					<Buttons direction="rigth" btnIconText={faXmark} label="Cancelar" route="/vitae" />
				</div>
			</div>
			<div className={st.optionContainer}>
				<FormTrat />
			</div>
		</>
	);
}

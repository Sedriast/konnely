import st from './styles/NewTrat.module.css';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { FormTrat } from './components/FormTrats/FormTrat';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';

export function NewTrat() {
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

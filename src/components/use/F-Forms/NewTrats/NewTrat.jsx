import st from './styles/NewTrat.module.css';

import { FormTrat } from './components/FormTrats/FormTrat';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';
import { generalOptions } from '../../0-GeneralComp/0-StaticData/generalOptions';
import { RigthTopButtons } from '../../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';

export function NewTrat() {
	return (
		<>
			<div className={st.leftMenu}>
				<div className={st.btnBack}>
					{/**Este boton tiene que enviar los datos del conejo para lograr regresar a al componenete de la ruta '/vitae'*/}
					<Buttons direction="rigth" btnIconText="❌" label="Cancelar" route="/vitae" />
				</div>
			</div>
			<div className={st.optionContainer}>
				<FormTrat />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}

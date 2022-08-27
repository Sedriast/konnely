import st from './styles/NewTrat.module.css';

import { FormTrat } from './components/FormTrat';
import { Buttons } from '../0-GeneralComp/F-Buttons/Buttons';

export function NewTrat() {
	return (
		<>
			<div className={st.container}>
				<div className={st.leftMenu}>
					<div className={st.btnBack}>
{/**Este boton tiene que enviar los datos del conejo para lograr regresar a al componenete de la ruta '/vitae'*/}
						<Buttons direction="rigth" btnIconText="❌" label="Atrás" route="/vitae" />
					</div>
				</div>
				<FormTrat />
			</div>
		</>
	);
}

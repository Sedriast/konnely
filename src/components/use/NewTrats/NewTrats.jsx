import { Inputs } from '../Tools/Inputs/Inputs';
import st from './css/NewTrats.module.css';

export function NewTrats() {
	return (
		<div className={st.container}>
			<div className={st.backBTN}></div>
			<div className={st.panel}>
				<Inputs leyend="ID.Tratamiento"></Inputs>

				<Inputs leyend="Fecha"></Inputs>

				<Inputs leyend="Enfermedad"></Inputs>

				<Inputs leyend="Chequeo"></Inputs>

				<div className={st.obse}>
					<Inputs leyend="Obserbaciones"></Inputs>
				</div>

				<div className={st.imgs}>
					<Inputs leyend="Imagenes"></Inputs>
				</div>
			</div>
			<div className={st.saveBTN}></div>
		</div>
	);
}

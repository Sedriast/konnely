import { Inputs } from '../Tools/Inputs/Inputs';
import st from './css/NewTrats.module.css';

export function NewTrats() {
	return (
		<div className={st.container}>
			<div className={st.backBTN}></div>
			<div className={st.panel}>
				<Inputs leyend="ID.Tratamiento" type_="text"></Inputs>

				<Inputs leyend="Fecha" type_="text"></Inputs>

				<Inputs leyend="Enfermedad" type_="text"></Inputs>

				<Inputs leyend="Chequeo" type_="text"></Inputs>

				<div className={st.obse}>
					<Inputs leyend="Obserbaciones" type_="text"></Inputs>
				</div>

				<div className={st.imgs}>
					<Inputs leyend="Imagenes" type_="file"></Inputs>
				</div>
			</div>
			<div className={st.saveBTN}></div>
		</div>
	);
}

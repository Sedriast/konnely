import st from "./Cards.module.css";

import { Link } from "react-router-dom";
import { recuperar } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { estadoRabbit } from "../../../0-GeneralComp/0-Scripts/EstadoRabbit";

export function Cards({ rabitID, rabitInfo }) {
	return (
		<>
			<Link
				to='/vitae'
				onClick={() => {
					recuperar(rabitID, rabitInfo);
				}}>
				<button className={st.container} id={rabitInfo.id}>
					<div className={st.panelId}>
						<img className={st.rabitImg} src={rabitInfo.url} alt='' />
						<div className={st.idName}>{rabitInfo.id}</div>
					</div>
					<br />
					<br />
					<hr />
					<br />
					<br />
					<br />
					<div className={st.titles}>
						Estado:
						<br />
						Raza:
						<br />
						Genero:
						<br />
						<br />
						Concepción:
						<br />
						Fecha:
						<br />
						Procedencia:
					</div>
					<div className={st.ask}>
						{estadoRabbit({
							reproductivecycle: rabitInfo.reproductivecycle,
							lifecycle: rabitInfo.lifecycle,
						})}
						<br />
						{rabitInfo.raza}
						<br />
						{rabitInfo.genero}
						<br />
						<br />
						{rabitInfo.concepcion}
						<br />
						{rabitInfo.nacimiento}
						<br />
						{rabitInfo.origen}
					</div>
				</button>
			</Link>
		</>
	);
}

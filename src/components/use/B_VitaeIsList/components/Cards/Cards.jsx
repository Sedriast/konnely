import st from './Cards.module.css';

import { Link } from 'react-router-dom';
import { recuperar } from '../../../C_DataView/scripts/dataProv';

export function Cards({ rabitID, rabitImage, rabitRaza, rabitGen, rabitInfo }) {
	return (
		<>
			<Link
				to="/vitae"
				onClick={() => {
					recuperar(rabitID, rabitInfo);
				}}
			>
				<button className={st.container} id={rabitID}>
					<div className={st.panelId}>
						<img className={st.rabitImg} src={rabitImage} alt="" />
						<div className={st.idName}>{rabitID}</div>
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
						Concepción:
						<br />
						Fecha de concepción:
						<br />
						Procedencia:
					</div>
					<div className={st.ask}>
						Activo
						<br />
						Azul de viena
						<br />
						{rabitGen}
						<br />
						Monta natural
						<br />
						10-20-20221
						<br />
						Facatativa
					</div>
				</button>
			</Link>
		</>
	);
}

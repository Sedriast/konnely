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
					<hr />
					<br />
					<div className={st.parag}>
						<h1>Raza:</h1>
						<p>{rabitRaza}</p>
						<br />
						<h1>Genero:</h1>
						<p>{rabitGen}</p>
						<br />
					</div>
				</button>
			</Link>
		</>
	);
}

import st from '../styles/Cards.module.css';

import { Link } from 'react-router-dom';

export function Cards({ rabitID, rabitImage, rabitRaza, rabitGen }) {
	return (
		<>
			<Link to="/vitae">
				<button className={st.container}>
					<img className={st.rabitImg} src={rabitImage} alt="" />
					<div className={st.idName}>{rabitID}</div>
					<div className={st.parag}>
						<div>
							<h1>Raza:</h1>
							{rabitRaza}
							<br />
							<br />
							<h1>Genero:</h1>
							{rabitGen}
						</div>
					</div>
				</button>
			</Link>
		</>
	);
}

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import st from './css/Cards.module.css';

export function Cards(props) {
	useEffect(function () {
		const color = props.cGp;
		document.getElementById(props.id_).style.setProperty('background', color);
	});

	return (
		<>
			<div className={st.container} id={props.id_}>
				<Link to="/data">
					<div className={st.panel}>
						<div className={st.h1_}>
							<h1>{props.rabitDataName}</h1>
						</div>
						<div className={st.pa}>
							<div>
								<h2>Raza:</h2>
								<p>{props.data1}</p>
							</div>
							<div>
								<h2>Genero:</h2>
								<p>{props.data2}</p>
							</div>
						</div>
					</div>
				</Link>
				<Link to="/data">
					<img alt="" className={st.im} src={props.url} />
				</Link>
			</div>
		</>
	);
}

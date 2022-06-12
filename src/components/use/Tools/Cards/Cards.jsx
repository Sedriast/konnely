import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import st from './css/Cards.module.css';

export function Cards(props) {
	useEffect(function () {
		const color =
			'radial-gradient(100% 223.3% at 0% 50%, ' +
			props.cGp +
			' 1.49%, rgba(0, 0, 0, 0.25) 46.2%), rgba(0, 0, 0, 0.5)';
		document.getElementById(props.id_).style.setProperty('background', color);
	});

	return (
		<>
			<div className={props.clsName}>
				<Link to="/data">
					<div className={st.Panel_} id={props.id_}>
						<img className={st.Image_} src={props.url} alt="" style={{ objectFit: 'cover' }} />
						<h1 className={st.Name_}>{props.rabitDataName}</h1>
						<p>
							<h1>Raza</h1>
							<h1>Genero</h1>
							<h3>{props.data1}</h3>
							<h3>{props.data2}</h3>
						</p>
					</div>
				</Link>
			</div>
		</>
	);
}

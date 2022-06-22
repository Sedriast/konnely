import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import st from './css/Cards.module.css';

export function Cards(props) {
	useEffect(function () {
		const color =
			'radial-gradient(78.6% 123.05% at 21.4% 50%, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.75) 17.83%,' +
			props.cGp +
			'100%), rgba(0, 0, 0, 0.5)';
		document.getElementById(props.id_).style.setProperty('background', color);
	});

	return (
		<>
			<div className={st.container}>
				<Link to="/data">
					<div className={st.panel} id={props.id_}>
						<div>
							<h1>{props.rabitDataName}</h1>
						</div>
						<div>
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
				<img alt="" src={props.url} style={{ objectFit: 'cover' }} />
			</div>
		</>
	);
}

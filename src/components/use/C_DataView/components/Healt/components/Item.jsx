import st from '../styles/Item.module.css';

export function Item({ trataments }) {
	return (
		<>
			{trataments.map((item, index) => {
				return (
					<button key={index} className={st.panelTrat}>
						ID. Tratamiento:
						<br />
						<h3>{item.idTratamiento}</h3>
						<br />
						Fecha:
						<br />
						<h3>{item.fecha}</h3>
						<br />
						Enfermedad:
						<br />
						<h3>{item.title}</h3>
					</button>
				);
			})}
		</>
	);
}

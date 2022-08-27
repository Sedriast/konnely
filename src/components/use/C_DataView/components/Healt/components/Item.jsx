import st from '../styles/Item.module.css';

export function Item({ trataments }) {
	return (
		<>
			{trataments.map((item, index) => {
				return (
					<button key={index} className={st.panelTrat}>
						ID. Tratamiento:
						<br />
						{item.idTratamiento}
						<br />
						<br />
						Fecha:
						<br />
						{item.fecha}
						<br />
						<br />
						Enfermedad:
						<br />
						{item.title}
					</button>
				);
			})}
		</>
	);
}

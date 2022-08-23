import st from '../styles/Com.module.css';

export function Item({ treatments }) {
	return (
		<>
			{tratamientos.map((item, index) => {
				return (
					<button key={index} className={st.panelTrat}>
						<div className={st.v}>
							<h1>ID. Tratamiento</h1>
							<div className={st.viewI}>{item.fecha}</div>
						</div>
						<div className={st.v}>
							<h1>Fecha</h1>
							<div className={st.viewI}>{item.fecha}</div>
						</div>
						<div className={st.v}>
							<h1>Enfermedad</h1>
							<div className={st.viewI}>{item.idTratamiento}</div>
						</div>
					</button>
				);
			})}
		</>
	);
}

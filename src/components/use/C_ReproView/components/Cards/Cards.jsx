import st from './Cards.module.css';

export function Cards({ id, editors, state, idMother, stages }) {
	return (
		<div className={st.container} id={id}>
			<div className={st.panelId}>Camada {id}</div>
			<br />
			<br />
			<div className={st.panelInfo}></div>
		</div>
	);
}

import st from './Cards.module.css';

export function Cards({ info }) {
	function peso(weigth) {
		if (weigth !== 'Sin datos') return weigth + ' kg';
		return weigth;
	}
	return (
		<form key={info.id} className={info.stage === 'Nacimiento' ? st.bird : st.container} action="">
			{info?.stage === 'Nacimiento' ? (
				<>
					<div className={st.idName}>
						{info.stage}
						<br />
						<br />
						<hr />
					</div>
					<br />
					<br />
					<br />
					<br />
					<div className={info.titles}>
						Camada:
						<br />
						Fecha:
						<br />
						Peso al destete:
					</div>
					<div className={st.ask}>
						{info.state}
						<br />
						{info.date}
						<br />
						{peso(info.weigth)}
					</div>
				</>
			) : (
				<>
					<div className={st.idName}>{info.stage}</div>
					<hr />
					<br />
					<br />
					<br />
					<div className={st.titles}>
						Fecha pronosticada:
						<br />
						<br />
						Peso final:
						<br />
						Fecha real:
					</div>
					<div className={st.ask}>
						{info.approDate}
						<br />
						<br />
						{peso(info.weigth)}
						<br />
						{info.date}
					</div>
				</>
			)}
		</form>
	);
}

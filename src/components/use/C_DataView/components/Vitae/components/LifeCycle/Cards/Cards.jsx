import st from './Cards.module.css';

export function Cards({ info }) {
	return (
		<>
			{info?.map((items, index) => {
				return (
					<>
						{items.stage === 'Nacimiento' ? (
							<div key={index} className={st.bird}>
								<div className={st.idName}>
									{items.stage}
									<br />
									<br />
									<hr />
								</div>
								<br />
								<br />
								<br />
								<br />
								<div className={st.titles}>
									Camada:
									<br />
									Fecha:
									<br />
									Peso al destete:
								</div>
								<div className={st.ask}>
									{items.state}
									<br />
									{items.date}
									<br />
									{items.weigth} gr
								</div>
							</div>
						) : (
							<div key={index} className={st.container}>
								<div className={st.idName}>{items.stage}</div>
								<hr />
								<br />
								<br />
								<br />
								<div className={st.titles}>
									Fecha pronosticada:
									<br />
									<br />
									Fecha real:
									<br />
									Peso final:
								</div>
								<div className={st.ask}>
									{items.date}
									<br />
									<br />
									{items.weigth} gr
									<br />
									{items.date}
								</div>
							</div>
						)}
					</>
				);
			})}
		</>
	);
}

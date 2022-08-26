import st from './styles/Lists.module.css';

export function Lists(props) {
	const action = (e) => {
		props.handleChange(e);
	};

	return (
		<>
			<div className={st.container}>
				<h1>{props.leyend}</h1>
				<select className={st.list_} name={props.name_} onChange={action}>
					{props.listar?.map((a) => (
						<option key={a} value={a}>
							{a}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

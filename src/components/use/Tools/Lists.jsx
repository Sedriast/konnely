import st from '../../css/Tools/Lists.module.css';

export function Lists(props) {
	const action = (e) => {
		props.handleChange(e);
	};

	return (
		<>
			<div className={props.clsName}>
				<h1 className={st.label}>{props.leyend}</h1>

				<div className={st.br_}></div>

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

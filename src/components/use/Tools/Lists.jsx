import style_Li from "../../css/Tools/Lists.module.css";

export function Lists(props) {
	const action = (e) => {
		props.handleChange(e);
	};

	return (
		<>
			<div className={props.clsName}>
				<h1 className={style_Li.label}>{props.leyend}</h1>

				<div className={style_Li.br_}></div>

				<select
					className={style_Li.list_}
					name={props.name_}
					onChange={action}
				>
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

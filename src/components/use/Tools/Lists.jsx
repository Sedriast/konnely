import style_Li from "../../css/Tools/Lists.module.css";

export function Lists(props) {
	const { handleChanche } = props;

	return (
		<>
			<div className={props.clsName}>
				<h1 className={style_Li.label}>{props.leyend}</h1>

				<div className={style_Li.br_}></div>

				<select
					className={style_Li.list_}
					name={props.name_}
					onChange={handleChanche}
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

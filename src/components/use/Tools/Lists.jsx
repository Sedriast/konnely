import style_Li from "../../css/Tools/Lists.module.css";

export function Lists(props) {
	const { handleChanche } = props;
	const tem = props.mostrar;
	console.log(tem);

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
					{tem.map((a) => (
						<option key={a.name} value={a.name}>
							{a.name}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

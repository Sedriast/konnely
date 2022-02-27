import "../css/Btn.module.css";
import { Link } from "react-router-dom";
import style from "../css/ListViews.module.css";
import { useState } from "react";

export function CardMin(props) {
	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const rabitData = props.rabitData;
	const [datos, setDatos] = useState(props.data.Objeto);

	console.log(datos);

	return (
		<>
			<Link to="/data">
				<div className={style.cardPanel}>
					<img
						className={style.imgView}
						src={url}
						alt=""
						style={{ objectFit: "cover" }}
					/>
					<h1 className={style.nameH1}>{rabitDataName}</h1>
					<p className={style.ps}>{rabitData}</p>
				</div>
			</Link>
		</>
	);
}

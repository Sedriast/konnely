import { Link } from "react-router-dom";
import style_Ca from "../../css/Tools/Cards.module.css";
import { Paragraphs } from "../Tools/Paragraphs";
import { useEffect } from "react";

export function Cards(props) {
	useEffect(function () {
		const color =
			"radial-gradient(100% 223.3% at 0% 50%, " +
			props.cGp +
			" 1.49%, rgba(0, 0, 0, 0.25) 46.2%), rgba(0, 0, 0, 0.5)";

		window.setInterval(function () {
			document
				.getElementById("cGp")
				.style.setProperty("background", color);
		}, 1);
		console.log("sdfaf");
	});

	return (
		<>
			<div className={props.clsName}>
				<Link to="/data">
					<div className={style_Ca.Panel_} id={props.id_}>
						<img
							className={style_Ca.Image_}
							src={props.url}
							alt=""
							style={{ objectFit: "cover" }}
						/>
						<h1 className={style_Ca.Name_}>
							{props.rabitDataName}
						</h1>
						<Paragraphs
							clsName={style_Ca.paragraphsPanel}
							b1={props.data1}
							b2={props.data2}
							t1="Raza"
							t2="Estado"
						/>
					</div>
				</Link>
			</div>
		</>
	);
}

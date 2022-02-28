import style from "../css/DataView.module.css";
import { Paragraphs } from "../helpers/Paragraphs";
import { useLocation } from "react-router";

export function DataView(props) {
	const img_ = props.img_;
	const data = useLocation();
	console.log(data.state);

	return (
		<>
			<div className={style.subPanelGradient}>
				<div className={style.data}>
					<img src={img_} href="" alt="" />
					<Paragraphs panel={style.panelPar} />
				</div>
			</div>
		</>
	);
}

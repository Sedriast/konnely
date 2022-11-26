import st from "../ReproductiveCycle.module.css";

import { Buttons } from "../../../../../../0-GeneralComp/1-Buttons/Buttons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Cards } from "./Cards/Cards";

import { Loading } from "../../../../../../0-GeneralComp/1-Loading/Loading";

export function Option({ op, rep }) {
	switch (op) {
		case false:
			return (
				<div className={st.act}>
					<Buttons route='/NewRepro' label='Nueva camada' direction='bottom' btnIconText={faCirclePlus} />
					<br />
					Nueva camada
				</div>
			);
		case true:
			return <>{<Cards stages={rep[0]?.stages} item={rep[0]} />}</>;
		default:
			return <>Nope</>;
	}
}

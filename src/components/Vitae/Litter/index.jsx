// import weaningI from "../../../constants/assets/logos/baby_bottle_13945.svg";
// import radeI from "../../../constants/assets/logos/rabbit_ride_13244.svg";
// import palpationI from "../../../constants/assets/logos/latex_globes_13256.svg";
// import prepartumI from "../../../constants/assets/logos/nest_13318.svg";
// import partumI from "../../../constants/assets/logos/partum_13329.svg";

import { useNavigate } from "react-router-dom";
import { Linear } from "../../Fragments/Stadistics/Linear";

export default function Litter({ language, stadistics }) {
	const navigae = useNavigate();

	const {
		titles: { litters_t },
		buttons: { record_b, add_b },
	} = language;

	return (
		<div>
			<section>
				<button onClick={() => navigae("./addLitter")}>{add_b}</button>
				<h1>{litters_t}</h1>
				<button onClick={() => navigae("./litterRecord")}>{record_b}</button>
			</section>
			<Linear litters={stadistics} />
		</div>
	);
}

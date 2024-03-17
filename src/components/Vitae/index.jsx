import { useRabbits } from "../../hooks/useContexts";
import { Link } from "react-router-dom";
import st from "./vitae.module.css";

import BasicData from "./BasicData";
import Lifecycle from "./Lifecycle";
import PictureRaces from "./PictureRaces";
import Litter from "./Litter";

export function Vitae({ language, user }) {
	const {
		litterData,
		labels: { rabbit },
		buttons: { BTN_back, BTN_print },
		titles: { race, stages_, basicData, lifecycle, isTransfered },
	} = language;

	const {
		rabbit: {
			id,
			isFemale,
			pictureURL,
			states: {
				isAlive,
				transferred: { origin, status, date, mom_id, dad_id },
			},
			lifecycle: { birth, weaning, currentWeight },
		},
		litters_,
	} = useRabbits();

	const birdLitter = () => litters_.find((doc) => doc.id === birth.litter);

	return (
		<>
			<Link className="BTN_back" to="/rabbitList">
				{BTN_back}
			</Link>
			{isFemale && (
				<Link className={st.BTN_print} to="/vitae/print">
					{BTN_print}
				</Link>
			)}
			<section className={st.vitae_panel}>
				<BasicData
					date={date}
					mom_id={mom_id}
					dad_id={dad_id}
					active={isAlive}
					status={status}
					origin={origin}
					stages_={stages_}
					isFemale={isFemale}
					basicData={basicData}
					birdLitter={birdLitter}
					isTransfered={isTransfered}
				/>
				<PictureRaces
					id={id}
					race={race}
					birth={birth}
					L_rabbit={rabbit}
					pictureURL={pictureURL}
				/>
				<Lifecycle
					weaning={weaning}
					lifecycle={lifecycle}
					currentWeight={currentWeight}
				/>
				<Litter language={litterData} stadistics={litters_} />
			</section>
		</>
	);
}

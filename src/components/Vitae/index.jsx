import { Link } from "react-router-dom";
import { useRabbits } from "../../hooks/useContexts";
import { PieChartS } from "../Fragments/Stadistics/PieChartS";
import st from "./vitae.module.css";
import Litter from "./Litter";
import BasicData from "./BasicData";
import Lifecycle from "./Lifecycle";

export function Vitae({ language, user }) {
	const {
		buttons: { BTN_back, BTN_print },
		titles: {
			race,
			litter_,
			stages_,
			basicData,
			lifecycle,
			stadistics,
			isTransfered,
		},
	} = language;
	const {
		rabbit: {
			id,
			litter,
			origin,
			isFemale,
			pictureURL,
			status: {
				active,
				transferred: { status, date, mom_id, dad_id },
			},
			lifecycle: { birth, weaning, fattening },
		},
		litters_,
	} = useRabbits();

	const birdLitter = litters_.find((doc) => doc.id === birth.litter);

	return (
		<>
			<Link className={st.BTN_back} to="/rabbitList">
				{BTN_back}
			</Link>
			{isFemale && (
				<Link className={st.BTN_print} to="/vitae/print">
					{BTN_print}
				</Link>
			)}

			<section className={st.vitae_panel}>
				<div>
					<div className={st.picture}>
						<h2>{id}</h2>
						<img src={pictureURL} alt="" />
					</div>
					<hr />
					<h3>{race}</h3>
					<div>
						<PieChartS data={birth.race} />
					</div>
				</div>
				<BasicData
					date={date}
					mom_id={mom_id}
					dad_id={dad_id}
					active={active}
					status={status}
					litter={litter}
					origin={origin}
					weaning={weaning}
					stages_={stages_}
					isFemale={isFemale}
					fattening={fattening}
					basicData={basicData}
					birdLitter={birdLitter}
					isTransfered={isTransfered}
				/>
				<Lifecycle
					lifecycle={lifecycle}
					weaning={weaning}
					fattening={fattening}
				/>
				{litter !== "false" && (
					<Litter
						litter_={{
							...litter_,
							natural: stages_.natural,
							artificial: stages_.artificial,
						}}
						litterData={litters_.find((doc) => doc.id === litter)}
					/>
				)}
				{isFemale && (
					<div>
						<h1>{stadistics}</h1>
					</div>
				)}
			</section>
		</>
	);
}

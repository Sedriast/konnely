import { useRabbits } from "../../hooks/useContexts";
import st from "./print.module.css";

import { Footer } from "./Footer";
import { BodyS } from "./BodyS";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export function Print({ language, user }) {
	const {
		rabbit: {
			id,
			origin,
			isFemale,
			status: {
				transferred: { status, date, mom_id, dad_id },
			},
			lifecycle: { birth, weaning, fattening },
		},
		litters_,
	} = useRabbits();

	const birthLitter = litters_.filter((litter) => litter.id === birth.litter);
	const litterRecord = litters_.filter(
		(litter) => litter.stages.ride.female === id
	);

	return (
		<section className={st.print_panel}>
			<Link className="BTN_back" to="/vitae">
				{language.buttons.BTN_back}
			</Link>
			<div>
				<h1>{language.codes}</h1>
				<Header languaje={language.header} isFemale={isFemale} />
				<BodyS
					st={st}
					language={language}
					table_one={{
						rabbitID: id,
						races: birth.race,
						isFemale: isFemale,
						isTransfered: status,
						BoT_Date: status ? date : birthLitter[0].stages.partum.date,
					}}
					table_two={{
						dad_id: status ? dad_id : birthLitter[0].stages.ride.male,
						mom_id: status ? mom_id : birthLitter[0].stages.ride.female,
					}}
					table_three={{
						weaningWeight: weaning.weight,
						currentWeight: fattening.weight,
						birthORTrans: status ? weaning.weight : "00",
					}}
					table_four={{
						place: origin,
						isTransfered: status,
						weaningAge: "000.000",
						birthType: birthLitter[0].stages.ride.isNatural
							? language.bodyS.table_four.labels[0]
							: language.bodyS.table_four.labels[1],
					}}
					table_five={{ litterRecord: litterRecord }}
				/>
				<Footer language={language.footer} />
			</div>
		</section>
	);
}

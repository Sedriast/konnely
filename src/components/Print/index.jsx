import { useRabbits } from "../../hooks/useContexts";
import st from "./print.module.css";

import { Footer } from "./Footer";
import { BodyS } from "./BodyS";
import { Header } from "./Header";

export function Print({ language, user }) {
	const {
		rabbit: { isFemale },
	} = useRabbits();
	return (
		<section className={st.print_panel}>
			<div>
				<h1>{language.codes}</h1>
				<Header languaje={language.header} isFemale={isFemale} />
				<BodyS
					language={language.bodyS.table_one}
					table_one={{
						isFemale: true,
						isTransfered: false,
						rabbitID: "000000000",
						BoT_Date: ["Mar", "00", "2024"],
						races: [
							{ name: "Nueva Zelanda", value: 80 },
							{ name: "Chinchilla", value: 20 },
						],
					}}
				/>
				<Footer language={language.footer} />
			</div>
		</section>
	);
}

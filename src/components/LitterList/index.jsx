import { useRabbits } from "../../hooks/useContexts";
import { SearchFilters } from "./SearchFilters";
import st from "./litterlist.module.css";

import { LittersListP } from "../Print/BodyS/LittersListP";

export function LitterList({ language }) {
	const { search, litterRecord } = language;
	const { setFilter, litters_ } = useRabbits();

	return (
		<section className={st.litterList_panel}>
			<SearchFilters st={st} language={search} filterFN={setFilter} />
			<section>
				{console.log(litters_)}
				<LittersListP language={litterRecord} litterRecord={litters_} />
			</section>
		</section>
	);
}

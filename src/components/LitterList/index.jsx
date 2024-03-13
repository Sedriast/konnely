import { useRabbits } from "../../hooks/useContexts";
import { SearchFilters } from "./SearchFilters";
import st from "./rabbitlist.module.css";

import { Cards } from "./Cards";
import { CardsS } from "../Fragments/Skeletons/CardsS";

export function LitterList({ language }) {
	const { CARDS, FILTERS } = language;
	const { setRabbit, rabbits_, setFilter, searchRabbits } = useRabbits();

	function fillGrid() {
		if (rabbits_.length === 0) {
			const arr = new Array(12).fill(0);
			return (
				<>
					{arr.map((_, index) => (
						<CardsS key={index} />
					))}
				</>
			);
		} else {
			return (
				<>
					{rabbits_?.map((rabbit_, index) => (
						<Cards
							key={index}
							rabbit={rabbit_}
							language={CARDS}
							setRabbit={setRabbit}
						/>
					))}
				</>
			);
		}
	}

	return (
		<section className={st.litterList_panel}>
			<SearchFilters
				st={st}
				language={FILTERS}
				filterFN={setFilter}
				searchs={searchRabbits}
			/>
			<section>{fillGrid()}</section>
		</section>
	);
}

import { useRabbits } from "../../hooks/useContexts";
import { SearchFilters } from "./SearchFilters";
import { useNavigate } from "react-router-dom";
import st from "./rabbitlist.module.css";

import { Cards } from "./Cards";
import { CardsS } from "../Fragments/Skeletons/CardsS";

export function LitterList({ language }) {
	const { CARDS, FILTERS, BTN_addRabbit } = language;
	const { setRabbit, rabbits_, setFilter, searchRabbits } = useRabbits();
	const navigate = useNavigate();

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
				searchs={searchRabbits}
				filterFN={setFilter}
			/>
			<section>{fillGrid()}</section>
			<figure title={BTN_addRabbit} tooltip-dir="rigth">
				<button title={BTN_addRabbit} onClick={() => navigate("./addLitter")}>
					{"➕"}
				</button>
			</figure>
		</section>
	);
}

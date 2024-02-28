import { errorAlert, useRabbits } from "../../hooks/useContexts";
import { SearchFilters } from "./SearchFilters";
import { useNavigate } from "react-router-dom";
import st from "./rabbitlist.module.css";
import Swal from "sweetalert2";

import { Cards } from "./Cards";
import { CardsS } from "../Fragments/Skeletons/CardsS";

export function RabbitList({ language }) {
	const {
		CARDS,
		FILTERS,
		BTN_Natural,
		L_addRabbit,
		BTN_addRabbit,
		BTN_Transferred,
	} = language;
	const { setRabbit, rabbitsList, filterRabbits, searchRabbits } = useRabbits();
	const navigate = useNavigate();

	function fillGrid() {
		if (rabbitsList.length === 0) {
			return (
				<>
					<CardsS />
					<CardsS />
					<CardsS />
					<CardsS />
					<CardsS />
					<CardsS />
				</>
			);
		} else {
			return (
				<>
					{rabbitsList?.map((rabbit_, index) => (
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
		<section className={st.rabbitList_panel}>
			<SearchFilters
				st={st}
				language={FILTERS}
				searchs={searchRabbits}
				filterFN={filterRabbits}
			/>
			<section>{fillGrid()}</section>
			<figure title={BTN_addRabbit} tooltip-dir="rigth">
				<button
					title={BTN_addRabbit}
					onClick={() =>
						Swal.fire({
							icon: "question",
							text: L_addRabbit,
							showCancelButton: true,
							confirmButtonText: BTN_Natural,
							cancelButtonText: BTN_Transferred,
						}).then(async ({ value }) => {
							try {
								value
									? navigate("./addRabbitNatural")
									: navigate("./addRabbitTransferred");
							} catch (error) {
								errorAlert(error.code);
							}
						})
					}>
					{"➕"}
				</button>
			</figure>
		</section>
	);
}

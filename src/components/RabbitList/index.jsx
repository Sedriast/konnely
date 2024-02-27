import { errorAlert, useRabbits } from "../../hooks/useContexts";
import { SearchFilters } from "./SearchFilters";
import st from "./rabbitlist.module.css";
import { useNavigate } from "react-router-dom";

import Cards from "./Cards";
import Swal from "sweetalert2";

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

	return (
		<section className={st.rabbitList_panel}>
			<SearchFilters
				st={st}
				language={FILTERS}
				searchs={searchRabbits}
				filterFN={filterRabbits}
			/>
			<section>
				{rabbitsList?.map((rabbit_) => (
					<Cards
						rabbit={rabbit_}
						key={rabbit_.id}
						language={CARDS}
						setRabbit={setRabbit}
					/>
				))}
			</section>
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

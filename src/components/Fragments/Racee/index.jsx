import { Lists } from "../Lists";
import st from "./race.module.css";

export function Racee({ index, races_ }) {
	return (
		<section className={st.race}>
			<input
				required
				type="number"
				name="numerators"
				inputMode="numeric"
				step="0.1"
				min="-100"
				max="100"
			/>
			<span>/</span>
			<input
				required
				type="number"
				name="denominators"
				inputMode="numeric"
				step="0.1"
				max="100"
				min="1"
			/>
			<Lists
				required
				name="raceNames"
				options={races_}
				placeholder={races_[index]}
				defaultValue={races_[index]}
			/>
		</section>
	);
}

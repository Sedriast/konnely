import { Lists } from "../Lists";

export function Racee({ index, races_ }) {
	return (
		<div>
			<input
				required
				name="numerator"
				type="number"
				min="-100"
				max="100"
				step="0.01"
			/>
			<hr />
			<input
				required
				name="denominator"
				type="number"
				max="100"
				min="1"
				step="0.01"
			/>
			<Lists
				required
				name="race"
				options={races_}
				placeholder={races_[index].value}
				defaultValue={races_[index].value}
			/>
		</div>
	);
}

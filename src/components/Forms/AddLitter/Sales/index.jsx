export function Sales({ gazapos }) {
	let comps = [];
	for (let i = 0; i < gazapos; i++) {
		comps.push(
			<section key={i}>
				<label title="weaningMales_label">
					{i + 1}
					<input type="text" name="idS" />
				</label>
				<label title="weaningMales_label">
					peso
					<input type="text" name="weightS" />
				</label>
				<label title="weaningMales_label">
					valor
					<input type="text" name="priceS" />
				</label>
			</section>
		);
	}
	return comps;
}

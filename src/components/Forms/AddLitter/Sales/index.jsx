export function Sales({ gazapos }) {
	let comps = [];
	for (let i = 0; i < gazapos; i++) {
		comps.push(
			<section key={i}>
				<label>
					{i + 1}
					<input required type="text" name="salesID" />
				</label>
				<label>
					peso (gr)
					<input required type="text" name="salesWeight" />
				</label>
				<label>
					valor (COP)
					<input required type="text" name="salesPrice" />
				</label>
				<label>
					fecha
					<input required type="date" name="salesDate" />
				</label>
			</section>
		);
	}
	return comps;
}

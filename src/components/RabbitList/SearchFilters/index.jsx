export function SearchFilters({ st, language, filterFN, searchs }) {
	const { male, female, inactive, search } = language;
	return (
		<form
			className={st.searchFilters}
			onSubmit={(event) => {
				event.preventDefault();
				if (event.nativeEvent.submitter.name === "search") {
					event.target[0].value !== "" && searchs(event.target[0].value);
				} else {
					filterFN(event.nativeEvent.submitter.name);
				}
			}}>
			<section title={search} name="section">
				<input name="search_" placeholder={search} type="search" />
				<button title={search} name="search" type="submit">
					🔎
				</button>
			</section>
			<figure name="" title={male} tooltip-dir="bottom">
				<button title={male} name="male" type="submit">
					{"♂️"}
				</button>
			</figure>
			<figure name="" title={female} tooltip-dir="bottom">
				<button title={female} name="female" type="submit">
					{"♀️"}
				</button>
			</figure>
			<figure name="" title={inactive} tooltip-dir="bottom">
				<button title={inactive} name="inactive" type="submit">
					{"♻️"}
				</button>
			</figure>
		</form>
	);
}

import { filters_keys } from "../../../constants/keys";

export function SearchFilters({ st, language, filterFN }) {
	const { search } = language;
	return (
		<form
			className={st.searchFilters}
			onSubmit={(event) => {
				event.preventDefault();
				filterFN([filters_keys.SEARCH, event.target[0].value]);
			}}>
			<section title={search} name="section">
				<input required type="search" name="search_" placeholder={search} />
				<button title={search} type="submit">
					🔎
				</button>
			</section>
		</form>
	);
}

import { filters_keys } from "../../../constants/keys";

export function SearchFilters({ st, language, filterFN }) {
	return (
		<form
			className={st.searchFilters}
			onSubmit={(event) => {
				event.preventDefault();
				filterFN([filters_keys.SEARCH, event.target[0].value]);
			}}>
			<section title={language} name="section">
				<input required type="search" name="search_" placeholder={language} />
				<button title={language} type="submit">
					🔎
				</button>
			</section>
		</form>
	);
}

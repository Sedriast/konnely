import { filters_keys } from "../../../constants/keys";

export function SearchFilters({ st, language, filterFN }) {
	const { male, female, inactive, search } = language;
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
			<figure name="" title={female} tooltip-dir="bottom">
				<button
					title={female}
					name="female"
					type="button"
					onClick={() => filterFN([filters_keys.FEMALE, ""])}>
					♀️
				</button>
			</figure>
			<figure name="" title={male} tooltip-dir="bottom">
				<button
					title={male}
					name="male"
					type="button"
					onClick={() => filterFN([filters_keys.MALE, ""])}>
					♂️
				</button>
			</figure>
			<figure name="" title={inactive} tooltip-dir="bottom">
				<button
					title={inactive}
					name="inactive"
					type="button"
					onClick={() => filterFN([filters_keys.INACTIVE, ""])}>
					♻️
				</button>
			</figure>
		</form>
	);
}

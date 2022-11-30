import st from "./List.module.css";

import { Cards } from "./components/Cards/Cards";

export function List() {
	const re = [{}, {}, {}];

	return (
		<>
			<div className={st.panelCards}>
				<div className={st.cards}>
					{re.map((item, index) => (
						<Cards
							key={index}
							rabitID={item.id}
							rabitImage={item.url}
							rabitGen={item.genero}
							rabitRaza={item.raza}
							rabitInfo={item}
						/>
					))}
				</div>
			</div>
		</>
	);
}

import st from './css/List.module.css';
import { Cards } from '../Tools/Cards/Cards';
import { SearchAll } from '../../firebase/funtions/SearchAll';

export function List(props) {
	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
					{SearchAll('conejos').props.children.map((a, index) => (
						<Cards
							clsName={st.card}
							key={index}
							id_={index}
							cGp={a.grupo}
							url={a.url}
							rabitDataName={a.id}
							data={a}
							data1={a.raza}
							data2={a.genero}
						/>
					))}
				</div>
			</div>
		</>
	);
}

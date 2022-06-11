import style_Li from '../../css/List/List.module.css';
import { Cards } from '../Tools/Cards';
import { SearchAll } from '../../firebase/funtions/SearchAll';
import { Inputs } from '../Tools/Inputs/Inputs';

export function List(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_Li.panel_}>
					<Inputs clsName={style_Li.searchBar} type_="text" placeholder_="Buscar" />
					<div className={style_Li.grid}>
						{SearchAll('conejos').props.children.map((a, index) => (
							<Cards
								clsName={style_Li.card}
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
			</div>
		</>
	);
}

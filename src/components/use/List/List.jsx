import style_Li from "../../css/List/List.module.css";
import { Cards } from "../Tools/Cards";
import { Search } from "../../firebase/funtions/Search";
import { Inputs } from "../Tools/Inputs";
//import { useState } from "react/cjs/react.production.min";

export function List(props) {

	return (
		<>
			<div className={props.clsName}>
				<div className={style_Li.panel_}>
					<Inputs
						clsName={style_Li.searchBar}
						type_="text"
						placeholder_="Buscar"
					/>
					<div className={style_Li.grid}>
						{Search("conejos").props.children.map((a, index) => (
							<Cards
								clsName={style_Li.card}
								key={index}
								id_="cGp"
								cGp={a.datos.grupo}
								url={a.datos.url}
								rabitDataName={a.datos.id}
								data={a}
								data1={a.datos.raza}
								data2={a.datos.enjendramiento}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

import st from "./ViewRecord.module.css";

import { useState } from "react";

import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Buttons } from "../../0-GeneralComp/1-Buttons/Buttons";
import { SearchAll } from "../../../firebase/funtions/GetInformation";
import { CardRecord_ } from "./Cards/CardRecord_";

export function ViewRecord() {
	const [search, setSearch] = useState("");
	const [search_, setSearch_] = useState([""]);
	const sales = SearchAll({ coleccion: "sales" }).props.children;
	function buscar(e) {
		setSearch(e);
		const valor = sales.filter(function (element) {
			if (
				element.date.toString().toLowerCase().includes(e.toLowerCase()) ||
				element.seller.toString().toLowerCase().includes(e.toLowerCase()) ||
				element.transaction.toString().toLowerCase().includes(e.toLowerCase()) ||
				element.buyer.toString().toLowerCase().includes(e.toLowerCase())
			)
				return element;
			return null;
		});
		setSearch_(valor);
	}
	return (
		<div className={st.container}>
			<div className={st.panelSearchBar}>
				<div className={st.new}>
					<Buttons
						btnIconText={faFileCirclePlus}
						route='/addHis'
						label='Nuevo registro'
						direction='rigth'
					/>
				</div>
				<form>
					<input
						name='buscar'
						type='search'
						placeholder='Buscar'
						onChange={(e) => {
							buscar(e.target.value);
						}}
					/>
					<button className={st.btnSearch} type='submit'>
						🔎
					</button>
				</form>
			</div>
			<div className={st.panelItems}>
				{sales[0] !== null && sales[0] !== undefined && sales[0] !== "" && (
					<>
						{search === ""
							? sales.map((e) => {
									return <CardRecord_ Info={e} />;
							  })
							: search_.map((e) => {
									return <CardRecord_ Info={e} />;
							  })}
						{search_.length === 0 && <h1>No hay resultados</h1>}
					</>
				)}
			</div>
		</div>
	);
}

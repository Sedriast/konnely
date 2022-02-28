import app from "../firebase/credenciales";
import style from "../css/ListView/ListViews.module.css";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CardMin } from "./CardMin";
import { SearchBar } from "../Searchbar/SearchBar";
import { Btn } from "../Buttons/Btn";
import { Paragraphs } from "../helpers/Paragraphs";
const db = getFirestore(app);

export function ListViews() {
	const [data, setData] = useState([{ Objeto: {} }]);

	useEffect(
		() =>
			onSnapshot(collection(db, "conejos"), (snapshot) =>
				setData(snapshot.docs.map((doc) => ({ ...doc.data() })))
			),
		[]
	);

	return (
		<>
			<SearchBar clName={style.containerSe}></SearchBar>
			<div className={style.subPanelLV}>
				{data.map((a) => (
					<CardMin
						url={a.Objeto.url}
						rabitDataName={a.Objeto.nombre}
						rabitData={
							<Paragraphs
								clName={style.exportParagPanel}
								body_I={a.Objeto.raza}
								body_II={a.Objeto.estado}
								title_I='Raza'
								title_II='Estado'/>
						}
						data={a}
					/>
				))}
			</div>
			<Btn clName={style.submitL} itemPath="/form" text_="✎" />
		</>
	);
}

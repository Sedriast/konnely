import { Link } from 'react-router-dom';
import style from '../css/ListViews.module.css';
import { Paragraphs } from '../helpers/Paragraphs';
import { useState } from "react";

export function CardMin(props){

export function CardMin(props) {
	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const rabitData = props.rabitData;
	const [datos, setDatos] = useState(props.data.Objeto);

	console.log(datos);

	return (
		<>
			<div className={style.cardContainer} >
			<Link to='/test'>
				<div className={style.cardPanel}  >
					<img className={style.cardImage} src={url} alt="" style={{ objectFit: "cover" }}/>
					<h1 className={style.cardName} >{rabitDataName}</h1>
					<Paragraphs />
				</div>
			</Link>
			</div>
		</>
	);
}

import { Link } from 'react-router-dom';
import style from '../css/ListViews.module.css';
import { Paragraphs } from '../helpers/Paragraphs';

export function CardMin(props){

	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const rabitData = props.rabitData;

	return(
		<>
			<div className={style.cardContainer} >
			<Link to='/test'>
				<div className={style.cardPanel}  >
					<img className={style.cardImage} src={url} alt=""/>
					<h1 className={style.cardName} >{rabitDataName}</h1>
					<Paragraphs></Paragraphs>
				</div>
			</Link>
			</div>
		</>
	);
}
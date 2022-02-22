import { Link } from 'react-router-dom';
import style from '../css/ListViews.module.css';

export function CardMin(props){

	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const rabitData = props.rabitData;

	const test = () => {
		window.alert("Good");
	} 

	return(
		<>
			<Link to= '/test'>
				<div className={style.cardPanel} >
					<img className={style.imgView} src={url} alt=""/>
					<h1 className={style.nameH1} >{rabitDataName}</h1>
					<p className={style.ps}>
					{rabitData}
					</p>
				</div>
			</Link>
		</>
	);
}
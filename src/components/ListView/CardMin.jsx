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
		<button onClick={test}>
			<div className={style.cardPanel} >
				<img className={style.imgView} src={url} alt=""/>
				<h1 >{rabitDataName}</h1>
				<p >{rabitData}</p>
			</div>
		</button>
		</>
	);
}
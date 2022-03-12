import style_C from "../../css/Customer/Customer.module.css";

export function Customer(props) {

	const d =  'linear-gradient(0deg, rgba(24, 3, 1, 0.75), rgba(24, 3, 1, 0.75)), url(https://drive.google.com/uc?export=download&id=1rmZYMQhdaMSTkGVcgD2JCKvo5ZD24QGW)';
 			

	const back = () => {

		window.setInterval(function(){
		document.getElementById('lay').style.setProperty('background', d);
		document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
		document.getElementById('lay').style.setProperty('background-size', 'cover');
		}, 1);
	}
	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<img className={style_C.preview_} href="" alt="" />
					<button className={style_C.ch} onClick={back}></button>
				</div>
			</div>
		</>
	);
}

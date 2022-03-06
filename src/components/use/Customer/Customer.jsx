import style_C from '../../css/Customer/Customer.module.css';

export function Customer(props){

	return(
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<img className={style_C.preview}></img>
					<button ></button>

				</div>
			</div>
		</>
	);
}
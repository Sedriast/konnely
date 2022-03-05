import style_C from '../../css/Customer/Customer.module.css';

export function Customer(props){

	const linkImg = props.src_;

	return(
		<>
			<div className={style_C.Customer}>
				<img src={linkImg} href='' alt=''/>
			</div>
		</>
	);
}
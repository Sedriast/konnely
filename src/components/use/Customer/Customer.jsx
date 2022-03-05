import style_C from '../../css/Customer/Customer.module.css';
import { Inputs } from '../Tools/Inputs';

export function Customer(props){

	const linkImg = props

	return(
		<>
			<div className={style_C.customer}>
				<div className={style_C.customerPanel}>
					<div><Inputs clsName={style_C.text_} type_="text"/></div>
					<div><Inputs clsName={style_C.date_} type_="date"/></div>
					<div><Inputs clsName={style_C.file_} type_="file"/></div>
				</div>
			</div>
		</>
	);
}
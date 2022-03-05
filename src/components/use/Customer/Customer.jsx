import style_C from '../../css/Customer/Customer.module.css';
import { Inputs } from '../Tools/Inputs';
import { Lists } from '../Tools/Lists';

export function Customer(props){

	const linkImg = props

	return(
		<>
			<div className={style_C.customer}>
				<div className={style_C.customerPanel}>
					<Inputs clsName={style_C.text_1} leyend="input 1" placeholder_="Eso" type_="text"/>
					<Inputs clsName={style_C.date_1} leyend="input 2" type_="date"/>
					<Inputs clsName={style_C.file_1} leyend="input 3" type_="file"/>
					{/* <Lists clsName={style_C.list_1} /> */}
				</div>
			</div>
		</>
	);
}
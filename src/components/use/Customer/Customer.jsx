import style_C from '../../css/Customer/Customer.module.css';
import { Inputs } from '../Tools/Inputs';
import { Lists } from '../Tools/Lists';

export function Customer(props){

	// const linkImg = props

	return(
		<>
			<div className={style_C.customer}>
				<div className={style_C.customerPanel}>
					<Inputs clsName={style_C.text_1} name_="ID" leyend="Texto" placeholder_="Escribir lo propio" type_="text"/>
					<Inputs clsName={style_C.date_1} name_="Fecha de destete" leyend="Fechas" type_="date"/>
					<Inputs clsName={style_C.file_1} placeholder_="asdfgh" leyend="Imagenes" type_="file"/>
					<Lists 	clName={style_C.race} collection="raza" />
				</div>
			</div>
		</>
	);
}
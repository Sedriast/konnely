import style_C from '../../css/Customer/Customer.module.css';
import { Cards } from '../Tools/Cards';
import { Inputs } from '../Tools/Inputs';
import { Lists } from '../Tools/Lists';

export function Customer(props){

	// const linkImg = props

	return(
		<>
			<div className={style_C.customer}>
				<div className={style_C.customerPanel}>
					<Cards ></Cards>
				</div>
			</div>
		</>
	);
}
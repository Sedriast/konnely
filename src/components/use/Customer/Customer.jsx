import style_Cu from '../../css/Customer/Customer.module.css'
import { Data } from '../Customer/Data';

export function Customer(props) {


	const c = e => {
		console.log(e.target.id);
	}

	return (
		<>
			<div className={props.clsName}>
				<div className={style_Cu.panel_}>
					{Data.map((a ,index) => {
						<div className={style_Cu.theme}>
							<button onClick={c} > 
								<img className={style_Cu.preview_} id={a.backgroud} src={a.miniature} href='' alt='' />
							</button>
						</div>	
					})}				
				</div>
			</div>
		</>
	);
}

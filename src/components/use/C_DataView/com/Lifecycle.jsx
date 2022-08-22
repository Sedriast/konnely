import st from '../styles/Com.module.css';
import { lifecycleChild } from '../../Z-Dates/Dates';

export function Lifecycle(props) {
	return (
		<>
			{JSON.stringify(props.id) !== '{}' ? (
				<div className={st.container}>
					{lifecycleChild(props?.id).map((items, index) => {
						return (
							<div key={index} className={st.panelE}>
								<div className={st.viewI}>{items.etapa}</div>
								<div className={st.viewI}>{items.peso}</div>
								<div className={st.viewI}>{items.fecha}</div>
							</div>
						);
					})}
				</div>
			) : (
				<></>
			)}
		</>
	);
}

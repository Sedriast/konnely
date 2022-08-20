import st from './css/PanelButtons.module.css';

import { Data } from './Data';
import { Buttons } from '../Tools/Buttons/Buttons';

export function PanelButtons(props) {
	return (
		<>
			<div className={st.container}>
				<div className={st.opUser}>
					<Buttons link_="/users" />
				</div>
				{Data.map((item, index) => {
					return (
						<div key={index} className={st.op}>
							<Buttons link_={item.path} cliLoa_={props.loading_} icon_={item.icon} />
						</div>
					);
				})}
				{/* <div className={st.op}>
					<Buttons link_="/list" cliLoa_={props.loading_} icon_={ojo} />
				</div>
				<div className={st.op}>
					<Buttons link_="/invoice" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/form" cliLoa_={props.loading_} icon_={ojo} />
				</div> */}
			</div>
		</>
	);
}

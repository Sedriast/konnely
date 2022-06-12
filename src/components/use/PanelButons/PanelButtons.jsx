import { Buttons } from '../Tools/Buttons/Buttons';
import st from './PanelButtons.module.css';
import ojo from '../../css/Img/ojo.png';

export function PanelButtons(props) {
	return (
		<>
			<div className={st.container}>
				<div className={st.op}>
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
				</div>
			</div>
		</>
	);
}

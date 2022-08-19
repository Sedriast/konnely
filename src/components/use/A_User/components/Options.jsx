import st from '../style/Options.module.css';
import { optionsData } from '../scripts/optionsData';

export function Options() {
	return (
		<>
			{optionsData.map((item, index) => {
				return (
					<div key={index} className={st.op}>
						{/* <Buttons link_={item.path} cliLoa_={props.loading_} icon_={item.icon} /> */}
					</div>
				);
			})}
		</>
	);
}

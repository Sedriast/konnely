import st from './css/Users.module.css';
import { Buttons } from '../Tools/Buttons/Buttons';

export function Users(props) {
	return (
		<>
			<div className={st.container}>
				<div className={st.panelB}>
					<div className={st.b}>
						<Buttons link_="/customer" />
					</div>
					<div className={st.b}>
						<Buttons link_="/" />
					</div>
					<div className={st.b}>
						<Buttons link_="/" />
					</div>
					<div className={st.b}>
						<Buttons link_="/" />
					</div>
				</div>
				div.
				<div className={st.parag}>
					<h1>{props.title}</h1>
					<h3>{props.label}</h3>
				</div>
				<div className={st.im}>
					<img src={props.src_} alt="" href="" />
				</div>
			</div>
		</>
	);
}

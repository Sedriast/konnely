import st from './style/User.module.css';

import { Options } from './components/Options';

export function User(props) {
	return (
		<>
			<div className={st.container}>
				<div className={st.menuLeft}>
					<Options />
				</div>
				<div className={st.panelInf}>
					<div className={st.i}>
						<img src={props.src_} alt="" href="" />
					</div>
					<div className={st.p}>
						<h1>{props.title}</h1>
						<h3>{props.label}</h3>
					</div>
				</div>
			</div>
		</>
	);
}

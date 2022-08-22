import st from './css/Buttons.module.css';

import { Link } from 'react-router-dom';

export function Buttons({ label, btnId, btnClick, btnChange, btnName, path, btnIconText }) {
	return (
		<>
			<figure className={st.fig} title={label} tooltip-dir="up">
				<button
					id={btnId}
					name={btnName}
					className={st.container}
					onClick={btnClick}
					onChange={btnChange}
				>
					<Link className={st.link} to={path}>
						<div className={st.icon_}>{btnIconText}</div>
					</Link>
				</button>
			</figure>
		</>
	);
}

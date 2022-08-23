import st from './styles/Buttons.module.css';

import { Link } from 'react-router-dom';

export function Buttons({
	direction,
	label,
	btnId,
	btnClick,
	btnChange,
	btnName,
	route,
	btnIconText,
}) {
	return (
		<>
			<figure className={st.fig} title={label} tooltip-dir={direction !== '' ? direction : 'rigth'}>
				<button
					id={btnId}
					name={btnName}
					className={st.container}
					onClick={btnClick}
					onChange={btnChange}
				>
					<Link className={st.link} to={route}>
						<div className={st.icon_}>{btnIconText}</div>
					</Link>
				</button>
			</figure>
		</>
	);
}

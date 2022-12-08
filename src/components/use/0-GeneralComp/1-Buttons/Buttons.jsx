import st from "./Buttons.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export function Buttons({ direction, label, btnId, btnClick, btnChange, btnName, route, btnIconText, btnType }) {
	return (
		<>
			<figure title={label} tooltip-dir={direction !== "" ? direction : "bottom"}>
				<button
					id={btnId}
					name={btnName}
					className={st.container}
					onClick={btnClick}
					onChange={btnChange}
					type={btnType}>
					<Link className={st.link} to={route}>
						<FontAwesomeIcon icon={btnIconText} />
					</Link>
				</button>
			</figure>
		</>
	);
}

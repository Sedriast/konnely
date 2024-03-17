import { useNavigate } from "react-router-dom";
import st from "../menus.module.css";

export function DownRigthMenu() {
	const navigate = useNavigate();
	return (
		<menu className={st.downRigthMenu}>
			<figure name="" title="home" tooltip-dir="top">
				<button title="home" onClick={() => navigate("/rabbitList")}>
					🏠
				</button>
			</figure>
			<figure name="" title="litters" tooltip-dir="top">
				<button title="litters" onClick={() => navigate("/litterRecord")}>
					🍼
				</button>
			</figure>
		</menu>
	);
}

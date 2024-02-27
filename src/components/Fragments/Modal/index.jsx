import { createPortal } from "react-dom";
import st from "./modal.module.css";

export function Modal({ children, close }) {
	return createPortal(
		<section className={st.container}>
			<div>
				<button title="close" onClick={() => close(false)}>
					❌
				</button>
				{children}
			</div>
		</section>,
		document.getElementById("modal")
	);
}

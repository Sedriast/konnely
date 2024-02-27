import st from "./loading.module.css";
import { useAuth } from "../../../hooks/useContexts";
import { language_keys } from "../../../constants/keys";
import rabbit from "../../../constants/assets/loading_1502559.gif";

export function Loading() {
	const { language } = useAuth();
	return (
		<>
			<div className={st.imPanel}>
				<img alt={language[language_keys.LOADING]} src={rabbit} />
				{language[language_keys.LOADING]}
			</div>
		</>
	);
}

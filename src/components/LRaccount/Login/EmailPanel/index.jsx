import { errorAlert } from "../../../../hooks/useContexts";
import { Link } from "react-router-dom";

export default function EmailPanel({
	st,
	setEmail,
	isRegistered,
	language: { L_user, BTN_user, L_register },
}) {
	return (
		<form
			className={st.login_panel}
			onSubmit={(event) => {
				event.preventDefault();
				if (event.target[0].value !== null && event.target[0].value !== "") {
					const email = event.target[0].value.includes("@ucundinamarca.edu.co")
						? event.target[0].value
						: `${event.target[0].value}@ucundinamarca.edu.co`;
					isRegistered(email).then((res) => {
						res && setEmail(email);
					});
				} else {
					errorAlert("login-empty-email");
				}
			}}>
			<label>
				{L_user}
				<input name="user" type="text" />
			</label>
			<button type="submit" title={BTN_user}>
				{BTN_user}
			</button>
			<Link to="/register">{L_register}</Link>
		</form>
	);
}

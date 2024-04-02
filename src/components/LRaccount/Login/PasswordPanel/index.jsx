import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../../../hooks/useContexts";

export default function PasswordPanel({
	st,
	login,
	email,
	forgotPassword,
	language: { L_password, BTN_password, L_forgotPassword },
}) {
	const navigate = useNavigate();
	return (
		<form
			className={st.login_panel}
			onSubmit={(event) => {
				event.preventDefault();
				login(email, event.target[0].value).then((response) => {
					response && navigate("./rabbitList");
				});
			}}>
			{errorAlert("NaN")}
			<h1>{email}</h1>
			<label>
				{L_password}
				<input name="password" type="password" />
			</label>
			<button type="submit" title={BTN_password}>
				{BTN_password}
			</button>
			<a href="/#" onClick={() => forgotPassword(email)}>
				{L_forgotPassword}
			</a>
		</form>
	);
}

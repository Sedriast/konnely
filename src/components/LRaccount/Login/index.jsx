import st from "../acountLR.module.css";

import EmailPanel from "./EmailPanel";
import PasswordPanel from "./PasswordPanel";

export function Login({
	login,
	email,
	setEmail,
	isRegistered,
	forgotPassword,
	language: {
		L_user,
		BTN_user,
		L_password,
		L_register,
		BTN_password,
		L_forgotPassword,
	},
}) {
	return (
		<>
			{email === "" ? (
				<EmailPanel
					st={st}
					setEmail={setEmail}
					isRegistered={isRegistered}
					language={{
						L_user,
						BTN_user,
						L_register,
					}}
				/>
			) : (
				<PasswordPanel
					st={st}
					login={login}
					email={email}
					forgotPassword={forgotPassword}
					language={{
						L_password,
						BTN_password,
						L_forgotPassword,
					}}
				/>
			)}
		</>
	);
}

import { errorAlert } from "../../../hooks/useContexts";
import st from "../acountLR.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Tutorial } from "./Tutorial";
import { Modal } from "../../Fragments/Modal";
import { useState } from "react";

export function Register({
	register,
	isRegistered,
	language: {
		name,
		password,
		lastName,
		BTN_back,
		BTN_send,
		tutorial,
		MGG_success,
		authPassword,
		cellphoneNumber,
		institutionalID,
		institutionalUser,
	},
}) {
	const [isOpen, setOpen] = useState(true);
	const { navigate } = useNavigate();
	return (
		<>
			{isOpen && (
				<Modal close={setOpen}>
					<Tutorial steps={tutorial} st={st} />
				</Modal>
			)}
			<Link className={st.BTN_back} to="/#">
				{BTN_back}
			</Link>
			<button
				title={BTN_send}
				className={st.tutorial}
				onClick={() => setOpen(true)}>
				❔
			</button>
			<form
				className={st.register_panel}
				onSubmit={(event) => {
					event.preventDefault();
					register(event.target).then(() => {
						Swal.fire({
							title: MGG_success,
							icon: "success",
						}).then(() => {
							navigate("./");
						});
					});
				}}>
				<label>
					{institutionalUser}
					<input
						type="text"
						autoComplete="off"
						name={institutionalUser}
						onBlur={({ target: { value } }) => {
							value !== null && value !== ""
								? isRegistered(`${value}@ucundinamarca.edu.co`).then((res) => {
										res && errorAlert("auth/email-already-exists");
								  })
								: errorAlert("register-empty-email");
						}}
					/>
				</label>
				<label>
					{institutionalID}
					<input
						min="1"
						type="number"
						pattern="^[0-9]+"
						name={institutionalID}
					/>
				</label>
				<label>
					{name}
					<input type="text" name={name} />
				</label>
				<label>
					{lastName}
					<input type="text" name={lastName} />
				</label>
				<label>
					{cellphoneNumber}
					<input
						min="1"
						type="number"
						pattern="^[0-9]+"
						name={cellphoneNumber}
					/>
				</label>
				<label>
					{password}
					<input autoComplete="off" type="password" name={password} />
				</label>
				<label>
					{authPassword}
					<input autoComplete="off" type="password" name={authPassword} />
				</label>
				<button type="submit" title={BTN_send}>
					{BTN_send}
				</button>
			</form>
		</>
	);
}

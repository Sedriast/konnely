import style from "../css/User.module.css";

export function UserView(props) {
	const img_ =
		"https://drive.google.com/uc?export=download&id=1E7CWChneuESSmcVQ-CpZHTMQxLwbedyi";

	return (
		<>
			<div className={style.userViewPanel}>
				<img className={style.img_} src={img_} href="" alt="" />
				<h1 className={style.userName}>Camila Arevalo</h1>
				<p className={style.userId}>320472</p>
				<p className={style.userInfo}>Administrador</p>
			</div>
		</>
	);
}

import st from './css/NewTrats.module.css';

export function NewTrats() {
	return (
		<div className={st.container}>
			<div className={st.backBTN}></div>
			<div className={st.panel}>
				<div className={st.imgEdit}></div>
				<div className={st.id}></div>
				<div className={st.date}></div>
				<div className={st.illness}></div>
				<div className={st.check}></div>
				<div className={st.observation}></div>
				<div className={st.imgs}></div>
			</div>
			<div className={st.saveBTN}></div>
		</div>
	);
}

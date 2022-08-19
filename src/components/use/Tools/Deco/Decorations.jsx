import st from './styles/Decorations.module.css';

export function Decorations() {
	return (
		<>
			<div className={st.container}>
				<div className={st.awaterMark} />
				<div className={st.left}>
					<div className={st.l1} />
					<div className={st.l2} />
				</div>
				<div className={st.rigth}>
					<div className={st.rigthUp}>
						<div className={st.ru1} />
						<div className={st.ru2} />
					</div>
					<div className={st.rigthDown}>
						<div className={st.rd2} />
						<div className={st.rd1} />
					</div>
				</div>
			</div>
		</>
	);
}

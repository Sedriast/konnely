import st from './styles/LeftBottomMenu.module.css';

export function LeftBottomMenu(backCancel, options, additionExtras) {
	return (
		<div className={st.container}>
			<div className={st.backCancelPanel}>
				{() => {
					if (backCancel !== null) {
						return <>top</>;
					}
				}}
			</div>
			<div className={st.optionsPanel}>
				{() => {
					if (options !== null) {
						return <>mid</>;
					}
				}}
			</div>
			<div className={st.additionExtrasPanel}>
				{() => {
					if (additionExtras !== null) {
						return <>bottom</>;
					}
				}}
			</div>
		</div>
	);
}

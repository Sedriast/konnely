import st from './LeftBottomMenu.module.css';

import { Buttons } from '../../F-Buttons/Buttons';

export function LeftBottomMenu({ backCancel, options, additionExtras, click }) {
	return (
		<div className={st.container}>
			<div className={st.backCancelPanel}>
				{backCancel ? (
					<div className={st.option} key={backCancel.id}>
						<Buttons
							label={backCancel.label}
							direction="bottom"
							route={backCancel.path}
							btnId={backCancel.id}
							btnName={backCancel.label}
							btnIconText={backCancel.icon}
							btnClick={click}
						/>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className={st.optionsPanel}>
				{options?.map((opt) => {
					<div className={st.option} key={opt.id}>
						<Buttons
							label={opt.label}
							direction="bottom"
							route={opt.path}
							btnId={opt.id}
							btnName={opt.label}
							btnIconText={opt.icon}
							btnClick={click}
						/>
					</div>;
				})}
			</div>
			<div className={st.additionExtrasPanel}>
				{additionExtras ? (
					<div className={st.option} key={additionExtras.id}>
						<Buttons
							label={additionExtras.label}
							direction="bottom"
							route={additionExtras.path}
							btnId={additionExtras.id}
							btnName={additionExtras.label}
							btnIconText={additionExtras.icon}
							btnClick={click}
						/>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

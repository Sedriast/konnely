import st from './LeftBottomMenu.module.css';

import { Buttons } from '../../F-Buttons/Buttons';

export function LeftBottomMenu({ backCancel, options, additionExtras, click }) {
	return (
		<div className={st.container}>
			<div className={st.backCancelPanel}>
				{backCancel ? (
					<div className={st.option} key={backCancel.id}>
						<Buttons
							btnId={backCancel.id}
							label={backCancel.label}
							direction="rigth"
							route={backCancel.path}
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
					return (
						<div className={st.option} key={opt.id}>
							<Buttons
								label={opt.label}
								direction="rigth"
								route={opt.path}
								btnId={opt.id}
								btnName={opt.label}
								btnIconText={opt.icon}
								btnClick={opt.state}
							/>
						</div>
					);
				})}
			</div>
			<div className={st.additionExtrasPanel}>
				{additionExtras ? (
					<div className={st.option} key={additionExtras.id}>
						<Buttons
							label={additionExtras.label}
							direction="rigth"
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

import { Buttons } from '../../../../../../0-GeneralComp/F-Buttons/Buttons';
import st from './FormCards.module.css';

export function FormCards({ info }) {
	return (
		<>
			{info?.map((items, index) => {
				return (
					<form
						key={index}
						className={items.stage === 'Nacimiento' ? st.bird : st.container}
						action=""
					>
						{items.stage === 'Nacimiento' ? (
							<></>
						) : (
							<>
								<div className={st.idName}>{items.stage}</div>
								<hr />
								<br />
								<br />
								<br />
								<div className={st.titles}>
									Fecha pronosticada:
									<br />
									<br />
									Peso final:
									<br />
									Fecha real:
								</div>
								<div className={st.ask}>
									{items.approDate}
									<br />
									<br />
									<input value={items.weigth} type="number" name="weigth" />
									<br />
									<input value={items.date} type="text" name="date" />
								</div>
							</>
						)}

						{items.stage === 'Nacimiento' ? (
							<></>
						) : (
							<div className={st.btn}>
								<Buttons
									route="#"
									btnType="submit"
									btnIconText="✔️"
									label="Hecho"
									direction="bottom"
								/>
							</div>
						)}
					</form>
				);
			})}
		</>
	);
}

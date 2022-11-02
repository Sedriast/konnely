import st from './Form.module.css';

import { EditInfoRabbit } from '../../../../../firebase/funtions/AddInformation';
import {
	conditionalLevanteEdit,
	conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';

export function Form({ info, uid, nacimiento }) {
	const conldicionalInfo = (name, value) => {
		if (name.includes('Levante') && name.includes('weigth')) {
			info[1].weigth = value;
		} else if (name.includes('Levante') && name.includes('date')) {
			info[1].date = value;
		} else if (name.includes('Engorde') && name.includes('weigth')) {
			info[2].weigth = value;
		} else if (name.includes('Engorde') && name.includes('date')) {
			info[2].date = value;
		} else if (name.includes('Ceba') && name.includes('weigth')) {
			info[3].weigth = value;
		} else if (name.includes('Ceba') && name.includes('date')) {
			info[3].date = value;
		}
	};
	function handleChange(e) {}
	return (
		<>
			<form
				className={st.container}
				onSubmit={(e) => {
					e.preventDefault();
					for (const element of e.target) {
						if (element.value !== '') {
							conldicionalInfo(element.name, element.value);
						}
					}
					EditInfoRabbit({ lifecycle: info, uid: uid });
				}}
				action=""
			>
				{info?.map((items, index) => {
					return (
						<div key={index} className={items.stage === 'Nacimiento' ? st.bird : st.panel}>
							{items.stage === 'Nacimiento' ? (
								<></>
							) : (
								<>
									<div className={st.idName}>{items.stage}</div>
									<hr />
									<br />
									<br />
									<br />
									<div className={st.date1}>
										<h1>Fecha pronosticada:</h1>

										{items.approDate}
									</div>

									<div className={st.editable}>
										<Inputs
											name={'weigth:' + items.stage}
											type="number"
											step="0.1"
											min="0"
											max="100"
											leyend="Peso"
											value={items.weigth}
											handleChange={handleChange}
										/>
										<Inputs
											name={'date:' + items.stage}
											type="date"
											leyend="Fecha real"
											value={items.date}
											onChange={(e) => {
												if (items.stage === 'Levante') {
													e.target.value = conditionalLevanteEdit(
														e.target.value,
														info[index].date,
														nacimiento
													);
												} else {
													e.target.value = conditionalNextEdit(
														e.target.value,
														info[index].date,
														info[index - 1].date
													);
												}
											}}
											handleChange={handleChange}
										/>
									</div>
								</>
							)}
						</div>
					);
				})}
				<div className={st.btn}>
					<button type="submit">
						<button
							onClick={() => {
								window.history.back();
							}}
						>
							<figure title="Guardar cambios" tooltip-dir="top">
								<FontAwesomeIcon icon={faFloppyDisk} />
							</figure>
						</button>
					</button>
				</div>
			</form>
		</>
	);
}

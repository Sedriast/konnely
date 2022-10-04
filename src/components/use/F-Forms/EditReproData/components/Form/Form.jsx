import st from './Form.module.css';

import { faFloppyDisk, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
export function Form({ info }) {
	return (
		<>
			<form
				className={st.container}
				onSubmit={() => {
					console.log('***** el que lo encuentre :V');
				}}
				action=""
			>
				<div className={st.panel}>
					<Inputs
						value={basicData?.id}
						leyend="Identificador"
						name="id"
						placeholder="Ingrese el identificador"
						type="number"
						inputmode="numeric"
						handleChange={handleChange}
					/>
				</div>
				<div className={st.submit}>
					<Buttons
						direction="bottom"
						label="Guardar"
						btnType="Submit"
						btnClick={handleSubmit}
						route="/vitaeslist"
						btnIconText={faPaperPlane}
					/>
				</div>
			</form>
		</>
	);
}

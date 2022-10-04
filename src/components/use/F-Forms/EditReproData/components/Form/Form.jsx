import st from './Form.module.css';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
export function Form({ info }) {
	const handleChange = () => {
		console.log('👍🏽👌🏽');
	};

	const handleSubmit = () => {
		console.log('👍🏽👌🏽');
	};
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
						value=""
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

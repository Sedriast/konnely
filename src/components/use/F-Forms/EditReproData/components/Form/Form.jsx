import st from './Form.module.css';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
					<button type="submit">
						<figure title="Guardar cambios" tooltip-dir="top">
							<FontAwesomeIcon icon={faPaperPlane} />
						</figure>
					</button>
				</div>
			</form>
		</>
	);
}

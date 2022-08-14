import { Inputs } from '../Inputs/Inputs';
import st from './css/FormCR.module.css';

export function FormCR(props) {
	function handleChange() {}
	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
					<h2>Title</h2>
					{/* <h2>{props.title}</h2> */}
					<Inputs
						leyend="Origen"
						name_="origen"
						placeholder_="Ingrese el origen"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Origen"
						name_="origen"
						placeholder_="Ingrese el origen"
						type_="text"
						handleChange={handleChange}
					/>
				</div>
			</div>
		</>
	);
}

import st from '../styles/Form.module.css';
import { Inputs } from '.././../../../0-GeneralComp/F-Inputs/Inputs';

export function DropdownDate(props) {
	const date_ = props.date;
	const { handleChange } = props;
	function phase() {
		if (Date.now() - Date.parse(date_) <= 2629800000 && Date.now() - Date.parse(date_) > 0) {
			return 1;
		} else if (
			Date.now() - Date.parse(date_) > 2629800000 &&
			Date.now() - Date.parse(date_) <= 5259600000
		) {
			return 2;
		} else if (
			Date.now() - Date.parse(date_) > 5259600000 &&
			Date.now() - Date.parse(date_) <= 7889400000
		) {
			return 3;
		} else if (
			Date.now() - Date.parse(date_) > 7889400000 &&
			Date.now() - Date.parse(date_) <= 10519200000
		) {
			return 4;
		} else if (Date.now() - Date.parse(date_) > 10519200000) {
			return 5;
		}
	}
	return (
		<>
			{phase() === 1 && (
				<>
					<Inputs
						leyend="Peso al nacer"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{phase() === 2 && (
				<>
					<Inputs
						leyend="Peso al nacer"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de lactancia"
						name_="lactancia"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{phase() === 3 && (
				<>
					<Inputs
						leyend="Peso al nacer"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de lactancia"
						name_="lactancia"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de levante"
						name_="levante"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{phase() === 4 && (
				<>
					<Inputs
						leyend="Peso al nacer"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de lactancia"
						name_="lactancia"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de levante"
						name_="levante"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de engorde"
						name_="engorde"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{phase() === 5 && (
				<>
					<Inputs
						leyend="Peso al nacer"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de lactancia"
						name_="lactancia"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de levante"
						name_="levante"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de engorde"
						name_="engorde"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Peso al terminar la fase de ceba"
						name_="ceba"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
		</>
	);
}

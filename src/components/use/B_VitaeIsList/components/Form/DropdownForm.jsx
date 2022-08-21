import st from './css/Form.module.css';
import { Inputs } from '../0-GeneralComp/Inputs/Inputs';

export function DropdownForm(props) {
	const motivo = props.motivo;
	const { handleChange } = props;
	return (
		<>
			{motivo === 'Traslado' && (
				<>
					<Inputs
						leyend="Fecha de traslado"
						name_="traslado"
						type_="date"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Origen"
						name_="origen"
						placeholder_="Ingrese el origen"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Identificador del padre"
						name_="idPadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Identificador de la madre"
						name_="idMadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === 'Nacimiento' && (
				<>
					<Inputs
						clsName={st.data2}
						leyend="Identificador del padre"
						name_="idPadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Identificador de la madre"
						name_="idMadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === 'Compra' && (
				<>
					<Inputs
						leyend="Proveedor"
						name_="proveedor"
						placeholder_="Ingrese el proveedor"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Precio"
						name_="precio"
						placeholder_="Ingrese el precio"
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
					<Inputs
						clsName={st.data2}
						leyend="Identificador del padre"
						name_="idPadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={st.data2}
						leyend="Identificador de la madre"
						name_="idMadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
		</>
	);
}

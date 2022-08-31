import { Inputs } from '../../../../0-GeneralComp/F-Inputs/Inputs';

export function DropdownForm(props) {
	const motivo = props.motivo;
	const { handleChange } = props;
	return (
		<>
			{motivo === 'Traslado' && (
				<>
					<Inputs
						leyend="Fecha de traslado"
						name="traslado"
						type="date"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Origen"
						name="origen"
						placeholder="Ingrese el origen"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Identificador del padre"
						name="idPadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Identificador de la madre"
						name="idMadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === 'Nacimiento' && (
				<>
					<Inputs
						leyend="Identificador del padre"
						name="idPadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Identificador de la madre"
						name="idMadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === 'Compra' && (
				<>
					<Inputs
						leyend="Proveedor"
						name="proveedor"
						placeholder="Ingrese el proveedor"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Precio"
						name="precio"
						placeholder="Ingrese el precio"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Origen"
						name="origen"
						placeholder="Ingrese el origen"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Identificador del padre"
						name="idPadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Identificador de la madre"
						name="idMadre"
						placeholder="Ingrese el identificador"
						type="text"
						handleChange={handleChange}
					/>
				</>
			)}
		</>
	);
}

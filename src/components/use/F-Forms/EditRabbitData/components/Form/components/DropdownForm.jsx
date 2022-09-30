import { Inputs } from '../../../../../0-GeneralComp/1-Inputs/Inputs';
import { recuperar } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function DropdownForm({ motivo, handleChange }) {
	return (
		<>
			{recuperar?.info?.motivo === motivo ? (
				<>
					{recuperar?.info?.motivo === 'Traslado' && (
						<>
							<Inputs
								value={recuperar?.info?.traslado}
								leyend="Fecha de traslado"
								name="traslado"
								type="date"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.origen}
								leyend="Origen"
								name="origen"
								placeholder="Ingrese el origen"
								type="text"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.idPadre}
								leyend="Identificador del padre"
								name="idPadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.idMadre}
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
						</>
					)}
					{motivo === 'Nacimiento' && (
						<>
							<Inputs
								value={recuperar?.info?.idPadre}
								leyend="Identificador del padre"
								name="idPadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.idMadre}
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
						</>
					)}
					{motivo === 'Compra' && (
						<>
							<Inputs
								value={recuperar?.info?.proveedor}
								leyend="Proveedor"
								name="proveedor"
								placeholder="Ingrese el proveedor"
								type="text"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.precio}
								leyend="Precio"
								name="precio"
								placeholder="Ingrese el precio"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.origen}
								leyend="Origen"
								name="origen"
								placeholder="Ingrese el origen"
								type="text"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.idPadre}
								leyend="Identificador del padre"
								name="idPadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								value={recuperar?.info?.idMadre}
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
						</>
					)}
				</>
			) : (
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
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
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
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
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
								type="number"
								inputmode="numeric"
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
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
							<Inputs
								leyend="Identificador de la madre"
								name="idMadre"
								placeholder="Ingrese el identificador"
								type="number"
								inputmode="numeric"
								handleChange={handleChange}
							/>
						</>
					)}
				</>
			)}
		</>
	);
}

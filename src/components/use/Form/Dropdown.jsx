import style_F from "../../css/Form/Form.module.css";
import { Inputs } from "../Tools/Inputs";

export function Dropdown(props) {
	const motivo = props.motivo;
	const { handleChange } = props;
	return (
		<>
			{motivo === "Traslado" && (
				<>
					<Inputs
						clsName={style_F.data2}
						leyend="Fecha de de translado"
						name_="Fecha de de translado"
						type_="date"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={style_F.data2}
						leyend="Origen"
						name_="Origen"
						placeholder_="Ingrese el origen"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === "Nacimiento" && (
				<>
					<Inputs
						clsName={style_F.data2}
						leyend="Identificador del padre"
						name_="IDPadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={style_F.data2}
						leyend="Identificador de la madre"
						name_="IDMadre"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
			{motivo === "Compra" && (
				<>
					<Inputs
						clsName={style_F.data2}
						leyend="Proveedor"
						name_="Proveedor"
						placeholder_="Ingrese el proveedor"
						type_="text"
						handleChange={handleChange}
					/>
					<Inputs
						clsName={style_F.data2}
						leyend="Precio"
						name_="Precio"
						placeholder_="Ingrese el precio"
						type_="text"
						handleChange={handleChange}
					/>
				</>
			)}
		</>
	);
}

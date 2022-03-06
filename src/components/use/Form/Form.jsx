import style_F from "../../css/Form/Form.module.css";
import app from "../../firebase/credentials";
import { Inputs } from "../Tools/Inputs";
import { Lists } from "../Tools/Lists";
import { useEffect, useState } from "react";
import { Search } from "../../firebase/Search";

// const db = getFirestore(app);
// const storage = getStorage(app);

export function Form(props) {
	const init = {};
	const [values, setValues] = useState(init);
	// const [stateM, setStateM] = useState(false);
	// const [stateH, setStateH] = useState(false);
	// const [image, setImage] = useState();

	// function HaveImage(e) {
	// 	setImage(e);
	// }

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setValues({ ...values, [name]: value });
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	addInfo(values);
	// };

	const gef = [
		{
			name: "Hembra",
		},
		{
			name: "Macho",
		},
	];

	const mostrar = (e) => {
		console.log(e);
	};

	return (
		<>
			<div className={props.clsName}>
				<div className={style_F.panel}>
					<Inputs clsName={style_F.image1} type_="file" />
					{/**botones */}
					<div className={style_F.grid}>
						<Inputs
							clsName={style_F.data1}
							leyend="Identificador"
							placeholder_="Ingrese el identificador"
							type_="text"
						/>
						{/* <div>
						<h1 className={style_F.label} >Genero</h1>
						<div className={style_F.br_}/>
						<select className={style_F.genero}>
							<option value="Hembra">Hembra</option>
							<option value="Macho">Macho</option>
						</select>
					</div> */}
						<Search coleccion="raza" mostrar={mostrar} />
						{/* <Lists clsName={style_F.race} name_="Prueba" /> */}
						<Inputs
							clsName={style_F.data2}
							leyend="Peso"
							placeholder_="Ingrese el peso"
							type_="text"
						/>
						<Inputs clsName={style_F.data3} type_="text" />
					</div>
				</div>
			</div>
		</>
	);
}

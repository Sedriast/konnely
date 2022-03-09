import style_F from "../../css/Form/Form.module.css";
import app from "../../firebase/credentials";
import { Inputs } from "../Tools/Inputs";
import { Lists } from "../Tools/Lists";
import { useState } from "react";
import { Search } from "../../firebase/funtions/Search";

// const db = getFirestore(app);
// const storage = getStorage(app);

export function Form(props) {
	const init = {};
	const genero = ["Hembra", "Macho"];
	const Enjendramiento = ["Monta natural", "Inseminación artificial"];
	const [values, setValues] = useState(init);
	// const [stateM, setStateM] = useState(false);
	// const [stateH, setStateH] = useState(false);
	// const [image, setImage] = useState();

	// function HaveImage(e) {
	// 	setImage(e);
	// }

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	addInfo(values);
	// };

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

						<Lists
							clsName={style_F.genere}
							leyend="Genero"
							name_="genero"
							listar={genero}
						/>

						<Lists
							clsName={style_F.race}
							leyend="Raza"
							name_="Razas"
							listar={Search("raza").props.children}
						/>

						<Lists
							clsName={style_F.race}
							leyend="Enjendramiento"
							name_="Enjendramiento"
							listar={Enjendramiento}
						/>

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

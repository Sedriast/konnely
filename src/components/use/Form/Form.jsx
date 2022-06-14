import st from './css/Form.module.css';
import { Inputs } from '../Tools/Inputs/Inputs';
import { Lists } from '../Tools/List/Lists.jsx';
import { useState } from 'react';
import { SearchAll } from '../../firebase/funtions/SearchAll';
import { addImageAndInfo } from '../../firebase/funtions/AddInformation';
import { Buttons } from '../Tools/Buttons/Buttons';
import { Dropdown } from './Dropdown';
import sendICO from '../../img/send.png';

export function Form(props) {
	const init = {};
	const genero = ['Genero', 'Hembra', 'Macho'];
	const concepcion = ['Concepción', 'Monta natural', 'Inseminación artificial'];

	const [values, setValues] = useState(init);
	const [image, setImage] = useState();
	const [reason, setReason] = useState();

	function handleChange(e) {
		if (e.target.name === 'motivo') {
			setReason(e.target.value);
			const { name, value } = e.target;
			setValues({ ...values, [name]: value });
		} else {
			const { name, value } = e.target;
			setValues({ ...values, [name]: value });
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addImageAndInfo({ ...values, image: image });
	};

	function HaveImage(e) {
		setImage(e);
	}

	return (
		<>
			<div className={st.container}>
				<div className={st.panelImage}>
					<Inputs type_="file" HaveImage={HaveImage} />
				</div>
				<div className={st.panel}>
					<Inputs
						leyend="Identificador"
						name_="id"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>

					<Lists leyend="Genero" name_="genero" listar={genero} handleChange={handleChange} />

					<Inputs
						leyend="Peso"
						name_="peso"
						placeholder_="Ingrese el peso"
						type_="text"
						handleChange={handleChange}
					/>

					<Lists
						leyend="Raza"
						name_="raza"
						listar={SearchAll('raza').props.children}
						handleChange={handleChange}
					/>

					<Lists
						leyend="Concepción"
						name_="concepcion"
						listar={concepcion}
						handleChange={handleChange}
					/>
					<Lists
						leyend="Banda Asosiada"
						name_="grupo"
						listar={SearchAll('grupo').props.children}
						handleChange={handleChange}
					/>

					<Inputs
						leyend="Fecha de nacimiento"
						name_="nacimiento"
						type_="date"
						handleChange={handleChange}
					/>

					<Inputs
						leyend="Fecha de destete"
						name_="destete"
						type_="date"
						handleChange={handleChange}
					/>

					<Lists
						leyend="Motivo de ingreso"
						name_="motivo"
						listar={SearchAll('motivo').props.children}
						handleChange={handleChange}
					/>
					{reason && <Dropdown motivo={reason} handleChange={handleChange} />}
				</div>
				<div className={st.submit}>
					<Buttons click_={handleSubmit} link_="/list" icon_={sendICO} />
				</div>
			</div>
		</>
	);
}

import style_F from '../../css/Form/Form.module.css';
import { Inputs } from '../Tools/Inputs/Inputs';
import { Lists } from '../Tools/Lists';
import { useState } from 'react';
import { SearchAll } from '../../firebase/funtions/SearchAll';
import { addImageAndInfo } from '../../firebase/funtions/AddInformation';
import { Buttons } from '../Tools/Buttons/Buttons';
import { Dropdown } from './Dropdown';

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
			<div className={props.clsName}>
				<div className={style_F.panel}>
					<Inputs clsName={style_F.image1} type_="file" HaveImage={HaveImage} />
					<div className={style_F.grid}>
						<Inputs
							clsName={style_F.data1}
							leyend="Identificador"
							name_="id"
							placeholder_="Ingrese el identificador"
							type_="text"
							handleChange={handleChange}
						/>

						<Lists
							clsName={style_F.genere}
							leyend="Genero"
							name_="genero"
							listar={genero}
							handleChange={handleChange}
						/>

						<Inputs
							clsName={style_F.data2}
							leyend="Peso"
							name_="peso"
							placeholder_="Ingrese el peso"
							type_="text"
							handleChange={handleChange}
						/>

						<Lists
							clsName={style_F.race}
							leyend="Raza"
							name_="raza"
							listar={SearchAll('raza').props.children}
							handleChange={handleChange}
						/>

						<Lists
							clsName={style_F.race}
							leyend="Concepción"
							name_="concepcion"
							listar={concepcion}
							handleChange={handleChange}
						/>

						<Lists
							clsName={style_F.race}
							leyend="Banda Asosiada"
							name_="grupo"
							listar={SearchAll('grupo').props.children}
							handleChange={handleChange}
						/>

						<Inputs
							clsName={style_F.data2}
							leyend="Fecha de nacimiento"
							name_="nacimiento"
							type_="date"
							handleChange={handleChange}
						/>

						<Inputs
							clsName={style_F.data2}
							leyend="Fecha de destete"
							name_="destete"
							type_="date"
							handleChange={handleChange}
						/>

						<Lists
							clsName={style_F.reason}
							leyend="Motivo de ingreso"
							name_="motivo"
							listar={SearchAll('motivo').props.children}
							handleChange={handleChange}
						/>
						{reason && <Dropdown motivo={reason} handleChange={handleChange} />}
					</div>
					<Buttons
						clsName={style_F.submit_}
						click_={handleSubmit}
						link_="/list"
						icon_="https://drive.google.com/uc?export=download&id=1Du8Dqva3ACRixsy8WnGdnCbQ6CagPq3n"
					/>
				</div>
			</div>
		</>
	);
}

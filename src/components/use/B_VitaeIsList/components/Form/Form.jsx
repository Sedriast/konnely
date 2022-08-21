import swal from 'sweetalert';
import Webcam from 'react-webcam';
import st from './css/Form.module.css';
import sendICO from '../../img/send.png';

import { useState } from 'react';
import { DropdownForm } from './DropdownForm';
import { DropdownDate } from './DropdownDate';
import { Modal } from '../0-GeneralComp/Modals/Modal';
import { Inputs } from '../0-GeneralComp/Inputs/Inputs';
import { Lists } from '../0-GeneralComp/List/Lists.jsx';
import { Buttons } from '../0-GeneralComp/Buttons/Buttons';
import { useModal } from '../0-GeneralComp/Modals/useModal';
import { SearchAll } from '../../firebase/funtions/SearchAll';
import { addImageAndInfo } from '../../firebase/funtions/AddInformation';

export function Form() {
	const genero = ['Género', 'Hembra', 'Macho'];
	const concepcion = ['Concepción', 'Monta natural', 'Inseminación artificial'];
	const [date, setDate] = useState();
	const [reason, setReason] = useState();
	const [image, setImage] = useState(null);
	const [values, setValues] = useState({});
	const [image_, setImage_] = useState(null);
	const [auxImage_, setAuxImage_] = useState(null);
	const [isOpenModal, openModal, closeModal] = useModal(false);

	function handleChange(e) {
		const { name, value } = e.target;
		if (e.target.name === 'motivo') {
			setReason(e.target.value);
			setValues({ ...values, [name]: value });
		} else if (e.target.name === 'nacimiento') {
			if (Date.now() - Date.parse(e.target.value) <= 0) {
				e.target.value = null;
				swal({
					title: 'A ingresado una fecha incorrecta',
					icon: 'error',
					button: 'aceptar',
				});
			} else {
				setDate(e.target.value);
				setValues({ ...values, [name]: value });
			}
		} else if (e.target.name === 'traslado') {
			if (Date.now() - Date.parse(e.target.value) <= 0) {
				e.target.value = null;
				swal({
					title: 'A ingresado una fecha incorrecta',
					icon: 'error',
					button: 'aceptar',
				});
			} else {
				setValues({ ...values, [name]: value });
			}
		} else {
			setValues({ ...values, [name]: value });
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addImageAndInfo({
			...values,
			image: image,
			lifecycle: [
				{
					etapa: 'Nacimiento',
					fecha: '****-**-**',
					peso: 'Sin datos',
				},
				{
					etapa: 'Lactancia',
					fecha: '****-**-**',
					peso: 'Sin datos',
				},
				{
					etapa: 'Levante',
					fecha: '****-**-**',
					peso: 'Sin datos',
				},
				{
					etapa: 'Engorde',
					fecha: '****-**-**',
					peso: 'Sin datos',
				},
				{
					etapa: 'Ceba',
					fecha: '****-**-**',
					peso: 'Sin datos',
				},
			],
		});
	};

	return (
		<>
			<div className={st.container}>
				<div className={st.panelImage}>
					<Inputs
						type_="file"
						HaveImage={(e) => {
							setImage(e);
							if (e === null) {
								setImage_(null);
								setAuxImage_(null);
							}
						}}
						Preview={image_}
					/>
					<Modal isOpen={isOpenModal} closeModal={closeModal}>
						{isOpenModal && (
							<>
								<Webcam audio={false} height={250} width={330} screenshotFormat="image/jpeg">
									{({ getScreenshot }) => (
										<button
											onClick={() => {
												const imageSrc = getScreenshot();
												setAuxImage_(imageSrc);
											}}
										>
											Capturar foto
										</button>
									)}
								</Webcam>
								<img src={auxImage_} alt=""></img>
								<button
									onClick={() => {
										setImage_(auxImage_);
										closeModal();
									}}
								>
									Aceptar
								</button>
							</>
						)}
					</Modal>
				</div>
				<div className={st.btnC}>
					<Buttons text_="Cámara" click_={openModal} link_="#" />
				</div>
				<div className={st.panel}>
					<Inputs
						leyend="Identificador"
						name_="id"
						placeholder_="Ingrese el identificador"
						type_="text"
						handleChange={handleChange}
					/>

					<Lists leyend="Género" name_="genero" listar={genero} handleChange={handleChange} />

					<Lists
						leyend="Raza"
						name_="raza"
						listar={SearchAll('raza').props.children}
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Porcentaje de pureza"
						name_="porcentaje"
						placeholder_="Procentaje de pureza"
						type_="text"
						handleChange={handleChange}
					/>
					<Lists
						leyend="Concepción"
						name_="concepcion"
						listar={concepcion}
						handleChange={handleChange}
					/>
					<Inputs
						leyend="Fecha de nacimiento"
						name_="nacimiento"
						type_="date"
						handleChange={handleChange}
					/>
					{date && <DropdownDate date={date} handleChange={handleChange} />}
					<Lists
						leyend="Motivo de ingreso"
						name_="motivo"
						listar={SearchAll('motivo').props.children}
						handleChange={handleChange}
					/>
					{reason && <DropdownForm motivo={reason} handleChange={handleChange} />}
				</div>
				<div className={st.submit}>
					<Buttons click_={handleSubmit} link_="/list" icon_={sendICO} />
				</div>
			</div>
		</>
	);
}
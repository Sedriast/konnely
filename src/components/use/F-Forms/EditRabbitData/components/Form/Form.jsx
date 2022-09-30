import Webcam from 'react-webcam';
import st from './Form.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faCamera } from '@fortawesome/free-solid-svg-icons';

import { useModal } from '../../../../0-GeneralComp/0-StaticData/Modals/useModal';
import { EditImageAndInfo } from '../../../../../firebase/funtions/AddInformation';
import { recuperar } from '../../../../0-GeneralComp/0-StaticData/dataProv';

import { DropdownForm } from './components/DropdownForm';
import { Modal } from '../../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { Lists } from '../../../../0-GeneralComp/1-List/Lists';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { conditionalBasis } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { GetDocument } from '../../../../../firebase/funtions/GetDocument';

export function Form() {
	const navigate = useNavigate();
	const genero = ['Género', 'Hembra', 'Macho'];
	const concepcion = ['Concepción', 'Monta natural', 'Inseminación artificial'];
	const [reason, setReason] = useState();
	const [image, setImage] = useState(null);
	const [values, setValues] = useState({});
	const [image_, setImage_] = useState(null);
	const [auxImage_, setAuxImage_] = useState(null);
	const [isOpenModal, openModal, closeModal] = useModal(false);

	const updateState = (name, value) => {
		if (name === 'nacimiento') {
			setValues({ ...values, [name]: value });
		} else if (name === 'motivo') {
			setReason(value);
			setValues({ ...values, [name]: value });
		} else {
			setValues({ ...values, [name]: value });
		}
	};

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === 'motivo') {
			updateState(name, value);
		} else if (name === 'nacimiento') {
			e.target.value = conditionalBasis(updateState, name, value);
		} else if (name === 'traslado') {
			e.target.value = conditionalBasis(updateState, name, value);
		} else {
			updateState(name, value);
		}
	}
	const handleSubmit = (aux) => {
		EditImageAndInfo({
			...aux,
			uid: recuperar.info.uid,
			image: image,
		});
		recuperar(values.id);
	};
	useEffect(() => {
		if (recuperar.id !== null) {
			setImage_(recuperar.info.url);
			setReason(recuperar.info.motivo);
		} else {
			navigate('/vitaeslist');
			return null;
		}
	}, [navigate]);
	return (
		<>
			{recuperar.id !== null && (
				<div className={st.container}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							let aux = {};
							for (const element of e.target) {
								if (element.name !== '') {
									aux = { ...aux, [element.name]: element.value };
								}
							}
							handleSubmit(aux);
						}}
					>
						<div className={st.panelContainer}>
							<div className={st.panelInpImg}>
								<div className={st.panelImage}>
									<Inputs
										type="file"
										HaveImage={(e) => {
											setImage(e);
											if (e === null) {
												setImage_(null);
												setAuxImage_(null);
											}
										}}
										preeview={image_}
									/>
									<Modal isOpen={isOpenModal} closeModal={closeModal}>
										{isOpenModal && (
											<>
												<Webcam
													audio={false}
													height={250}
													width={330}
													screenshotFormat="image/jpeg"
												>
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
									<Buttons
										direction="bottom"
										label="Cámara"
										btnIconText={faCamera}
										btnClick={openModal}
										route="#"
									/>
								</div>
							</div>
							<div className={st.panel}>
								<Inputs
									value={recuperar?.id}
									leyend="Identificador"
									name="id"
									placeholder="Ingrese el identificador"
									type="number"
									inputmode="numeric"
									handleChange={handleChange}
								/>
								<Lists
									value_={recuperar?.info?.genero}
									leyend="Género"
									name_="genero"
									listar={genero}
									handleChange={handleChange}
								/>
								<Lists
									value_={recuperar?.info?.raza}
									leyend="Raza"
									name_="raza"
									listar={
										GetDocument({ coleccion: 'lists', list: 'races' }).props.children[0].values
									}
									handleChange={handleChange}
								/>
								<Inputs
									value={recuperar?.info?.porcentaje}
									leyend="Porcentaje de pureza"
									name="porcentaje"
									placeholder="Procentaje de pureza"
									type="number"
									inputmode="numeric"
									handleChange={handleChange}
								/>
								<Lists
									value_={recuperar?.info?.concepcion}
									leyend="Concepción"
									name_="concepcion"
									listar={concepcion}
									handleChange={handleChange}
								/>
								<Inputs
									value={recuperar?.info?.nacimiento}
									leyend="Fecha de nacimiento"
									name="nacimiento"
									type="date"
									handleChange={handleChange}
								/>
								{/* {date && <DropdownDate date={date} handleChange={handleChange} />} */}
								<Lists
									value_={recuperar?.info?.motivo}
									leyend="Motivo de ingreso"
									name_="motivo"
									listar={
										GetDocument({ coleccion: 'lists', list: 'reasons' }).props.children[0].values
									}
									handleChange={handleChange}
								/>
								{reason && <DropdownForm motivo={reason} handleChange={handleChange} />}
							</div>
							<div className={st.submit}>
								{/* <Buttons
                                    direction='bottom'
                                    label='Guardar'
                                    btnClick={handleSubmit}
                                    route='/vitaeslist'
									btnIconText={faPaperPlane}
								/> */}
								<button type="Submit">Hola</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	);
}

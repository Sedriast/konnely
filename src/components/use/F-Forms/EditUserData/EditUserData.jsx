import st from './styles/EditUserData.module.css';
import Webcam from 'react-webcam';

import { useState } from 'react';

import { faCamera, faBackward } from '@fortawesome/free-solid-svg-icons';

import { useModal } from '../../0-GeneralComp/0-StaticData/Modals/useModal';
import { Modal } from '../../0-GeneralComp/0-StaticData/Modals/Modal';
import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { Inputs } from '../../0-GeneralComp/1-Inputs/Inputs';

export function EditUserData({ dataUser }) {
	const [image, setImage] = useState(null);
	console.log(image);
	const [image_, setImage_] = useState(null);
	const [auxImage_, setAuxImage_] = useState(null);
	const [isOpenModal, openModal, closeModal] = useModal(false);

	return (
		<div className={st.container}>
			<div className={st.leftMenu}>
				<div className={st.btnBack}>
					<Buttons route="/users" btnIconText={faBackward} label="Atrás" />
				</div>
			</div>
			<div className={st.container_}>
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
								preview={image_}
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
							<Buttons
								direction="bottom"
								label="Cámara"
								btnIconText={faCamera}
								btnClick={openModal}
								route="#"
							/>
						</div>
					</div>
					<form
						className={st.panelContainer_}
						onSubmit={(e) => {
							e.preventDefault();
							// handleSubmit({ email: e.target.email.value, password: e.target.password.value });
						}}
					>
						<div className={st.inpCont}>
							<h3>Nombre de usuario</h3>
							<input name="userName" type="text" />
						</div>
						<div className={st.inpCont}>
							<h3>Nombres</h3>
							<input name="name" type="text" />
						</div>
						<div className={st.inpCont}>
							<h3>Apellidos</h3>
							<input name="lastName" type="text" />
						</div>
						<div className={st.inpCont}>
							<h3>Id Intitucional</h3>
							<input name="idIns" type="number" min="1" pattern="^[0-9]+" />
						</div>
						<div className={st.inpCont}>
							<h3>Número telefónico</h3>
							<input name="noTel" type="number" min="1" pattern="^[0-9]+" />
						</div>
						<div className={st.inpContEm}>
							<h3>Correo electronico</h3>
							<input name="email" type="text" /> @ucundinamarca.edu.co
						</div>
						<div className={st.inpCont}>
							<h3>Contraseña</h3>
							<input name="password" type="password" />
						</div>
						<div className={st.submit}>
							<button type="submit">Guardar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

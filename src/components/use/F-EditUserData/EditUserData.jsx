import st from './styles/EditUserData.module.css';
import Webcam from 'react-webcam';

import { useState } from 'react';

import { useModal } from '../0-GeneralComp/0-Modals/useModal';
import { Modal } from '../0-GeneralComp/0-Modals/Modal';
import { Buttons } from '../0-GeneralComp/F-Buttons/Buttons';
import { Inputs } from '../0-GeneralComp/F-Inputs/Inputs';

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
					<Buttons route="/users" btnIconText="🔙" label="Atrás" />
				</div>
			</div>
			<div className={st.container_}>
				<div className={st.panelContainer}>
					<div className={st.panelInpImg}>
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
							<Buttons
								direction="bottom"
								label="Cámara"
								btnIconText="📷"
								btnClick={openModal}
								route="#"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

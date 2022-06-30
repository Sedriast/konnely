import { useState } from "react";
import Webcam from "react-webcam";
import { Modal } from "../Tools/Modals/Modal";
import { useModal } from "../Tools/Modals/useModal";

export const ModalCamera = () => {
    const [image, setImage] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {isOpenModal && (
                    <>
                        <Webcam
                            audio={false}
                            height={250}
                            width={330}
                            screenshotFormat="image/jpeg">
                            {({ getScreenshot }) => (
                                <button
                                    onClick={() => {
                                        const imageSrc = getScreenshot();
                                        setImage(imageSrc);
                                    }}>
                                    Capturar foto
                                </button>
                            )}
                        </Webcam>
                        <img src={image}></img>
                    </>
                )}
            </Modal>
        </>
    );
};

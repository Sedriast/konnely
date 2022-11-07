import st from './Form.module.css';

import Webcam from 'react-webcam';
import swal from 'sweetalert';

import { useEffect, useState } from 'react';

import { faCamera, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

import { useModal } from '../../../../0-GeneralComp/0-StaticData/Modals/useModal';
import { Modal } from '../../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { userData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { useNavigate } from 'react-router-dom';

import { EditImageAndInfoUser } from '../../../../../firebase/funtions/AddInformation';
import { useAuth } from '../../../../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Form() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [image_, setImage_] = useState(null);
    const [auxImage_, setAuxImage_] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const hf = () => {
        console.log('Hola');
    };
    const handleSubmit = (aux) => {
        swal({
            title: 'Despues actualizar la información de este usuario, se debe recargar la aplicación para poder observar los cambios. ¿Desea realizar esta acción?',
            icon: 'warning',
            buttons: ['No', 'Si'],
        }).then((respuesta) => {
            if (respuesta) {
                EditImageAndInfoUser({
                    ...aux,
                    perfil: user.uid,
                    uid: userData.info.uid,
                    photoAux: userData.info.photo,
                    image: image,
                });
                navigate('/vitaeslist');
            }
        });
        if (user.displayName === userData.info.user) {
            setTimeout(reloadPage, 2500);
        }
    };
    function reloadPage() {
        window.location.reload(true);
    }
    useEffect(() => {
        if (userData.info !== null) {
            setImage_(userData.info.photo);
        } else {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <>
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
                }}>
                <div className={st.panelContainer}>
                    <div className={st.panelInpImg}>
                        <div className={st.panelImage}>
                            <Inputs
                                type='file'
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
                                            screenshotFormat='image/jpeg'>
                                            {({ getScreenshot }) => (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const imageSrc = getScreenshot();
                                                        setAuxImage_(imageSrc);
                                                    }}>
                                                    Capturar foto
                                                </button>
                                            )}
                                        </Webcam>
                                        <img src={auxImage_} alt=''></img>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setImage_(auxImage_);
                                                closeModal();
                                            }}>
                                            Aceptar
                                        </button>
                                    </>
                                )}
                            </Modal>
                        </div>
                        <br />
                        <br />
                        <div className={st.btnC}>
                            <Buttons
                                direction='bottom'
                                label='Cámara'
                                btnIconText={faCamera}
                                btnClick={openModal}
                                route='#'
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={st.panel}>
                        <br />
                        {userData.info.user}@ucundinamarca.edu.co <br />
                        <br />
                        <Inputs
                            name='code'
                            type='number'
                            leyend='Id institucional'
                            min='1'
                            pattern='^[0-9]+'
                            value={userData.info.code}
                            handleChange={hf}
                        />
                        <Inputs
                            name='names'
                            type='text'
                            leyend='Nombres'
                            value={userData.info.names}
                            handleChange={hf}
                        />
                        <Inputs
                            name='lastNames'
                            type='text'
                            leyend='Apellidos'
                            value={userData.info.lastNames}
                            handleChange={hf}
                        />
                        <Inputs
                            name='phone'
                            type='number'
                            leyend='Número telefónico'
                            min='1'
                            pattern='^[0-9]+'
                            value={userData.info.phone}
                            handleChange={hf}
                        />
                    </div>

                    <div className={st.submit}>
                        <button type='submit'>
                            <figure title='Guardar cambios' tooltip-dir='top'>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </figure>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

import st from './EditUserData.module.css';
import Webcam from 'react-webcam';

import { useEffect, useState } from 'react';

import { faCamera, faBackward, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

import { useModal } from '../../0-GeneralComp/0-StaticData/Modals/useModal';
import { Modal } from '../../0-GeneralComp/0-StaticData/Modals/Modal';
import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { Inputs } from '../../0-GeneralComp/1-Inputs/Inputs';
import { userData } from '../../0-GeneralComp/0-StaticData/dataProv';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { EditImageAndInfoUser } from '../../../firebase/funtions/AddInformation';
import { useAuth } from '../../../../context/AuthContext';

export function EditUserData() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [image_, setImage_] = useState(null);
    const [auxImage_, setAuxImage_] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const handleSubmit = (aux) => {
        swal({
            title: 'Despues cambiar la información de este conejo, se debe dirigir a la lista general para ver los cambios. ¿Desea actualizar?',
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
                if (user.displayName === userData.info.user) {
                    setTimeout(reloadPage, 1000);
                }
            }
        });
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
        <div className={st.container}>
            <div className={st.leftMenu}>
                <div className={st.btnBack}>
                    <Buttons route='/users' btnIconText={faBackward} label='Atrás' />
                </div>
            </div>
            <div className={st.container_}>
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
                                                    onClick={() => {
                                                        const imageSrc = getScreenshot();
                                                        setAuxImage_(imageSrc);
                                                    }}>
                                                    Capturar foto
                                                </button>
                                            )}
                                        </Webcam>
                                        <img src={auxImage_} alt=''></img>
                                        <button
                                            onClick={() => {
                                                setImage_(auxImage_);
                                                closeModal();
                                            }}>
                                            Aceptar
                                        </button>
                                    </>
                                )}
                            </Modal>
                        </div>
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
                    <form
                        className={st.panelContainer_}
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
                        <div className={st.inpCont}>
                            <h3>Nombre de usuario</h3>
                            <input defaultValue={userData.info.user} name='user' type='text' />
                        </div>
                        <div className={st.inpCont}>
                            <h3>Nombres</h3>
                            <input defaultValue={userData.info.names} name='names' type='text' />
                        </div>
                        <div className={st.inpCont}>
                            <h3>Apellidos</h3>
                            <input defaultValue={userData.info.lastNames} name='lastNames' type='text' />
                        </div>
                        <div className={st.inpCont}>
                            <h3>Id Intitucional</h3>
                            <input
                                defaultValue={userData.info.code}
                                name='code'
                                type='number'
                                min='1'
                                pattern='^[0-9]+'
                            />
                        </div>
                        <div className={st.inpCont}>
                            <h3>Número telefónico</h3>
                            <input
                                defaultValue={userData.info.phone}
                                name='phone'
                                type='number'
                                min='1'
                                pattern='^[0-9]+'
                            />
                        </div>
                        <div className={st.inpContEm}>
                            <h3>Correo electronico</h3>
                            <input defaultValue={userData.info.user} name='email' type='text' />{' '}
                            @ucundinamarca.edu.co
                        </div>

                        <div className={st.submit}>
                            <Buttons direction='bottom' label='Guardar' btnIconText={faFloppyDisk} route='#' />
                            <button type='Submit'>Hola</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

import swal from 'sweetalert';
import Webcam from 'react-webcam';
import st from './Form.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { basicData, recuperar } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { useModal } from '../../../../0-GeneralComp/0-StaticData/Modals/useModal';
import { EditImageAndInfo } from '../../../../../firebase/funtions/AddInformation';

import { DropdownForm } from './components/DropdownForm';
import { Lists } from '../../../../0-GeneralComp/1-List/Lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { GetDocument, SearchAll } from '../../../../../firebase/funtions/GetInformation';
import { Modal } from '../../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { conditionalBasisEdit } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';

export function Form() {
    const navigate = useNavigate();
    const [reason, setReason] = useState();
    const [image, setImage] = useState(null);
    const [image_, setImage_] = useState(null);
    const [auxImage_, setAuxImage_] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const coleccionInfo = SearchAll({ coleccion: 'rabbits' }).props.children;

    const buscar = (e) => {
        let valor = false;
        if (e !== '' && e !== null && e !== undefined && e !== basicData?.id) {
            coleccionInfo.filter(function (element) {
                if (element.id.toLowerCase().includes(e.toLowerCase()) && element.estado !== 'Inactivo') {
                    valor = true;
                }
                return false;
            });
            return valor;
        }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'motivo') {
            setReason(value);
        } else if (name === 'nacimiento') {
            e.target.value = conditionalBasisEdit(value, basicData?.info?.nacimiento);
        } else if (name === 'traslado') {
            e.target.value = conditionalBasisEdit(value, basicData?.info?.traslado);
        }
    }
    const handleSubmit = (aux) => {
        if (!buscar(aux.id)) {
            swal({
                title: 'Despues cambiar la información de este conejo, se debe dirigir a la lista general para ver los cambios. ¿Desea actualizar?',
                icon: 'warning',
                buttons: ['No', 'Si'],
            }).then(async (respuesta) => {
                if (respuesta) {
                    await EditImageAndInfo({
                        ...aux,
                        uid: basicData?.info?.uid,
                        image: image,
                    }).then(() => {
                        recuperar(aux.id);
                        swal({
                            title: 'Se ha actualizado la información con éxito',
                            icon: 'success',
                            button: 'Aceptar',
                        }).then(() => {
                            window.history.back();
                        });
                    });
                }
            });
        } else {
            swal({
                title: 'Ya existe un conejo con este identificador',
                icon: 'error',
                button: 'Aceptar',
            });
        }
    };
    useEffect(() => {
        if (basicData.id !== null) {
            setImage_(basicData?.info?.url);
            setReason(basicData?.info?.motivo);
        } else {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <>
            {basicData.id !== null && (
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
                            <Inputs
                                value={basicData?.id}
                                leyend='Identificador'
                                name='id'
                                placeholder='Ingrese el identificador'
                                type='number'
                                inputmode='numeric'
                                handleChange={handleChange}
                            />
                            <Lists
                                value_={basicData?.info?.genero}
                                leyend='Género'
                                name_='genero'
                                listar={
                                    GetDocument({ coleccion: 'lists', list: 'gender' }).props.children[0].values
                                }
                                handleChange={handleChange}
                            />
                            <Lists
                                value_={basicData?.info?.raza}
                                leyend='Raza'
                                name_='raza'
                                listar={GetDocument({ coleccion: 'lists', list: 'races' }).props.children[0].values}
                                handleChange={handleChange}
                            />
                            <Inputs
                                value={basicData?.info?.porcentaje}
                                leyend='Porcentaje de pureza'
                                name='porcentaje'
                                placeholder='Procentaje de pureza'
                                type='number'
                                inputmode='numeric'
                                handleChange={handleChange}
                            />
                            <Lists
                                value_={basicData?.info?.concepcion}
                                leyend='Concepción'
                                name_='concepcion'
                                listar={
                                    GetDocument({ coleccion: 'lists', list: 'conception' }).props.children[0].values
                                }
                                handleChange={handleChange}
                            />
                            <Inputs
                                value={basicData?.info?.nacimiento}
                                leyend='Fecha de nacimiento'
                                name='nacimiento'
                                type='date'
                                handleChange={handleChange}
                            />
                            <Lists
                                placeholder='Motivo de ingreso'
                                value_={basicData?.info?.motivo}
                                leyend='Motivo de ingreso'
                                name_='motivo'
                                listar={
                                    GetDocument({ coleccion: 'lists', list: 'reasons' }).props.children[0].values
                                }
                                handleChange={handleChange}
                            />
                            {reason && <DropdownForm motivo={reason} handleChange={handleChange} />}
                        </div>
                        <div className={st.submit}>
                            <button type='submit'>
                                <figure title='Guardar cambios' tooltip-dir='top'>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </figure>
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}

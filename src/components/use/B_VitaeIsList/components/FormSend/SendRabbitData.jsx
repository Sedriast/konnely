import swal from 'sweetalert';
import Webcam from 'react-webcam';
import st from './SendRabbitData.module.css';

import { useState } from 'react';

import { faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useModal } from '../../../0-GeneralComp/0-Modals/useModal';
import { addImageAndInfo } from '../../../../firebase/funtions/AddInformation';
import { recuperar } from '../../../C_DataView/scripts/dataProv';
import { SearchAll } from '../../../../firebase/funtions/SearchAll';
import { Approximate } from '../../../0-GeneralComp/0-Dates/Dates';

import { DropdownForm } from './components/DropdownForm';
import { DropdownDate } from './components/DropdownDate';
import { Modal } from '../../../0-GeneralComp/0-Modals/Modal';
import { Inputs } from '../../../0-GeneralComp/F-Inputs/Inputs';
import { Lists } from '../../../0-GeneralComp/F-List/Lists';
import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';

export function SendRabbitData() {
    const genero = ['Género', 'Hembra', 'Macho'];
    const concepcion = ['Concepción', 'Monta natural', 'Inseminación artificial'];
    const [date, setDate] = useState();
    const [reason, setReason] = useState();
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({});
    const [approximate, setApproximate] = useState({});
    const [image_, setImage_] = useState(null);
    const [auxImage_, setAuxImage_] = useState(null);
    const [isOpenModal, openModal, closeModal] = useModal(false);

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'motivo') {
            setReason(value);
            setValues({ ...values, [name]: value });
        } else if (e.target.name === 'nacimiento') {
            if (Date.now() - 43200000 - Date.parse(value) <= 0) {
                e.target.value = null;
                swal({
                    title: 'A ingresado una fecha incorrecta',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                setApproximate(Approximate(value));
                setDate(value);
                setValues({ ...values, [name]: value });
            }
        } else if (name === 'traslado') {
            if (Date.now() - 43200000 - Date.parse(value) <= 0) {
                e.target.value = null;
                swal({
                    title: 'A ingresado una fecha incorrecta',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                setValues({ ...values, [name]: value });
            }
        } else if (name === 'levantefin') {
            if (
                Date.now() - 43200000 - Date.parse(value) <= 0 ||
                Date.parse(value) - Date.parse(values.nacimiento) <= 0
            ) {
                e.target.value = null;
                swal({
                    title: 'A ingresado una fecha incorrecta',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                setValues({ ...values, [name]: value });
            }
        } else if (name === 'engordefin') {
            if (Date.now() - 43200000 - Date.parse(value) <= 0) {
                e.target.value = null;
                swal({
                    title: 'A ingresado una fecha incorrecta',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else if (Date.parse(value) - Date.parse(values.levantefin) <= 0 || !values.levantefin) {
                e.target.value = null;
                swal({
                    title: 'No se puede asignar esa fecha a la finalización de esta etapa',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                setValues({ ...values, [name]: value });
            }
        } else if (name === 'cebafin') {
            if (Date.now() - 43200000 - Date.parse(value) <= 0) {
                e.target.value = null;
                swal({
                    title: 'A ingresado una fecha incorrecta',
                    icon: 'error',
                    button: 'aceptar',
                });
            } else if (Date.parse(value) - Date.parse(values.engordefin) <= 0 || !values.engordefin) {
                e.target.value = null;
                swal({
                    title: 'Primero ingrese una fecha de finalización de la fase de engorde',
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

    const handleSubmit = () => {
        addImageAndInfo({
            ...values,
            image: image,
            lifecycle: [
                {
                    stage: 'Nacimiento',
                    state: 'id de la camada',
                    approDate: null,
                    date: values.nacimiento,
                    weigth: 'Sin datos',
                },
                {
                    stage: 'Levante',
                    state: null,
                    approDate: approximate.raised,
                    date: '****-**-**',
                    weigth: 'Sin datos',
                },
                {
                    stage: 'Engorde',
                    state: null,
                    approDate: approximate.fattening,
                    date: '****-**-**',
                    weigth: 'Sin datos',
                },
                {
                    stage: 'Ceba',
                    state: null,
                    approDate: approximate.ceba,
                    date: '****-**-**',
                    weigth: 'Sin datos',
                },
            ],
        });
        recuperar(values.id);
    };

    return (
        <>
            <div className={st.container}>
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
                                preview={image_}
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

                    <div className={st.panel}>
                        <Inputs
                            leyend='Identificador'
                            name='id'
                            placeholder='Ingrese el identificador'
                            type='number'
                            inputmode='numeric'
                            handleChange={handleChange}
                        />
                        <Lists leyend='Género' name_='genero' listar={genero} handleChange={handleChange} />
                        <Lists
                            leyend='Raza'
                            name_='raza'
                            listar={SearchAll('raza').props.children}
                            handleChange={handleChange}
                        />
                        <Inputs
                            leyend='Porcentaje de pureza'
                            name='porcentaje'
                            placeholder='Procentaje de pureza'
                            type='number'
                            inputmode='numeric'
                            min='1'
                            max='100'
                            step='0.1'
                            handleChange={handleChange}
                        />
                        <Lists
                            leyend='Concepción'
                            name_='concepcion'
                            listar={concepcion}
                            handleChange={handleChange}
                        />
                        <Inputs
                            leyend='Fecha de nacimiento'
                            name='nacimiento'
                            type='date'
                            handleChange={handleChange}
                        />
                        {date && <DropdownDate date={date} handleChange={handleChange} />}
                        <Lists
                            leyend='Motivo de ingreso'
                            name_='motivo'
                            listar={SearchAll('motivo').props.children}
                            handleChange={handleChange}
                        />
                        {reason && <DropdownForm motivo={reason} handleChange={handleChange} />}
                    </div>
                    <div className={st.submit}>
                        <Buttons
                            direction='bottom'
                            label='Enviar'
                            btnClick={handleSubmit}
                            route='/vitaeslist'
                            btnIconText={faPaperPlane}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

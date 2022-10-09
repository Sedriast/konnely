import st from './Cards.module.css';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';
import swal from 'sweetalert';
import { Modal } from '../../../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { useModal } from '../../../../../0-GeneralComp/0-StaticData/Modals/useModal';

export function Cards({ id, date, signs, diagnosis, tratament, result, professional }) {
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
        <div className={st.container} id={id}>
            <div className={st.panelId}>Tratamiento: {id}</div>
            <div className={st.btnPanel}>
                <div>
                    <Buttons route='/EditTrats' label='Editar' direction='bottom' btnIconText={faPen} />
                </div>
                <div>
                    <Buttons
                        route='#'
                        label='Eliminar'
                        direction='bottom'
                        btnIconText={faTrash}
                        btnClick={() => {
                            swal({
                                title: '¿Desea eliminar este tratamiento?',
                                icon: 'warning',
                                buttons: ['No', 'Si'],
                            }).then((respuesta) => {
                                if (respuesta) {
                                    openModal();
                                }
                            });
                        }}
                    />
                </div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {isOpenModal && (
                    <>
                        <input type='text' placeholder='Porque desea eliminar este tratamiento'></input>
                    </>
                )}
            </Modal>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <div className={st.panelInfo}>
                <div className={st.sp}>
                    Fecha:
                    <br />
                    <div>{date}</div>
                </div>
                <div className={st.sp}>
                    Sintomas:
                    <br />
                    <div>{signs}</div>
                </div>
                <div className={st.sp}>
                    Diagnostico:
                    <br />
                    <div>{diagnosis}</div>
                </div>
                <div className={st.sp}>
                    Tratamiento:
                    <br />
                    <div>{tratament}</div>
                </div>
                <div className={st.sp}>
                    Resultados:
                    <br />
                    <div>{result}</div>
                </div>
                <div className={st.sp}>
                    Nombre del profecional:
                    <br />
                    <div>{professional}</div>
                </div>
            </div>
        </div>
    );
}

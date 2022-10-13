import st from './Cards.module.css';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';
import swal from 'sweetalert';
import { Modal } from '../../../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { useModal } from '../../../../../0-GeneralComp/0-StaticData/Modals/useModal';
import { useAuth } from '../../../../../../../context/AuthContext';
import { useState } from 'react';
import { AddAudit } from '../../../../../../firebase/funtions/AddInformation';
import { recuperarTrataments } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function Cards({ id, uid, date, signs, diagnosis, tratament, result, professional, trataments }) {
    const { user } = useAuth();
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [auditoria, setAuditoria] = useState('');

    return (
        <div className={st.container} id={id}>
            <div className={st.panelId}>Tratamiento {id}</div>
            <div className={st.btnPanel}>
                <div>
                    <Buttons
                        route='/EditTrats'
                        label='Editar'
                        direction='bottom'
                        btnIconText={faPen}
                        btnClick={(e) => {
                            e.preventDefault();
                            recuperarTrataments(trataments);
                        }}
                    />
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
                        <br />
                        ¿Porque desea eliminar este tratamiento?
                        <br />
                        <br />
                        <textarea
                            className={st.inpModal}
                            defaultValue={auditoria}
                            type='text'
                            placeholder='Porque desea eliminar este tratamiento'
                            onChange={(e) => {
                                e.preventDefault();
                                setAuditoria(e.target.value);
                            }}></textarea>
                        <button
                            className={st.btnModal}
                            onClick={(e) => {
                                e.preventDefault();
                                if (auditoria !== '') {
                                    AddAudit({
                                        razon: auditoria,
                                        uidTratament: uid,
                                        uidProfile: user.uid,
                                        userNameProfile: user.displayName,
                                        fecha: Date.now(),
                                    });
                                    setAuditoria('');
                                }
                                closeModal();
                            }}>
                            Enviar
                        </button>
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

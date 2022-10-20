import st from './Login.module.css';

import swal from 'sweetalert';

import { useAuth } from '../../../../../context/AuthContext';
import { ValidationErrors } from '../../scripts/ValidationErrors';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../0-GeneralComp/0-StaticData/Modals/Modal';
import { useModal } from '../../../0-GeneralComp/0-StaticData/Modals/useModal';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();
    const { login, resetPassword, user } = useAuth();
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [reset, setReset] = useState('');
    if (user) {
        navigate('/vitaeslist');
    }

    const handleSubmit = async (e) => {
        try {
            await login(e.email + '@ucundinamarca.edu.co', e.password).then(() => {
                navigate('/vitaeslist');
            });
        } catch (error) {
            ValidationErrors(error.code);
        }
    };

    return (
        <>
            <div className={st.container}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit({ email: e.target.email.value, password: e.target.password.value });
                    }}>
                    <Modal isOpen={isOpenModal} closeModal={closeModal}>
                        {isOpenModal && (
                            <>
                                <input
                                    type='email'
                                    defaultValue={reset}
                                    placeholder='Digite su correo electronico'
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setReset(e.target.value);
                                    }}
                                />
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        if (reset.includes('@') && reset !== '') {
                                            await resetPassword(reset);
                                            setReset('');
                                            closeModal();
                                            swal({
                                                title: 'A su correo electronico se ha enviado un enlace con el que puede cambiar su contraseña',
                                                icon: 'error',
                                                button: 'aceptar',
                                            });
                                        } else if (reset === '') {
                                            closeModal();
                                        } else {
                                            setReset('');
                                            swal({
                                                title: 'Digite un correo electronico valido',
                                                icon: 'error',
                                                button: 'aceptar',
                                            });
                                        }
                                    }}>
                                    Enviar
                                </button>
                            </>
                        )}
                    </Modal>
                    <div className={st.inpCont}>
                        <h3>Usuario institucional</h3>
                        <input name='email' type='text' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Contraseña</h3>
                        <input name='password' type='password' />
                    </div>
                    <div className={st.submit}>
                        <button type='submit'>Iniciar sesión</button>
                    </div>
                    <div className={st.forgot}>
                        <a href='/#' onClick={() => openModal()}>
                            Olvide mi contraseña
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}

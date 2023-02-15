import st from './Login.module.css';

import swal from 'sweetalert';

import { useAuth } from '../../../../../context/AuthContext';
import { ValidationErrors } from '../../../0-GeneralComp/0-Scripts/ValidationErrors';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const navigate = useNavigate();
    const { login, resetPassword, user } = useAuth();
    const [cnsST1, setCNSST1] = useState(true);
    const [cnsST2, setCNSST2] = useState(true);
    if (user) {
        navigate('/vitaeslist');
    }

    const handleSubmit = async (e) => {
        try {
            if (e.email.includes('@ucundinamarca.edu.co')) {
                await login(e.email, e.password).then(() => {
                    navigate('/vitaeslist');
                });
            } else {
                await login(e.email + '@ucundinamarca.edu.co', e.password).then(() => {
                    navigate('/vitaeslist');
                });
            }
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
                    <div className={st.inpCont}>
                        <h3 className={cnsST1 ? st.lblInac : st.lblAc}>Usuario institucional</h3>
                        <input
                            id='email'
                            name='email'
                            type='text'
                            onFocus={() => {
                                setCNSST1(false);
                            }}
                            onBlur={() => {
                                if (document.getElementById('email').value === '') {
                                    setCNSST1(true);
                                }
                            }}
                        />
                    </div>
                    <div className={st.inpCont}>
                        <h3 className={cnsST2 ? st.lblInac : st.lblAc}>Contraseña</h3>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            onFocus={() => {
                                setCNSST2(false);
                            }}
                            onBlur={() => {
                                if (document.getElementById('password').value === '') {
                                    setCNSST2(true);
                                }
                            }}
                        />
                    </div>
                    <br />
                    <br />
                    <div className={st.submit}>
                        <button type='submit'>Iniciar sesión</button>
                    </div>
                    <div className={st.forgot}>
                        <a
                            href='/#'
                            onClick={() => {
                                swal('Ingrese su correo electronico', {
                                    content: {
                                        element: 'input',
                                        attributes: {
                                            placeholder: 'Email',
                                            type: 'text',
                                        },
                                    },
                                    button: {
                                        text: 'Aceptar',
                                    },
                                }).then(async (value) => {
                                    if (value !== null || value !== '') {
                                        if (value?.includes('@')) {
                                            try {
                                                await resetPassword(value).then(() => {
                                                    swal({
                                                        title: 'A su correo electronico se ha enviado un enlace con el que puede cambiar su contraseña',
                                                        icon: 'success',
                                                        button: 'aceptar',
                                                    });
                                                });
                                            } catch (error) {
                                                ValidationErrors(error.code);
                                            }
                                        } else {
                                            swal({
                                                title: 'Digite un correo electronico valido',
                                                icon: 'error',
                                                button: 'aceptar',
                                            });
                                        }
                                    }
                                });
                            }}>
                            Olvide mi contraseña
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}

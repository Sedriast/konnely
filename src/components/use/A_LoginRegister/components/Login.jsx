import st from '../styles/Login.module.css';

import { useAuth } from '../../../../context/AuthContext';
import { ValidationErrors } from '../scripts/ValidationErrors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const { login, user } = useAuth();

    const handleSubmit = async (e) => {
        try {
            await login(e.email, e.password);
        } catch (error) {
            console.log(error);
            ValidationErrors(error.code);
        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else if (user && user.emailVerified) {
            navigate('/vitaeslist');
        }
    }, [navigate, user]);

    return (
        <>
            <div className={st.container}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit({ email: e.target.email.value, password: e.target.password.value });
                    }}>
                    <div className={st.inpCont}>
                        <h3>Correo electronico</h3>
                        <input name='email' type='email' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Contraseña</h3>
                        <input name='password' type='password' />
                    </div>
                    <div className={st.submit}>
                        <button type='submit'>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </>
    );
}

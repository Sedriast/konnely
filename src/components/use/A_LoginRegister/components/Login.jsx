import st from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../context/AuthContext';
import { ValidationErrors } from '../scripts/ValidationErrors';

export function Login() {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            await login(e.email, e.password);
            console.log(user);
            navigate('/vitaeslist');
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

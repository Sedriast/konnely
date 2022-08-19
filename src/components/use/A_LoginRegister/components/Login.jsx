import st from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../context/AuthContext';
import { ValidationErrors } from '../scripts/ValidationErrors';

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            await login(e.email, e.password);
            navigate('/list');
        } catch (error) {
            ValidationErrors(error.code);
        }
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit({ email: e.target.email.value, password: e.target.password.value });
                }}>
                <div className={st.container}>
                    <div className={st.inpCont}>
                        {/* <Inputs
                            name_='email'
                            type_='email'
                            leyend='Correo electrónico'
                            handleChange={handleChange}
                        /> */}
                        <input name='email' type='email' />
                    </div>
                    <div className={st.inpCont}>
                        {/* <Inputs name_='password' type_='password' leyend='Contraseña' handleChange={handleChange} /> */}
                        <input name='password' type='password' />
                    </div>
                    <div className={st.submit}>
                        <button type='submit'>Iniciar sesión</button>
                        {/* <Buttons text_='Iniciar sesión' link_='#' click_={handleSubmit} /> */}
                    </div>
                </div>
            </form>
        </>
    );
}

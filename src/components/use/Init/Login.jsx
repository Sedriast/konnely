import st from './css/Login.module.css';

import { useNavigate } from 'react-router-dom';
import { ValidationErrors } from './ValidationErrors';
import { useAuth } from '../../../context/AuthContext';

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
                    {/* <Inputs
                    clsName={st.userName}
                    name_='email'
                    type_='email'
                    leyend='Correo electrónico'
                    handleChange={handleChange}
                />
                    <Inputs
                        clsName={st.userPass}
                        name_='password'
                        type_='password'
                        leyend='Contraseña'
                        handleChange={handleChange}
                    />*/}
                    <input className={st.userName} name='email' type='email' leyend='Correo electrónico'></input>
                    <input className={st.userPass} name='password' type='password' leyend='Contraseña'></input>
                    <div className={st.submit}>
                        <button type='submit'>Iniciar sesión</button>
                        {/* <Buttons click_={handleSubmit} text_='Iniciar sesión' link_='#' /> */}
                    </div>
                </div>
            </form>
        </>
    );
}

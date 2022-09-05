import st from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

import { ValidationErrors } from '../scripts/ValidationErrors';
import { useAuth } from '../../../../context/AuthContext';
import swal from 'sweetalert';

export function Register() {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            await signup(
                e.userName,
                e.name,
                e.lastName,
                e.idIns,
                e.noTel,
                e.email + '@ucundinamarca.edu.co',
                e.password
            ).then(() => {
                swal({
                    title: 'Verifique su cuenta en la bandeja de su correo electronico',
                    icon: 'error',
                    button: 'aceptar',
                }).then(() => {
                    document.getElementById('formulario').reset();
                    navigate('/');
                });
            });
        } catch (error) {
            ValidationErrors(error.code);
            console.log(error);
        }
    };
    return (
        <>
            <form
                id='formulario'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit({
                        userName: e.target.userName.value,
                        name: e.target.name.value,
                        lastName: e.target.lastName.value,
                        idIns: e.target.idIns.value,
                        noTel: e.target.noTel.value,
                        email: e.target.email.value,
                        password: e.target.password.value,
                    });
                }}>
                <div className={st.container}>
                    <div className={st.inpCont}>
                        <h3>Nombre de usuario</h3>
                        <input name='userName' type='text' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Nombres</h3>
                        <input name='name' type='text' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Apellidos</h3>
                        <input name='lastName' type='text' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Id Intitucional</h3>
                        <input name='idIns' type='number' min='1' pattern='^[0-9]+' />
                    </div>
                    <div className={st.inpCont}>
                        <h3>Número telefónico</h3>
                        <input name='noTel' type='number' min='1' pattern='^[0-9]+' />
                    </div>
                    <div className={st.inpContEm}>
                        <h3>Correo electronico</h3>
                        <input name='email' type='text' /> @ucundinamarca.edu.co
                    </div>
                    <div className={st.inpCont}>
                        <h3>Contraseña</h3>
                        <input name='password' type='password' />
                    </div>
                    <div className={st.submit}>
                        <button type='submit'>Registrar</button>
                    </div>
                </div>
            </form>
        </>
    );
}

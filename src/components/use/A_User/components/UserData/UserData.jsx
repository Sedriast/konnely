import st from './styles/UserData.module.css';
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext';

export function UserData({ user_ }) {
    console.log(user_);
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        navigate('/');
        await logout();
    };

    const exit = () => {
        try {
            swal({
                title: '¿Desea cerrar sesión?',
                icon: 'warning',
                buttons: ['No', 'Si'],
            }).then((respuesta) => {
                if (respuesta) {
                    handleSubmit();
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={st.profilePhoto}>
                <img src={user.photoURL} alt='' href='' />
            </div>
            <div className={st.userData}>
                <div className={st.paragraph}>
                    <div>{user.displayName}</div>
                    <div>{user.email}</div>
                    <p>
                        Otros datos del usuario
                        <br />
                        Tema: {user_.theme}
                        <br />
                        <br />
                        fadfadfafdsafaf
                    </p>
                </div>
                {/* Aqui estan los botones de la parte inferior de la informacion del usuario */}
                <div className={st.btnP}>
                    <figure id='btnBack' title='Página principal' tooltip-dir='top'>
                        <button
                            onClick={() => {
                                if (user) {
                                    navigate('/vitaeslist');
                                }
                            }}>
                            🛖
                        </button>
                    </figure>
                    <figure id='btnBack' title='Salir' tooltip-dir='top'>
                        <button
                            onClick={() => {
                                if (user) {
                                    exit();
                                }
                            }}>
                            📤
                        </button>
                    </figure>
                </div>
            </div>
        </>
    );
}

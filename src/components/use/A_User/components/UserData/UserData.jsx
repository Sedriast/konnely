import st from './styles/UserData.module.css';
import app from '../../../../firebase/credentials';
import swal from 'sweetalert';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function UserData() {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        uid: null,
        photo: null,
        displayName: null,
        email: null,
        rol: null,
        theme: 0,
    });

    useEffect(() => {
        const getData = async () => {
            const query_ = query(collection(db, 'usuarios'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(query_);
            querySnapshot.forEach((doc) => {
                setUserData(doc.data());
            });
        };

        if (user) {
            getData();
        }
    }, [user]);

    const handleSubmit = async () => {
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
                    navigate('/');
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
                        Tema: {userData.theme}
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

import swal from 'sweetalert';
import st from './Themes.module.css';

import { useState } from 'react';
import { themesData } from '../../../../../0-GeneralComp/0-StaticData/customThemeData';
import { useAuth } from '../../../../../../../context/AuthContext';
import { UpdateInformation } from '../../../../../../firebase/funtions/AddInformation';

export function Themes() {
    const { user } = useAuth();
    const [f, setF] = useState({ uid: null, data: {} });

    const ca = (e) => {
        const tema = parseInt(e.target.id);
        setF({ ...f, coleccion: 'users', uid: user.uid, data: { theme: tema } });
    };

    const c = () => {
        swal({
            title: '¿Desea cambiar el tema predeterminado?',
            icon: 'warning',
            buttons: ['No', 'Si'],
        }).then((respuesta) => {
            if (respuesta) {
                UpdateInformation(f);
                setTimeout(() => {
                    reloadPage();
                }, 1000);
            }
        });
    };

    function reloadPage() {
        window.location.reload(true);
    }

    return (
        <>
            <div className={st.container}>
                {themesData.map((option) => {
                    return (
                        <div>
                            <figure
                                key={option.themeId}
                                id={option.themeId}
                                title={option.name}
                                tooltip-dir='bottom'>
                                <button className={st.theme}>
                                    <img
                                        alt=''
                                        href=''
                                        src={option.theme}
                                        id={option.themeId}
                                        onMouseEnter={ca}
                                        onClick={c}
                                    />
                                </button>
                            </figure>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

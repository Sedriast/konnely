import swal from 'sweetalert';
import st from '../style/Theme.module.css';

import { useState } from 'react';
import { themesData } from '../scripts/customThemeData';
import { useAuth } from '../../../../context/AuthContext';
import { UpdateInfoProfile } from '../../../firebase/funtions/AddInformation';

export function Themes() {
    const { user } = useAuth();
    const [f, setF] = useState({ user: null, data: {} });

    const ca = (e) => {
        const tema = parseInt(e.target.id);
        setF({ ...f, user: user.uid, data: { theme: tema } });
    };

    const c = () => {
        console.log(f);
        swal({
            title: '¿Desea cambiar el tema predeterminado?',
            icon: 'warning',
            buttons: ['No', 'Si'],
        }).then((respuesta) => {
            if (respuesta) {
                UpdateInfoProfile(f);
                setTimeout(reloadPage, 1000);
            }
        });
    };

    function reloadPage() {
        window.location.reload(true);
    }

    return (
        <>
            <div className={st.themePanel}>
                {themesData.map((option) => {
                    return (
                        <button key={option.themeId} className={st.theme}>
                            <img
                                alt=''
                                href=''
                                src={option.theme}
                                id={option.themeId}
                                onMouseEnter={ca}
                                onClick={c}
                            />
                        </button>
                    );
                })}
            </div>
        </>
    );
}

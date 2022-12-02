import swal from 'sweetalert';
import st from './Themes.module.css';

import { themesData } from '../../../../../0-GeneralComp/0-StaticData/customThemeData';
import { useAuth } from '../../../../../../../context/AuthContext';
import { UpdateInformation } from '../../../../../../firebase/funtions/AddInformation';

export function Themes() {
    const { user } = useAuth();
    const c = (e) => {
        swal({
            title: '¿Desea cambiar el tema predeterminado?',
            text: 'Recuerde que el tema se aplicará a toda la aplicación',
            icon: 'warning',
            buttons: ['No', 'Si'],
        }).then(async (respuesta) => {
            if (respuesta) {
                await UpdateInformation({
                    coleccion: 'users',
                    uid: user.uid,
                    data: { theme: parseInt(e.target.id) },
                }).then(() => {
                    window.location.reload(true);
                });
            }
        });
    };
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
                                    <img alt='' href='' src={option.theme} id={option.themeId} onClick={c} />
                                </button>
                            </figure>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

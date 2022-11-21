import st from './UserCards.module.css';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { recuperarUser } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { InacctiveUser } from '../../../../../firebase/funtions/AddInformation';

export function UserCards({ userEmail, userName, user }) {
    return (
        <div className={st.container}>
            <h1>{userName}</h1>

            <div className={st.mid}>{userEmail}</div>
            <div>
                <Buttons
                    route='#'
                    label='editar'
                    direction='bottom'
                    btnIconText={faTrash}
                    btnClick={() => {
                        swal({
                            title: '¿Desea borrar toda la informaciónde este usuario?',
                            icon: 'warning',
                            buttons: ['No', 'Si'],
                        }).then((respuesta) => {
                            if (respuesta) {
                                InacctiveUser(user);
                            }
                        });
                    }}
                />
                <Buttons
                    route='/user'
                    label='editar'
                    direction='bottom'
                    btnIconText={faPenToSquare}
                    btnClick={() => {
                        recuperarUser(user);
                    }}
                />
            </div>
        </div>
    );
}

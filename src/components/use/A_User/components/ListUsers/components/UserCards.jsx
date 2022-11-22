import st from './UserCards.module.css';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { recuperarUser } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { faPenToSquare, faPlugCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { StateUser } from '../../../../../firebase/funtions/AddInformation';

export function UserCards({ userEmail, userName, user }) {
    return (
        <div className={st.container}>
            <h1>{userName}</h1>

            <div className={st.mid}>{userEmail}</div>
            <div>
                <Buttons
                    route='/user'
                    label='Editar'
                    direction='bottom'
                    btnIconText={faPenToSquare}
                    btnClick={() => {
                        recuperarUser(user);
                    }}
                />
                {user.state === 'Activo' ? (
                    <Buttons
                        route='#'
                        label='Borrar'
                        direction='bottom'
                        btnIconText={faTrash}
                        btnClick={() => {
                            swal({
                                title: '¿Desea borrar toda la información de este usuario?',
                                icon: 'warning',
                                buttons: ['No', 'Si'],
                            }).then((respuesta) => {
                                if (respuesta) {
                                    StateUser({ user: user, state: 'Inactivo' });
                                }
                            });
                        }}
                    />
                ) : (
                    <Buttons
                        route='#'
                        label='Activar'
                        direction='bottom'
                        btnIconText={faPlugCircleCheck}
                        btnClick={() => {
                            swal({
                                title: '¿Desea activar este usuario?',
                                icon: 'warning',
                                buttons: ['No', 'Si'],
                            }).then((respuesta) => {
                                if (respuesta) {
                                    StateUser({ user: user, state: 'Activo' });
                                }
                            });
                        }}
                    />
                )}
            </div>
        </div>
    );
}

import st from './UserData.module.css';

import { useAuth } from '../../../../../context/AuthContext';
import { Themes } from './conponents/Themes/Themes';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { recuperarUser } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { GetDocument } from '../../../../firebase/funtions/GetInformation';

export function UserData() {
    const { user } = useAuth();
    const usuario = GetDocument({ coleccion: 'users', list: user.uid }).props.children[0];

    return (
        <>
            <div className={st.userData}>
                <div className={st.profilePhoto}>
                    <img src={user.photoURL} alt='' href='' />
                </div>
                <div>
                    <Buttons
                        route='/user'
                        label='editar'
                        direction='bottom'
                        btnIconText={faPenToSquare}
                        btnClick={(e) => {
                            e.preventDefault();
                            recuperarUser(usuario);
                        }}
                    />
                </div>
                <br />
                <div className={st.paragraph}>
                    <div>{user.displayName}</div>
                    <div>{user.email}</div>
                    <br />
                    <p>Otros datos del usuario</p>
                </div>
                <Themes />
            </div>
        </>
    );
}

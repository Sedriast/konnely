import st from './UserCards.module.css';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { recuperarUser } from '../../../../0-GeneralComp/0-StaticData/dataProv';

export function UserCards({ userEmail, userName, user }) {
    return (
        <div className={st.container}>
            <h1>{userName}</h1>

            <div className={st.mid}>{userEmail}</div>

            <div className={st.btnEdit}>
                <Buttons
                    route='/user'
                    btnIconText='✏️'
                    label='Editar'
                    direction='bottom'
                    btnClick={() => {
                        recuperarUser(user);
                    }}
                />
            </div>
        </div>
    );
}

import { Buttons } from '../../../../0-GeneralComp/F-Buttons/Buttons';
import st from '../styles/UserCards.module.css';

export function UserCards({ userEmail, userId, userName }) {
    return (
        <div className={st.container}>
            <div>
                <div>{userName}</div>
                <br />
                <div>{userId}</div>
            </div>

            <div className={st.mid}>{userEmail}</div>

            <div className={st.btnEdit}>
                <Buttons route='/user' btnIconText='✏️' label='Editar' />
            </div>
        </div>
    );
}

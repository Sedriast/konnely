import st from './LifeCycle.module.css';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';

import { Cards } from './Cards/Cards';
import { useAuth } from '../../../../../../../context/AuthContext';
import { QueriesSimple_ } from '../../../../../../firebase/funtions/GetInformation';

export function LifeCycle({ info }) {
    const { user } = useAuth();
    const user_ = QueriesSimple_({ coleccion: 'users', parametro: 'uid', busqueda: user.uid }).props.children[0];
    return (
        <>
            <br />
            <div className={st.tit}>
                Ciclo de vida
                {user_ !== undefined && user_.rol === 'administrador' && (
                    <div>
                        <Buttons route='/editlife' label='editar' direction='bottom' btnIconText={faPenToSquare} />
                    </div>
                )}
            </div>
            <br />
            <br />
            <br />
            <div className={st.panel}>
                <Cards info={info} />
            </div>
        </>
    );
}

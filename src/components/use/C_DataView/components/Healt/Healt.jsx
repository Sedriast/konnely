import st from './styles/Healt.module.css';

import { tratamientos } from '../../../0-GeneralComp/2-FakeData/tratamientos';

import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { List } from './components/List/List';

export function Healt() {
    return (
        <div className={st.container}>
            <div className={st.panelSearchBar}>
                <input placeholder='Buscar' />
                <button className={st.btnSearch}>🔎</button>
            </div>
            <div className={st.panelItems}>
                <List trataments={tratamientos} />
            </div>
            <div className={st.new}>
                <Buttons
                    btnIconText={faFileCirclePlus}
                    route='/addTrat'
                    label='Nuevo tratamiento'
                    direction='top'
                />
            </div>
        </div>
    );
}

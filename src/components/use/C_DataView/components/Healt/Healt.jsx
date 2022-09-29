import st from './styles/Healt.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { List } from './components/List/List';
import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';
import { basicData } from '../../../C_DataView/scripts/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/QueriesSimple_';

export function Healt() {
    const navigate = useNavigate();
    const trataments = QueriesSimple_({
        coleccion: 'trataments',
        parametro: 'uidRabbit',
        busqueda: basicData.info.uid,
    }).props.children;
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <div className={st.container}>
            <div className={st.panelSearchBar}>
                <input placeholder='Buscar' />
                <button className={st.btnSearch}>🔎</button>
            </div>
            <div className={st.panelItems}>
                <List trataments={trataments} />
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

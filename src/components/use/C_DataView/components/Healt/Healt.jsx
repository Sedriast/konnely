/* eslint-disable array-callback-return */
import st from './styles/Healt.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { List } from './components/List/List';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/QueriesSimple_';

export function Healt() {
    const [search, setSearch] = useState('');
    const [search_, setSearch_] = useState('');
    const navigate = useNavigate();
    const trataments = QueriesSimple_({
        coleccion: 'trataments',
        parametro: 'uidRabbit',
        busqueda: basicData.info.uid,
    }).props.children;

    const buscar = (e) => {
        setSearch(e);
        const valor = trataments.filter((element) => {
            if (element.date.toString().toLowerCase().includes(e.toLowerCase())) return element;
        });
        setSearch_(valor);
    };
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <div className={st.container}>
            <div className={st.panelSearchBar}>
                <input
                    placeholder='Buscar'
                    onChange={(e) => {
                        buscar(e.target.value);
                    }}
                />
                <button className={st.btnSearch}>🔎</button>
            </div>

            <div className={st.panelItems}>
                {search === '' ? <List trataments={trataments} /> : <List trataments={search_} />}
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

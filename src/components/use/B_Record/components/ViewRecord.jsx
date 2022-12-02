import st from './ViewRecord.module.css';

import { useState } from 'react';

import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_, SearchAll } from '../../../firebase/funtions/GetInformation';
import { CardRecord_ } from './Cards/CardRecord_';

export function ViewRecord() {
    let activos = [];
    let inactivos = [];
    const [search, setSearch] = useState('');
    const [search_, setSearch_] = useState(['']);
    const sales = SearchAll({ coleccion: 'sales' }).props.children;
    console.log(sales);
    function buscar(e) {
        setSearch(e);
        const valor = sales.filter(function (element) {
            if (
                element.signs.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.date.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.diagnosis.toString().toLowerCase().includes(e.toLowerCase())
            )
                return element;
            return null;
        });
        setSearch_(valor);
    }
    const tr = [{}, {}, {}];
    return (
        <div className={st.container}>
            <div className={st.panelSearchBar}>
                <div className={st.new}>
                    <Buttons
                        btnIconText={faFileCirclePlus}
                        route='/addHis'
                        label='Nuevo registro'
                        direction='rigth'
                    />
                </div>
                <form>
                    <input
                        name='buscar'
                        type='search'
                        placeholder='Buscar'
                        onChange={(e) => {
                            buscar(e.target.value);
                        }}
                    />
                    <button className={st.btnSearch} type='submit'>
                        🔎
                    </button>
                </form>
            </div>
            <div className={st.panelItems}>
                {tr.map((e, i) => {
                    return (
                        <>
                            <CardRecord_ />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

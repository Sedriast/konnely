import st from './ReproView.module.css';

import { newTreats } from '../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { List } from './components/List';
import { useState } from 'react';
import { basicData } from '../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../firebase/funtions/GetInformation';

export function ReproView() {
    const [search, setSearch] = useState('');
    const reproductiveCycles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;
    console.log(reproductiveCycles);
    function buscar(e) {
        const valor = reproductiveCycles.filter(function (element) {
            if (
                element.signs.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.date.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.diagnosis.toString().toLowerCase().includes(e.toLowerCase())
            )
                return element;
            return null;
        });
        setSearch(valor);
    }
    return (
        <>
            <LeftBottomMenu
                backCancel={newTreats}
                click={() => {
                    window.history.back();
                }}
            />
            <div className={st.panelSearchBar}>
                <input
                    placeholder='Buscar'
                    onChange={(e) => {
                        buscar(e.target.value);
                    }}
                />
                <button className={st.btnSearch}>🔎</button>
            </div>
            <div className={st.optionContainer}>
                {search !== '' ? (
                    <List reproductiveCycles={reproductiveCycles} />
                ) : (
                    <List reproductiveCycles={search} />
                )}
            </div>
        </>
    );
}

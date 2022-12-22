import st from '../../0-GeneralComp/OpContainers.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Cards } from './components/Cards/Cards';
import { CamadaData } from '../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../firebase/funtions/GetInformation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function EditRepro() {
    const navigate = useNavigate();
    const reproductiveCycles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uid',
        busqueda: CamadaData.uid,
    }).props.children;
    useEffect(() => {
        if (CamadaData.uid === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <>
            <LeftBottomMenu
                backCancel={newTreats}
                click={() => {
                    window.history.back();
                }}
            />
            <div className={st.optionContainer}>
                {reproductiveCycles?.map((item, i) => (
                    <Cards key={i} id={item.id} item={item} stages={item.stages} />
                ))}
            </div>
        </>
    );
}

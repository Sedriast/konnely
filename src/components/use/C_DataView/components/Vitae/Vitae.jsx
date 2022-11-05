/* eslint-disable array-callback-return */
import st from './Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';

import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';
import { ReproductiveCycle } from './components/ReproductiveCycle/ReproductiveCycle';
import { PanelData1 } from '../../../C_PrimaryView/component/PanelData1';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';
import {
    DeathStadics,
    HomogenStadics,
    LableStadics,
    LivesStadics,
} from '../../../0-GeneralComp/0-Scripts/FormatStadics';

export function Vitae() {
    const navigate = useNavigate();
    const stadics = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;

    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate, stadics]);

    return (
        <>
            {basicData.id !== null && (
                <div className={st.panel}>
                    <RabbitDataView stageId={basicData.id} />
                    <hr />
                    <br />
                    <LifeCycle info={basicData.info} />
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <ReproductiveCycle />
                    <br />
                    <br />
                    <br />
                    <br />
                    <PanelData1 />
                    {console.log(LableStadics(stadics))}
                    {console.log(LivesStadics(stadics))}
                    {console.log(DeathStadics(stadics))}
                    {console.log(HomogenStadics(stadics))}
                </div>
            )}
        </>
    );
}

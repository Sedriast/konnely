/* eslint-disable array-callback-return */
import st from './Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';

import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';
import { ReproductiveCycle } from './components/ReproductiveCycle/ReproductiveCycle';
import { PanelData } from '../../../C_PrimaryView/component/PanelData';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';
import { Stadics } from '../../../0-GeneralComp/0-Scripts/FormatStadics';
import { useAuth } from '../../../../../context/AuthContext';

export function Vitae() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const stadics = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;
    console.log(stadics);
    const user_ = QueriesSimple_({ coleccion: 'users', parametro: 'uid', busqueda: user.uid }).props.children[0];
    const rabbit = QueriesSimple_({ coleccion: 'rabbits', parametro: 'uid', busqueda: basicData.info.uid }).props
        .children[0];
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
                    <RabbitDataView stageId={basicData.id} user_={user_} />
                    <hr />
                    <br />
                    <LifeCycle info={basicData.info} user_={user_} />
                    <br />
                    <br />
                    {rabbit?.genero === 'Hembra' && rabbit?.lifecycle[3].date !== null && (
                        <>
                            <hr />
                            <br />
                            <br />
                            <ReproductiveCycle />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <div className={st.stad}>
                                <PanelData stadics={Stadics(stadics)} />
                            </div>
                            <br />
                            <br />
                        </>
                    )}
                    <hr />
                    <br />
                    <br />
                </div>
            )}
        </>
    );
}

import st from './Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';

import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';
import { ReproductiveCycle } from './components/ReproductiveCycle/ReproductiveCycle';

export function Vitae() {
    const navigate = useNavigate();

    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);

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
                </div>
            )}
        </>
    );
}

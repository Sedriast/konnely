import st from './styles/Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../scripts/dataProv';
import { LifeCycle } from './components/LifeCycle';
import { EditButtons } from './components/EditButtons';
import { RabbitDataView } from './components/RabbitDataView';
import { RabbitStadisticsView } from './components/RabbitStadisticsView';

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
                <div className={st.container}>
                    <div className={st.panel}>
                        <RabbitDataView stageId={basicData.id} />
                        <hr />
                        <br />
                        Ciclo de vida
                        <br />
                        <br />
                        <LifeCycle stageId={basicData.id} info={basicData.info} />
                        <hr />
                        <RabbitStadisticsView />
                        <hr />
                        <EditButtons />
                    </div>
                </div>
            )}
        </>
    );
}

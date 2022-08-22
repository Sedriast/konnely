import st from './styles/Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Lifecycle } from '../../com/Lifecycle';
import { basicData, reproData } from '../../dataProv';

import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';
import { RabitDataView } from './components/RabitDataView';
import { RealTime } from '../../../../firebase/funtions/RealTime';

export function Vitae() {
    const navigate = useNavigate();

    function rabbitData() {
        if (basicData.id === null) {
            return null;
        } else {
            return RealTime({
                coleccion: 'conejos',
                parametro: 'id',
                busqueda: basicData.id,
            }).props.children[0];
        }
    }
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    console.log('Hola');

    return (
        <>
            <div className={st.container}>
                <div className={st.panelBasicInfo}>
                    <RabitDataView rabbitData={rabbitData} />
                </div>

                <Lifecycle id={rabbitData()} />

                <div className={st.stadistics}>
                    <div className={st.rej}>Crias rechasadas: {reproData.rechazos}</div>
                    <div className={st.dea}>Crias muertas: {reproData.muertes}</div>
                    <div className={st.lif}>Crias vivas: {reproData.vivos}</div>
                </div>

                <div className={st.btnEdits}>
                    <div className={st.basicData}>
                        <Buttons link_='/form' text_='Datos básicos' icon_='✏️' />
                    </div>
                    <div className={st.lifeCi}>
                        <Buttons link_='/list' text_='Ciclo de vida' icon_='✏️' />
                    </div>
                    <div className={st.nPartos}>
                        <Buttons link_='#'>{reproData.partos}</Buttons>
                    </div>
                </div>
            </div>
        </>
    );
}

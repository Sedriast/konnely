import st from './Vitae.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData, recuperar } from '../../../0-GeneralComp/0-StaticData/dataProv';

import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';
import { ReproductiveCycle } from './components/ReproductiveCycle/ReproductiveCycle';
import { PanelData } from '../../../B_DashBoard/component/PanelData';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';
import { Stadics } from '../../../0-GeneralComp/0-Scripts/FormatStadics';

import { DataStadicsMale } from '../../../0-GeneralComp/0-Scripts/DataStadicsMale';
import { StadicsMale } from '../../../0-GeneralComp/0-Scripts/FormatStadicsMale';
import { DataStadicsFemale } from '../../../0-GeneralComp/0-Scripts/DataStadicsFemale';

import { Carousel } from 'nuka-carousel/lib/carousel';

export function Vitae({ rabbit }) {
    const navigate = useNavigate();
    const [grup, setGrup] = useState('poblacion');
    const stadicsMaleExtraction = QueriesSimple_({
        coleccion: 'extraction',
        parametro: 'uidRabbit',
        busqueda: rabbit?.uid,
    }).props.children;

    const stadics = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: rabbit?.uid,
    }).props.children;

    const stadicsGenereMale = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidFather',
        busqueda: rabbit?.uid,
    }).props.children;

    const updateStadics = () => {
        if (grup === 'poblacion') {
            return stadicsMaleExtraction;
        } else if (grup !== 'poblacion') {
            return stadicsGenereMale;
        } else {
            return [];
        }
    };

    const rabbit_ = QueriesSimple_({ coleccion: 'rabbits', parametro: 'id', busqueda: basicData?.id }).props
        .children[0];

    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
        } else if (basicData?.info === undefined && basicData?.id !== null) {
            recuperar(basicData?.id, rabbit_);
        }
        console.log('Hola');
    }, [navigate, stadics, rabbit_]);

    return (
        <>
            {basicData?.id !== null && (
                <div className={st.panel}>
                    <RabbitDataView rabbit={rabbit} />
                    <hr />
                    <br />
                    <LifeCycle info={rabbit} />
                    <br />
                    <br />
                    {rabbit?.genero === 'Hembra' && rabbit?.lifecycle[3]?.date !== null ? (
                        <>
                            <hr />
                            <br />
                            <br />
                            <ReproductiveCycle reproductivecycle={rabbit?.reproductivecycle} uid={rabbit?.uid} />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <button
                                onClick={() => {
                                    setGrup('poblacion');
                                }}>
                                Población
                            </button>
                            <button
                                onClick={() => {
                                    setGrup('genero');
                                }}>
                                Género
                            </button>
                            <br />
                            <br />
                            <div className={st.stad}>
                                <Carousel> 
                                    {stadics.length > 0 ? (
                                        <PanelData
                                            stadics={
                                                DataStadicsFemale({
                                                    stadics: Stadics({ data: stadics, grupo: grup }).props.children,
                                                    grupo: grup,
                                                }).props.children
                                            }
                                        />
                                    ) : (
                                        <h1>No hay datos</h1>
                                    )}
                                </Carousel>
                            </div>
                            <br />
                            <br />
                        </>
                    ) : (
                        <>
                            <hr />
                            <br />
                            <br />
                            <button
                                onClick={() => {
                                    setGrup('poblacion');
                                }}>
                                Población
                            </button>
                            <button
                                onClick={() => {
                                    setGrup('genero');
                                }}>
                                Género
                            </button>
                            <br />
                            <br />
                            <div className={st.stad}>
                                {updateStadics().length > 0 ? (
                                    <PanelData
                                        stadics={
                                            DataStadicsMale({
                                                stadics: StadicsMale({ data: updateStadics(), grupo: grup }).props
                                                    .children,
                                                grupo: grup,
                                            }).props.children
                                        }
                                    />
                                ) : (
                                    <h1>No hay datos</h1>
                                )}
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

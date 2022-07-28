import ed from '../../img/ed.png';
import st from './css/Vitae.module.css';

import { useEffect } from 'react';
import { Lifecycle } from './com/Lifecycle';
import { useNavigate } from 'react-router-dom';
import { basicData, reproData } from './dataProv';
import { Buttons } from '../Tools/Buttons/Buttons';
import { QueriesSimple_ } from '../../firebase/funtions/QueriesSimple_';

export function Vitae() {
    const navigate = useNavigate();

    function rabbitData() {
        if (basicData.id !== null) {
            return QueriesSimple_({
                coleccion: 'conejos',
                parametro: 'id',
                busqueda: basicData.id,
            }).props.children[0];
        }
    }
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/list');
        }
    }, [navigate]);

    return (
        <>
            <div className={st.container}>
                <div className={st.panelBasicInfo}>
                    {basicData.id !== null ? (
                        <>
                            <div className={st.imgVitae}>.............................................</div>
                            <div className={st.basicInf}>
                                <div className={st.re}>
                                    <div className={st.id}>
                                        <h1>Identificador</h1>
                                        <div className={st.viewI}>{rabbitData().id}</div>
                                    </div>
                                    <div className={st.raza}>
                                        <h1>Raza</h1>
                                        <div className={st.viewI}>{rabbitData().raza}</div>
                                    </div>
                                    <div className={st.genero}>
                                        <h1>Genero</h1>
                                        <div className={st.viewI}>{rabbitData().genero}</div>
                                    </div>
                                </div>
                                <div className={st.re}>
                                    <div className={st.idPadre}>
                                        <h1>Id. Padre</h1>
                                        <div className={st.viewI}>{basicData.idPadre}</div>
                                    </div>
                                    <div className={st.idMadre}>
                                        <h1>id. Madre</h1>
                                        <div className={st.viewI}>{basicData.idMadre}</div>
                                    </div>
                                    <div className={st.origen}>
                                        <h1>Origen</h1>
                                        <div className={st.viewI}>{basicData.origen}</div>
                                    </div>
                                </div>
                                <div className={st.re}>
                                    <div className={st.time1}>
                                        <h1>Fecha concepcion</h1>
                                        <div className={st.viewI}>{basicData.fechaConcepcion}</div>
                                    </div>
                                    <div className={st.procentaje}>
                                        <h1>Porcentaje pureza</h1>
                                        <div className={st.viewI}>{basicData.porcentajePureza}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>

                <Lifecycle id={basicData.id} />

                <div className={st.stadistics}>
                    <div className={st.rej}>Crias rechasadas: {reproData.rechazos}</div>
                    <div className={st.dea}>Crias muertas: {reproData.muertes}</div>
                    <div className={st.lif}>Crias vivas: {reproData.vivos}</div>
                </div>

                <div className={st.btnEdits}>
                    <div className={st.basicData}>
                        <Buttons link_='/form' text_='Datos básicos' icon_={ed} />
                    </div>
                    <div className={st.lifeCi}>
                        <Buttons link_='/list' text_='Ciclo de vida' icon_={ed} />
                    </div>
                    <div className={st.nPartos}>
                        <Buttons link_='#'>{reproData.partos}</Buttons>
                    </div>
                </div>
            </div>
        </>
    );
}

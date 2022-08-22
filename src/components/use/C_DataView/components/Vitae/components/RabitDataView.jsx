import st from '../styles/RabitDataView.module.css';

import { basicData } from '../../../dataProv';

export function RabitDataView({ rabbitData }) {
    return (
        <>
            {basicData.id !== null && (
                <>
                    <div className={st.imgVitae}>
                        <img src={rabbitData()?.url} alt='' />
                    </div>
                    <div className={st.basicInf}>
                        <div className={st.re}>
                            <div className={st.id}>
                                <h1>Identificador</h1>
                                <div className={st.viewI}>{rabbitData()?.id}</div>
                            </div>
                            <div className={st.raza}>
                                <h1>Raza</h1>
                                <div className={st.viewI}>{rabbitData()?.raza}</div>
                            </div>
                            <div className={st.genero}>
                                <h1>Genero</h1>
                                <div className={st.viewI}>{rabbitData()?.genero}</div>
                            </div>
                        </div>
                        <div className={st.re}>
                            <div className={st.idPadre}>
                                <h1>Id. Padre</h1>
                                <div className={st.viewI}>{rabbitData()?.idPadre}</div>
                            </div>
                            <div className={st.idMadre}>
                                <h1>id. Madre</h1>
                                <div className={st.viewI}>{rabbitData()?.idMadre}</div>
                            </div>
                            <div className={st.origen}>
                                <h1>Origen</h1>
                                <div className={st.viewI}>{rabbitData()?.origen}</div>
                            </div>
                        </div>
                        <div className={st.re}>
                            <div className={st.time1}>
                                <h1>Fecha concepcion</h1>
                                <div className={st.viewI}>{rabbitData()?.nacimiento}</div>
                            </div>
                            <div className={st.procentaje}>
                                <h1>Porcentaje pureza</h1>
                                <div className={st.viewI}>{rabbitData()?.porcentaje}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

import st from '../styles/RabbitDataView.module.css';

import app from '../../../../../firebase/credentials';

import { useEffect, useState } from 'react';
import { basicData } from '../../../scripts/dataProv';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function RabbitDataView({ stageId }) {
    const [data_, setData_] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'conejos'), where('id', '==', stageId));
        onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
    }, [stageId]);
    return (
        <>
            {basicData.id !== null && (
                <>
                    <div className={st.panelBasicInfo}>
                        <div className={st.imgVitae}>
                            <img src={data_[0]?.url} alt='' />
                        </div>
                        <div className={st.basicInf}>
                            <div className={st.re}>
                                <div className={st.id}>
                                    <h1>Identificador</h1>
                                    <div className={st.viewI}>{data_[0]?.id}</div>
                                </div>
                                <div className={st.raza}>
                                    <h1>Raza</h1>
                                    <div className={st.viewI}>{data_[0]?.raza}</div>
                                </div>
                                <div className={st.genero}>
                                    <h1>Genero</h1>
                                    <div className={st.viewI}>{data_[0]?.genero}</div>
                                </div>
                            </div>
                            <div className={st.re}>
                                <div className={st.idPadre}>
                                    <h1>Id. Padre</h1>
                                    <div className={st.viewI}>{data_[0]?.idPadre}</div>
                                </div>
                                <div className={st.idMadre}>
                                    <h1>id. Madre</h1>
                                    <div className={st.viewI}>{data_[0]?.idMadre}</div>
                                </div>
                                <div className={st.origen}>
                                    <h1>Origen</h1>
                                    <div className={st.viewI}>{data_[0]?.origen}</div>
                                </div>
                            </div>
                            <div className={st.re}>
                                <div className={st.time1}>
                                    <h1>Fecha concepcion</h1>
                                    <div className={st.viewI}>{data_[0]?.nacimiento}</div>
                                </div>
                                <div className={st.procentaje}>
                                    <h1>Porcentaje pureza</h1>
                                    <div className={st.viewI}>{data_[0]?.porcentaje}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

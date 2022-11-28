import st from './Cards/Cards.module.css';

import { Cards } from './Cards/Cards';

export function List({ setOptionSelect, extractionsActivos, extractionsInactivos, stateCam }) {
    let extraction = [];
    if (stateCam === true) {
        extraction = extractionsActivos;
    } else if (stateCam === false) {
        extraction = extractionsInactivos;
    }
    return (
        <>
            {extraction !== [] ? (
                extraction.map((item, index) => (
                    <>
                        <Cards
                            key={item.uid}
                            id={index + 1}
                            uid={item.uid}
                            date={item.date}
                            methods={item.methods}
                            volume={item.volume}
                            observations={item.observations}
                            professional={item.professional}
                            pajillas={item.pajillas}
                            extraction={item}
                            uidAudit={item.uidAudit}
                            state={item.state}
                            setOptionSelect={setOptionSelect}
                        />
                    </>
                ))
            ) : (
                <div className={st.pan}>
                    <h1>Cargando por favor espere...</h1>
                </div>
            )}
        </>
    );
}

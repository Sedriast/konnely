import st from './Cards/Cards.module.css';

import { Cards } from './Cards/Cards';

export function List({ tratamentsActivos, tratamentsInactivos, stateCam }) {
    let trataments = [];
    if (stateCam === true) {
        trataments = tratamentsActivos;
    } else if (stateCam === false) {
        trataments = tratamentsInactivos;
    }
    return (
        <>
            {trataments !== [] ? (
                trataments.map((item, index) => (
                    <>
                        <Cards
                            key={item.uid}
                            id={index + 1}
                            uid={item.uid}
                            date={item.date}
                            signs={item.signs}
                            diagnosis={item.diagnosis}
                            tratament={item.treatment}
                            result={item.result}
                            professional={item.professional}
                            trataments={item}
                            uidAudit={item.uidAudit}
                            state={item.state}
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

import st from './Cards/Cards.module.css';

import { Cards } from './Cards/Cards';

export function List({ trataments, tratamientos }) {
    console.log(tratamientos);
    return (
        <>
            {trataments ? (
                trataments?.map(
                    (item, index) =>
                        trataments[index].state === 'Activo' && (
                            <>
                                <Cards
                                    key={item.uid}
                                    id={index + 1}
                                    uid={item.uid}
                                    date={item.date}
                                    signs={item.signs}
                                    diagnosis={item.diagnosis}
                                    tratament={item.tratament}
                                    result={item.result}
                                    professional={item.professional}
                                    trataments={trataments[index]}
                                />
                            </>
                        )
                )
            ) : (
                <div className={st.pan}>
                    <h1>Cargando porfavor espere...</h1>
                </div>
            )}
        </>
    );
}

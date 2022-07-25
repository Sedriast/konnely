import Dates from '../../Dates/Dates';
import st from '../css/Com.module.css';

export function Lifecycle() {
    console.log(Dates('2022-07-13'));
    return (
        <>
            <div className={st.container}>
                {Dates('2022-07-13').map((items, index) => {
                    return (
                        <div key={index} className={st.panelE}>
                            |<div className={st.viewI}>{items.etapa}</div>
                            <div className={st.viewI}>{items.peso}</div>
                            <div className={st.viewI}>{items.fecha}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

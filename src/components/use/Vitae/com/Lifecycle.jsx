import st from '../css/Com.module.css';
import { lifecycleChild } from '../../Dates/Dates';

export function Lifecycle(props) {
    return (
        <>
            {JSON.stringify(props.id) !== '{}' ? (
                Date.now() - Date.parse(props?.id?.nacimiento) < 2629800000 && (
                    <div className={st.container}>
                        {lifecycleChild(props?.id?.nacimiento).map((items, index) => {
                            return (
                                <div key={index} className={st.panelE}>
                                    |<div className={st.viewI}>{items.etapa}</div>
                                    <div className={st.viewI}>{items.peso}</div>
                                    <div className={st.viewI}>{items.fecha}</div>
                                </div>
                            );
                        })}
                    </div>
                )
            ) : (
                <></>
            )}
        </>
    );
}

import st from '../css/Com.module.css';
import { lifecycleChild } from '../../Dates/Dates';
import { QueriesSimple_ } from '../../../firebase/funtions/QueriesSimple_';

export function Lifecycle(props) {
    function rabbitData() {
        if (props.id !== null) {
            const rabbit = QueriesSimple_({
                coleccion: 'conejos',
                parametro: 'id',
                busqueda: props.id,
            }).props.children[0];
            return rabbit;
        }
    }
    return (
        <>
            <div className={st.container}>
                {props.id !== null ? (
                    lifecycleChild(rabbitData().nacimiento).map((items, index) => {
                        return (
                            <div key={index} className={st.panelE}>
                                |<div className={st.viewI}>{items.etapa}</div>
                                <div className={st.viewI}>{items.peso}</div>
                                <div className={st.viewI}>{items.fecha}</div>
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

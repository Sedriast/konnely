import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import { Editors } from './components/Editors/Editors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export function Cards({ id, litterPrueba, stages }) {
    console.log(litterPrueba.stages);
    const condicionals = (e) => {
        const inicial = new Date(e.target.DateInitial.value);
        const Palpacion = Date.parse(inicial) + 864000000;
        console.log(new Date(Palpacion));
        if (e.target.DateInitial.value) {
            litterPrueba.stages[0].state = true;
            litterPrueba.stages[0].male = e.target.Macho.value;
            litterPrueba.stages[0].date = e.target.DateInitial.value;
        }
    };
    return (
        <div className={st.container}>
            <div className={st.panelId}>
                {id}
                <br />
                <Editors />
            </div>
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    condicionals(e);

                    console.log(litterPrueba.stages);
                }}
                className={st.panelInfo}>
                {stages?.map((element) => {
                    return (
                        <>
                            <Ref stage={element} />
                        </>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        {/* <button
                            onClick={() => {
                                window.history.back();
                            }}> */}
                        <figure title='Guardar cambios' tooltip-dir='top'>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </figure>
                    </button>
                    {/* </button> */}
                </div>
            </form>
        </div>
    );
}

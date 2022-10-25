import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import { Editors } from './components/Editors/Editors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export function Cards({ id, litterPrueba, stages }) {
    console.log(litterPrueba.stages);
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
                    console.log(e.target.DateInitial.value);
                }}
                className={st.panelInfo}>
                {stages?.map((element) => {
                    return (
                        <>
                            <Ref stage={element} />
                            {element.title === 'Destete' ? '' : '⬇'}
                        </>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        <button
                            onClick={() => {
                                window.history.back();
                            }}>
                            <figure title='Guardar cambios' tooltip-dir='top'>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </figure>
                        </button>
                    </button>
                </div>
            </form>
        </div>
    );
}

import st from './Cards.module.css';

import { useState } from 'react';

import { Ref } from './components/Ref/Ref';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
    conditionalBasisEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { useAuth } from '../../../../../../context/AuthContext';
import { AddReproductiveCycle } from '../../../../../firebase/funtions/AddInformation';
import { formatCycleReproductive } from '../../../../0-GeneralComp/0-StaticData/Dates/format';

export function Cards({ id, litterPrueba, stages }) {
    const { user } = useAuth();
    const [date, setDate] = useState(null);
    function handleChange(e) {
        if (e.target.name === 'DateInitial') {
            e.target.value = conditionalBasisEdit(e.target.value, null);
            setDate(e.target.value);
        } else {
            e.target.value = conditionalNextEdit(e.target.value, null, date);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }

    return (
        <div className={st.container}>
            <div className={st.panelId}>{id}</div>
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    AddReproductiveCycle(formatCycleReproductive(e, litterPrueba, user));
                }}
                className={st.panelInfo}>
                {stages?.map((element) => {
                    return (
                        <>
                            <Ref stage={element} handleChange={handleChange} date={date} />
                        </>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        <button
                            onClick={() => {
                                window.history.back();
                            }}>
                            Hola
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

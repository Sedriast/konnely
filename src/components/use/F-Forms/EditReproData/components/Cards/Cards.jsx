import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
    conditionalBasisEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { useState } from 'react';
import { useAuth } from '../../../../../../context/AuthContext';
import { formatCycleReproductive } from '../../../../0-GeneralComp/0-StaticData/Dates/format';
import { UpdateReproductiveCycle } from '../../../../../firebase/funtions/AddInformation';

export function Cards({ item, stages }) {
    const { user } = useAuth();
    const [date, setDate] = useState(stages[0].date);
    function handleChange(e) {
        if (e.target.name === 'DateInitial') {
            e.target.value = conditionalBasisEdit(e.target.value, stages[0].date);
            setDate(e.target.value);
        } else if (e.target.name === 'DatePalpacion') {
            e.target.value = conditionalNextEdit(e.target.value, stages[1].date, date);
        } else if (e.target.name === 'DatePreparto') {
            e.target.value = conditionalNextEdit(e.target.value, stages[2].date, date);
        } else if (e.target.name === 'DateParto') {
            e.target.value = conditionalNextEdit(e.target.value, stages[3].date, date);
        } else if (e.target.name === 'DateDestete') {
            e.target.value = conditionalNextEdit(e.target.value, stages[4].date, date);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }

    return (
        <div className={st.container}>
            <form
                className={st.panelInfo}
                onSubmit={async (e) => {
                    e.preventDefault();
                    await UpdateReproductiveCycle(formatCycleReproductive(e, item, user)).then(() => {
                        window.history.back();
                    });
                }}>
                {stages?.map((element) => {
                    return (
                        <>
                            <Ref stage={element} handleChange={handleChange} date={date} />
                        </>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        <figure title='Guardar cambios' tooltip-dir='top'>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </figure>
                    </button>
                </div>
            </form>
        </div>
    );
}

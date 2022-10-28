import st from './Cards.module.css';

import { useState } from 'react';

import { Ref } from './components/Ref/Ref';
import { Editors } from './components/Editors/Editors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { ApproximateRepro } from '../../../../0-GeneralComp/0-StaticData/Dates/Dates';
import { conditionalBasisEdit } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { basicData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { useAuth } from '../../../../../../context/AuthContext';

export function Cards({ id, litterPrueba, stages }) {
    const { user } = useAuth();
    const [date, setDate] = useState(null);
    function handleChange(e) {
        e.target.value = conditionalBasisEdit(e.target.value, null);
        if (e.target.name === 'DateInitial') {
            setDate(e.target.value);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }
    const condicionals = (e) => {
        litterPrueba.uidMother = basicData.info.uid;

        if (!litterPrueba.displayNameEditors.includes(user.displayName)) {
            litterPrueba.displayNameEditors.push(user.displayName);
        }
        if (!litterPrueba.uidEditors.includes(user.uid)) {
            litterPrueba.uidEditors.push(user.uid);
        }
        if (e.target.DateInitial.value) {
            litterPrueba.stages[0].state = true;
            litterPrueba.stages[0].male = e.target.Macho.value;
            litterPrueba.stages[0].date = e.target.DateInitial.value;
        }
        if (e.target.DatePalpacion.value && e.target.DateInitial.value) {
            litterPrueba.stages[1].state = true;
            litterPrueba.stages[1].date = e.target.DatePalpacion.value;
            litterPrueba.stages[1].approximateDate = ApproximateRepro(e.target.DateInitial.value).palpation;
        }
        if (e.target.DatePreparto.value && e.target.DatePalpacion.value) {
            litterPrueba.stages[2].state = true;
            litterPrueba.stages[2].date = e.target.DatePreparto.value;
            litterPrueba.stages[2].approximateDate = ApproximateRepro(e.target.DateInitial.value).prepartum;
        }
        if (e.target.DateParto.value && e.target.DatePreparto.value) {
            litterPrueba.stages[3].state = true;
            litterPrueba.stages[3].date = e.target.DateParto.value;
            litterPrueba.stages[3].lives = e.target.lives.value;
            litterPrueba.stages[3].deaths = e.target.deaths.value;
            litterPrueba.stages[3].total = e.target.total.value;
            litterPrueba.stages[3].approximateDate = ApproximateRepro(e.target.DateInitial.value).birth;
        }
        if (e.target.DateDestete.value && e.target.DateParto.value) {
            litterPrueba.state = false;
            litterPrueba.stages[4].state = true;
            litterPrueba.stages[4].date = e.target.DateDestete.value;
            litterPrueba.stages[4].WeanedPups = e.target.WeanedPups.value;
            litterPrueba.stages[4].LitterWeight = e.target.LitterWeight.value;
            litterPrueba.stages[4].approximateDate = ApproximateRepro(e.target.DateInitial.value).weaning;
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

                    console.log(litterPrueba);
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

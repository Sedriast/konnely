import st from './Form.module.css';

import { EditInfoRabbit } from '../../../../../firebase/funtions/AddInformation';
import {
    conditionalLevanteEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { useState } from 'react';

export function Form({ info, uid, nacimiento }) {
    const [date, setDate] = useState({});
    const conldicionalInfo = (name, value) => {
        if (name.includes('Levante') && name.includes('weigth')) {
            info[1].weigth = value;
        } else if (name.includes('Levante') && name.includes('date')) {
            info[1].date = value;
        } else if (name.includes('Engorde') && name.includes('weigth')) {
            info[2].weigth = value;
        } else if (name.includes('Engorde') && name.includes('date')) {
            info[2].date = value;
        } else if (name.includes('Ceba') && name.includes('weigth')) {
            info[3].weigth = value;
        } else if (name.includes('Ceba') && name.includes('date')) {
            info[3].date = value;
        }
    };
    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'date:Levante') {
            e.target.value = conditionalLevanteEdit(value, info[1].date, nacimiento);
            setDate({ ...date, levante: e.target.value });
        } else if (name === 'date:Engorde') {
            e.target.value = conditionalNextEdit(value, info[2].date, date.levante);
            setDate({ ...date, engorde: e.target.value });
        } else if (name === 'date:Ceba') {
            e.target.value = conditionalNextEdit(value, info[3].date, date.engorde);
            setDate({ ...date, ceba: e.target.value });
        }
    }
    const peso = (e) => {
        if (e === 'Sin datos') {
            return null;
        } else {
            return e;
        }
    };
    console.log(info);
    return (
        <>
            <form
                className={st.container}
                onSubmit={async (e) => {
                    e.preventDefault();
                    for (const element of e.target) {
                        if (element.value !== '') {
                            conldicionalInfo(element.name, element.value);
                        }
                    }
                    await EditInfoRabbit({ lifecycle: info, uid: uid }).then(() => {
                        window.history.back();
                    });
                }}
                action=''>
                {info?.map((items, index) => {
                    return (
                        <div key={index} className={items.stage === 'Nacimiento' ? st.bird : st.panel}>
                            {items?.stage === 'Nacimiento' ? (
                                <>{/* <h1>Fecha de Nacimiento: {nacimiento}</h1> */}</>
                            ) : (
                                <>
                                    <div className={st.idName}>{items.stage}</div>
                                    <hr />
                                    <br />
                                    <br />
                                    <br />
                                    <div className={st.date1}>
                                        <h1>Fecha pronosticada:</h1>

                                        {items.approDate}
                                    </div>

                                    <div className={st.editable}>
                                        <Inputs
                                            name={'weigth:' + items.stage}
                                            type='number'
                                            step='0.1'
                                            min='0'
                                            leyend='Peso en gramos (gr)'
                                            value={peso(items?.weigth)}
                                            handleChange={handleChange}
                                        />
                                        <Inputs
                                            name={'date:' + items.stage}
                                            type='date'
                                            leyend='Fecha real'
                                            value={items?.date}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        <button>
                            <figure title='Guardar cambios' tooltip-dir='top'>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </figure>
                        </button>
                    </button>
                </div>
            </form>
        </>
    );
}

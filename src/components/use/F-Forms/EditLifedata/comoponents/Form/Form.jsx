/* eslint-disable no-loop-func */
import st from './Form.module.css';

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { EditInfoRabbit } from '../../../../../firebase/funtions/AddInformation';
import {
    conditionalLevanteEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
export function Form({ info, uid, nacimiento }) {
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

    return (
        <>
            <form
                className={st.container}
                onSubmit={(e) => {
                    e.preventDefault();
                    for (const element of e.target) {
                        if (element.value !== '') {
                            // conldicionalInfo(element.name, element.value);
                            console.log(element.name + ' : ' + element.value);
                        }
                    }
                    EditInfoRabbit({ lifecycle: info, uid: uid });
                }}
                action=''>
                {info?.map((items, index) => {
                    return (
                        <div key={index} className={items.stage === 'Nacimiento' ? st.bird : st.panel}>
                            {items.stage === 'Nacimiento' ? (
                                <></>
                            ) : (
                                <>
                                    <div className={st.idName}>{items.stage}</div>
                                    <hr />
                                    <br />
                                    <br />
                                    <br />
                                    <div className={st.titles}>
                                        Fecha pronosticada:
                                        <br />
                                        <br />
                                        Peso final:
                                        <br />
                                        Fecha real:
                                    </div>
                                    <div className={st.ask}>
                                        {items.approDate}
                                        <br />
                                        <br />
                                        <input
                                            defaultValue={items.weigth}
                                            type='number'
                                            name={'weigth:' + items.stage}
                                        />
                                        <br />
                                        <input
                                            defaultValue={items.date}
                                            type='date'
                                            name={'date:' + items.stage}
                                            onChange={(e) => {
                                                if (items.stage === 'Levante') {
                                                    e.target.value = conditionalLevanteEdit(
                                                        e.target.value,
                                                        info[index].date,
                                                        nacimiento
                                                    );
                                                } else {
                                                    e.target.value = conditionalNextEdit(
                                                        e.target.value,
                                                        info[index].date,
                                                        info[index - 1].date
                                                    );
                                                }
                                            }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}{' '}
                <div className={st.btn}>
                    {/* <Buttons
						route="#"
						btnType="submit"
						btnIconText={faFloppyDisk}
						label="Guardar cambios"
						direction="top"
						btnClick={() => {
							window.history.back();
						}}
					/> */}
                    <button type='Submit'>Hola</button>
                </div>
            </form>
        </>
    );
}

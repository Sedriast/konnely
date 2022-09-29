import st from './FormCards.module.css';

import { Buttons } from '../../../../../../0-GeneralComp/F-Buttons/Buttons';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export function FormCards({ info }) {
    return (
        <>
            {info?.lifecycle.map((items, index) => {
                return (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            for (const element of e.target) {
                                if (element.name !== '') {
                                    console.log(element.name + ': ' + element.value);
                                }
                            }
                        }}
                        key={index}
                        className={items.stage === 'Nacimiento' ? st.bird : st.container}
                        action=''>
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
                                        name={info?.lifecycle[index].stage}
                                    />
                                    <br />
                                    <input defaultValue={items.date} type='date' name='date' />
                                </div>
                            </>
                        )}

                        {items.stage === 'Nacimiento' ? (
                            <></>
                        ) : (
                            <div className={st.btn}>
                                {/* <Buttons
                                    route='#'
                                    btnType='submit'
                                    btnIconText={faFloppyDisk}
                                    label='Hecho'
                                    direction='bottom'
                                /> */}
                                <button type='submit'>Enviar</button>
                            </div>
                        )}
                    </form>
                );
            })}
        </>
    );
}

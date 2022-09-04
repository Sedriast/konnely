import st from './styles/LoginRegister.module.css';

import { useState } from 'react';

import { Option } from './components/Option';

export function LoginRegister() {
    const [optionSelect, setOptionSelect] = useState(0);

    return (
        <>
            <div className={st.container}>
                <div className={st.panelContainer}>
                    <div className={st.btns}>
                        <button
                            className={!optionSelect ? st.active_1 : st.inactive_1}
                            onClick={() => {
                                setOptionSelect(0);
                            }}>
                            Ingresar
                        </button>
                        <button
                            className={optionSelect ? st.active_2 : st.inactive_2}
                            onClick={() => {
                                setOptionSelect(1);
                            }}>
                            Registrar
                        </button>
                    </div>
                    <Option op={optionSelect} />
                </div>
            </div>
        </>
    );
}

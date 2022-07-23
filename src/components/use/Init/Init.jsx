import st from './css/Init.module.css';
import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

export function Init() {
    const [tab_, setTab_] = useState(false);
    const select = () => setTab_(!tab_);

    return (
        <>
            <div className={st.c1} />
            <div className={st.c2} />
            <div className={st.c3} />
            <div className={st.c4} />
            <div className={st.c5} />
            <div className={st.c6} />
            <div className={st.container}>
                <ul className={st.tabs}>
                    <li onClick={select} className={!tab_ ? st.active : ''}>
                        <a href='#tab1'>
                            <span className={st.text}>Ingresar</span>
                        </a>
                    </li>
                    <li onClick={select} className={tab_ ? st.active : ''}>
                        <a href='#tab2'>
                            <span className={st.text}>Registrar</span>
                        </a>
                    </li>
                </ul>
                <div className='sections'>
                    <div className={tab_ ? st.hidden : ''} id='tab1'>
                        <Login />
                    </div>
                    <div className={!tab_ ? st.hidden : ''} id='tab2'>
                        <Register />
                    </div>
                </div>
            </div>
        </>
    );
}

import st from './css/Cards.module.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recuperar } from '../../Vitae/dataProv';

export function Cards(props) {
    const rabbit_ = props.rabitDataName;
    useEffect(function () {
        const color = props.cGp;
        document.getElementById(props.id_).style.setProperty('background', color);
    });

    return (
        <>
            <div className={st.container} id={props.id_}>
                <Link to='/data'>
                    <div className={st.panel}>
                        <div className={st.h1_}>
                            <h1>{props.rabitDataName}</h1>
                        </div>
                        <div className={st.pa}>
                            <div>
                                <h2>Raza:</h2>
                                <p>{props.data1}</p>
                            </div>
                            <div>
                                <h2>Genero:</h2>
                                <p>{props.data2}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/data'}>
                    <button
                        onClick={() => {
                            recuperar(rabbit_);
                        }}>
                        <img alt='' className={st.im} src={props.url} />
                    </button>
                </Link>
            </div>
        </>
    );
}

import st from '../styles/Cards.module.css';

import { Link } from 'react-router-dom';
import { recuperar } from '../../C_DataView/scripts/dataProv';

export function Cards({ rabitID, rabitImage, rabitRaza, rabitGen }) {
    const rabbit_ = rabitID;
    return (
        <>
            <Link
                to='/vitae'
                onClick={() => {
                    recuperar(rabbit_);
                }}>
                <button className={st.container} id={rabitID}>
                    <img className={st.rabitImg} src={rabitImage} alt='' />
                    <div className={st.idName}>{rabitID}</div>
                    <div className={st.parag}>
                        <div>
                            <h1>Raza:</h1>
                            {rabitRaza}
                            <br />
                            <br />
                            <h1>Genero:</h1>
                            {rabitGen}
                        </div>
                    </div>
                </button>
            </Link>
        </>
    );
}

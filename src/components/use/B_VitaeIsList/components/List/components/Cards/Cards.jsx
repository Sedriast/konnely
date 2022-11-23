import st from './Cards.module.css';

import { Link } from 'react-router-dom';
import { recuperar } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function Cards({ rabitID, rabitInfo }) {
    const etapa = () => {
        if (rabitInfo.reproductivecycle === true) {
            return 'Camada Activa';
        } else if (rabitInfo.lifecycle[3].date && rabitInfo.reproductivecycle === false) {
            return 'Se puede reproducir';
        } else if (rabitInfo.lifecycle[2].date && rabitInfo.reproductivecycle === false) {
            return 'En Engorde';
        } else {
            return 'En Levante';
        }
    };
    return (
        <>
            <Link
                to='/vitae'
                onClick={() => {
                    recuperar(rabitID, rabitInfo);
                }}>
                <button className={st.container} id={rabitInfo.id}>
                    <div className={st.panelId}>
                        <img className={st.rabitImg} src={rabitInfo.url} alt='' />
                        <div className={st.idName}>{rabitInfo.id}</div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <br />
                    <div className={st.titles}>
                        Estado:
                        <br />
                        Raza:
                        <br />
                        Genero:
                        <br />
                        <br />
                        Concepción:
                        <br />
                        Fecha:
                        <br />
                        Procedencia:
                    </div>
                    <div className={st.ask}>
                        {etapa()}
                        <br />
                        {rabitInfo.raza}
                        <br />
                        {rabitInfo.genero}
                        <br />
                        <br />
                        {rabitInfo.concepcion}
                        <br />
                        {rabitInfo.nacimiento}
                        <br />
                        {rabitInfo.origen}
                    </div>
                </button>
            </Link>
        </>
    );
}

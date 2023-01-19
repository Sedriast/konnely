import st from './Cards.module.css';

import { Link } from 'react-router-dom';
import { recuperar } from '../../../../../0-GeneralComp/0-StaticData/dataProv';
import { estadoRabbit } from '../../../../../0-GeneralComp/0-Scripts/EstadoRabbit';

export function Cards({ rabitID, rabitInfo }) {
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
                    <table className={st.table}>
                        <tr>
                            <th>Estado: </th>
                            <td>  {estadoRabbit({
                            reproductivecycle: rabitInfo?.reproductivecycle,
                            lifecycle: rabitInfo?.lifecycle,
                            estado: rabitInfo?.estado,
                            })}</td>
                        </tr>
                        <tr><th>Raza: </th><td>  {rabitInfo.raza}</td></tr>
                        <tr><th>Genero: </th><td>  {rabitInfo.genero}</td></tr>
                        <tr><th>Concepción: </th><td>  {rabitInfo.concepcion}</td></tr>
                        <tr><th>Fecha: </th><td>  {rabitInfo.nacimiento}</td></tr>
                        <tr><th>Procedencia: </th><td>  {rabitInfo.origen}</td></tr>
                    </table>
                </button>
            </Link>
        </>
    );
}

import st from './PrintView.module.css';

import { dataMonta, dataPalpa, dataParto, dataDestete } from '../../../0-GeneralComp/2-FakeData/reproductiveCycle';

import { newTreats } from '../../../0-GeneralComp/0-StaticData/options';

import { Body } from './components/Body';
import { LeftBottomMenu } from '../../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';

import s from '../../../../img/ed.png';

export function PrintView() {
    const cicles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;
    const trataments = QueriesSimple_({
        coleccion: 'trataments',
        parametro: 'uidRabbit',
        busqueda: basicData.info.uid,
    }).props.children;
    const cm = (
        <>
            <LeftBottomMenu
                backCancel={newTreats}
                click={() => {
                    window.history.back();
                }}
            />
            <div className={st.optionContainer}>
                <div className={st.headPi}>
                    <table>
                        <thead>
                            <tr>
                                <tr>
                                    <th>MARCO PROCESO DE APOYO</th>
                                </tr>
                                <tr>
                                    <th>PROCESO GÉSTION DE PROCESO ACADÉMICO</th>
                                </tr>
                                <tr>
                                    <th>HOJA DE VIDA SEMOVIENTE HEMBRA</th>
                                </tr>
                                <th>
                                    <tr>
                                        <th>CÓDIGO: AAAr031</th>
                                    </tr>
                                    <tr>
                                        <th>VERSIÓN: 7</th>
                                    </tr>
                                    <th>
                                        FECHA: {window.Date().replace(' GMT-0500 (hora estándar de Colombia)', '')}
                                    </th>
                                </th>
                            </tr>
                        </thead>
                    </table>{' '}
                    <br />
                    <hr />
                    <br />
                    <br />
                </div>

                <Body cicles={cicles} trataments={trataments} />

                <div className={st.foot}>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <p>Calle 6 N° 9-80 Ubate – Cundinamarca Teléfono (091) 855 3055/3056</p>
                    <br />
                    <p>Ext.127 Línea Gratuita 018000180414</p>
                    <br />
                    <p>
                        {' '}
                        <a href='www.ucundinamarca.edu.co'>www.ucundinamarca.edu.co </a> E-mail:{' '}
                        <a href='info@ucundinamarca.edu.co'>info@ucundinamarca.edu.co</a>
                    </p>
                    <br />
                    <p>NIT: 890.680.062-2</p>
                </div>
            </div>
        </>
    );
    return cm;
}

import st from './PrintView.module.css';

import { dataMonta, dataPalpa, dataParto, dataDestete } from '../../../0-GeneralComp/2-FakeData/reproductiveCycle';

import { newTreats } from '../../../0-GeneralComp/0-StaticData/options';

import { Body } from './components/Body';
import { LeftBottomMenu } from '../../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';

export function PrintView() {
    const cicles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
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
                <Body cicles={cicles} />
            </div>
        </>
    );
    return cm;
}

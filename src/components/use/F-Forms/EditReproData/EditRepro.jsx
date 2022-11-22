import st from './EditRepro.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Cards } from './components/Cards/Cards';
import { basicData } from '../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../firebase/funtions/GetInformation';
import { Loading } from '../../0-GeneralComp/1-Loading/Loading';

export function EditRepro() {
    const reproductiveCycles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;
    return (
        <>
            <LeftBottomMenu
                backCancel={newTreats}
                click={() => {
                    window.history.back();
                }}
            />
            <div className={st.optionContainer}>
                {reproductiveCycles?.map((item, index) =>
                    item.state === true ? (
                        <Cards key={index} id={item.id} item={item} stages={item.stages} />
                    ) : (
                        <>
                            <Loading />
                        </>
                    )
                )}
            </div>
        </>
    );
}

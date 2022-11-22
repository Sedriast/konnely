import st from './ReproductiveCycle.module.css';

import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { Option } from './components/Option';
import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function ReproductiveCycle() {
    return (
        <>
            <div className={st.tit}>
                Camada
                <div>
                    <Buttons
                        route='/litterList'
                        label='Lista de camadas'
                        direction='bottom'
                        btnIconText={faRectangleList}
                    />
                </div>
            </div>
            <br />
            <Option op={basicData.info.reproductivecycle} />
        </>
    );
}

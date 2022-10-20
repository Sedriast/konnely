import st from './ReproductiveCycle.module.css';

import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { Option } from './components/Option';
import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function ReproductiveCycle() {
    //este será el estado de la ultima camada; true: activa; false: inactiva
    //si la ultima camada está inactiva el boton de iniciar camada se mostrará
    //de lo contrario se mostrará un resumen de la ultima camada activa
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
            <Option op={basicData.info.camada} />
        </>
    );
}

import st from '../../0-GeneralComp/OpContainers.module.css';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { FormTrat } from './components/FormTrat';

export function EditTrats() {
    return (
        <>
            <div className={st.leftMenu}>
                <div className={st.btnBack}>
                    <Buttons direction='rigth' btnIconText={faXmark} label='Cancelar' route='/vitae' />
                </div>
            </div>
            <div className={st.optionContainer}>
                <FormTrat />
            </div>
        </>
    );
}

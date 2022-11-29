import st from './DashBoard.module.css';

import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { List } from './component/List/List';
import { PanelData } from './component/PanelData';

export function DashBoard() {
    return (
        <>
            <div className={st.optionContainer}>
                <div className={st.panelA}>
                    <div className={st.one}>
                        <PanelData />
                    </div>
                    <div className={st.two}>
                        <PanelData />
                    </div>
                </div>
                <div className={st.panelB}>
                    <List />
                </div>
            </div>
            <RigthTopButtons BTNS={generalOptions} />
        </>
    );
}

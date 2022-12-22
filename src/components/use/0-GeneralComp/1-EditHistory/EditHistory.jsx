import st from '../OpContainers.module.css';

import { newTreats } from '../0-StaticData/options';
import { LeftBottomMenu } from '../1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { EditUserCard } from './components/EditUserCard';

export function EditHistory({userList}) {
    return (
        <><LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
            <div className={st.optionContainer}>
                {userList?.map((user, i) => {
                    <EditUserCard key={i} user={user}/>
                })}
            </div>
        </>
            
    );
}
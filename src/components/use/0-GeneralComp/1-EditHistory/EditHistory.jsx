import st from '../OpContainers.module.css';
import st_ from '../../A_User/components/ListUsers/ListUsers.module.css';

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
                <div className={st_.panelSearchBar}>
                    <form>
                        <input
                            name='buscar'
                            placeholder='Buscar'
                            type='search'
                            onChange={(e) => {
                                //buscar(e.target.value);
                            }}
                        />
                        <button className={st_.btnSearch}>🔎</button>
                    </form>
                </div>
                {userList?.map((user, i) => {
                    <EditUserCard key={i} user={user}/>
                })}
            </div>
        </>
            
    );
}
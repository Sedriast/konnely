
import style from './css/Layout.module.css';
import { Form } from './FormCom/Form';
import { ListViews } from './ListView.jsx/ListViews';

export function Layout(){
    return(
        <div className={style.principalPanel} >
            <ListViews  />
        </div>
    );
}
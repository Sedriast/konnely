
import style from './css/layout.module.css';
import { Form } from './FormCom/Form';
//import { ListViews } from './ListView.jsx/ListViews';

export function Layout(){
    return(
        <div className={style.principalPanel} >
            <Form/>
        </div>
    );
}
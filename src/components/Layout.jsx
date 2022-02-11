import style from './css/Layout.module.css';
import { Form } from './FormCom/Form';

export function Layout(){
    return(
        <div className={style.principalPanel} >
            <Form />
        </div>
    );
}
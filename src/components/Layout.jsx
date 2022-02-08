import style from './css/base.module.css';
import { Form } from './FormCom/Form';

export function Layout(){
    return(
        <div className={style.principalPanel} >
            <Form />
        </div>
    );
}
import style from '../css/form.module.css';
import { BasicData } from './BasicData';
import { InputImage } from './InputImage';

export function Form(){
    return(
        <div className={style.inputsPanel}>
            <BasicData />
            <InputImage />
        </div>
    );
}
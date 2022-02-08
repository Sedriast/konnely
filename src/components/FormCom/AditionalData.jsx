import style from './css/aditionalData.module.css';
import { ListType } from './ListType';

export function AditionalData(){
    return(
        <div className={style.addDataPanel}>
            <ListType key_s="Motivo del ingreso"/>
            <ListType key_s="¿Donde?"/>
            <input placeholder='Calificacion'></input>
            <input placeholder='ID'></input>
        </div>
    );
}
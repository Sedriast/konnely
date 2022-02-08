import style from './css/basicData.module.css';
import { ListType } from './ListType';

export function BasicData(){

    return(
        <div className={style.basicDataPanel}>
            <input type='text' className={style.name} placeholder='Nombre'/>
            <input type='date' className={style.dateBirth} /> 
            <input type='date' className={style.dateDestete} />
            <ListType key_s="Raza"/>
            <input type='text' className={style.weight} placeholder='Peso'/>
            <ListType key_s="Grupo asignado"/>
        </div>
    );
}
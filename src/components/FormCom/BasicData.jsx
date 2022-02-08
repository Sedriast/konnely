import style from './css/basicData.module.css';

export function BasicData(){
    
    return(
        <div className={style.basicDataPanel}>
            <input type='text' className={style.name} placeholder='Nombre'/>
            <input type='date' className={style.dateBirth} placeholder='Fecha de nacimiento'/> 
            <input type='date' className={style.dateDestete} placeholder='Fecha de destete'/>

            <input type='text' className={style.weight} placeholder='Peso'/>
        </div>
    );
}
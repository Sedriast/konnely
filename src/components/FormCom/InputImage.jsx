/**
 * el div es temporal, este se ba a reemplesar con el imput de imagen 
 * (que parece ser mas complicado de lo que imaginaba)
 */

import style from '../css/form.module.css';

export function InputImage(){
    return(
        <input className={style.imgInput} type="file" name="src-file1" aria-label="Archivo"/>
    );
}
/**
 * el div es temporal, este se ba a reemplesar con el imput de imagen 
 * (que parece ser mas complicado de lo que imaginaba)
 */

import style from '../css/Form.module.css';

export function InputImage(){

function handleImage (e){

	console.log(e)
}

	return(
		<input className={style.imgInput} type="file" name="src-file1" aria-label="Archivo" onChange={handleImage}/>
	);
}
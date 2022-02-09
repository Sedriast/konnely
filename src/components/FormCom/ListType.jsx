/**
 * Esta es la estructura basica y lista para modificar de una Lista desplegable
 * 
 */

import { useState } from 'react';
import style from './css/basicData.module.css';

export function ListType( props ){

	const init = {
        value:""
    }

	const s = props.k;

	const [values, setValues] = useState(init);

	//Este vector maneja las opciones
	const [op] = useState([s,"2","3"]);
	  
	const handleChange = e => {
		const {name, value} = e.target;
        setValues({...values, [name]:value})
	};
	
//Esta funcion se usa para enviar los datos seleccionados a donde te plasca

/** 
 	function handleSubmit (event) {
		alert('selected is: ' + this.state);
	}
*/

	return (
		<select className={style.listTypes} value={init} onChange={handleChange} >
			{op.map(a=><option value={a}>{a}</option>)}
		</select>
	);
}
/**
 * Esta es la estructura basica y lista para modificar de una Lista desplegable
 * 
 */

import { useState } from 'react';
import style from './css/basicData.module.css';

export function ListType( props ){

	const s = props.key_s;

	//Este vector maneja las opciones
	const [op] = useState([s,"2","3"]);

	function constructor( props ){

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	function handleChange(event) {
		this.setState({value: event.target.value})
	};
	
//Esta funcion se usa para enviar los datos seleccionados a donde te plasca

/** 
 	function handleSubmit (event) {
		alert('selected is: ' + this.state);
	}
*/

	return (
		<select className={style.listTypes} value={constructor} onChange={handleChange} >
			{op.map(a=><option value={a}>{a}</option>)}
		</select>
	);
}
//import db from '../firebase/credenciales';
import db from '../firebase/credenciales';
import style from '../css/Form.module.css';
import { InputImage } from './InputImage';
import {  useState } from 'react';
import { ListType } from './ListType';
import { InputCheck } from './InputCheck';
import { collection, addDoc } from "firebase/firestore";
import { InputDate } from './InputDate';

export function Form(){

	const init = {}

	const [values, setValues] = useState(init);

	const handleChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

	const handleSubmit = e => {
        e.preventDefault();
        addInfo(values);
    }

	 const addInfo = async (Objeto) => {
		try {
			await addDoc(collection(db, "conejos"), {Objeto});
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}

	return(
		<div className={style.subPanel}>
			<form  onSubmit={handleSubmit}>
				<div className={style.basicDataPanel}>
					<input name= 'nombre' type='text' className={style.name} placeholder='Nombre' onChange={handleChange}/>
					<input name="id" placeholder='ID'onChange={handleChange}></input>
					<InputDate iden="inputdate1" place="Fecha de nacimiento" handleChanche={handleChange}/>
					<InputDate iden="inputdate2" place="Fecha de destete" handleChanche={handleChange}	/>
					<ListType collection='raza' handleChanche={handleChange}/>
					<ListType collection='grupo' handleChanche={handleChange}/>
				</div>
				<InputImage ty="date" pl="Nombre" />
				<div className={style.addDataPanel}>
					<input name= 'peso' type='text' className={style.weight} placeholder='Peso' onChange={handleChange}/>
					<ListType collection='motivo' handleChanche={handleChange}/>
					<ListType collection='donde'handleChanche={handleChange}/>
					<input type="number" name="Calificacion" placeholder='Calificacion' onChange={handleChange}></input>
				</div>

					<InputCheck />

					<button className={style.submit}>→</button>
				</form>
			</div>
	);
}

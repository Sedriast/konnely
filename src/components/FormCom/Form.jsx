import app from '../firebase/credenciales';
import style from '../css/Form.module.css';
import { getFirestore } from "firebase/firestore";
import { InputImage } from './InputImage';
import { useState } from 'react';
import { ListType } from './ListType';
import { InputCheck } from './InputCheck';
import { collection, addDoc } from "firebase/firestore";
import { InputDate } from './InputDate';
const db = getFirestore(app);

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
					<InputImage ty="date" pl="Nombre" />
					<input className={style.name} type='text' name='nombre' placeholder='Nombre' onChange={handleChange} />
					<InputDate clName={style.birtDate} iden="birtDate" place="Fecha de nacimiento" handleChanche={handleChange} />
					<InputDate clName={style.desteteDate} iden="desteteDate" place="Fecha de destete" handleChanche={handleChange} />
					<ListType clName={style.race} collection='raza' handleChanche={handleChange} />
					<input className={style.weight} name= 'peso' type='text' placeholder='Peso' onChange={handleChange} />
					<ListType clName={style.grupe} collection='grupo' handleChanche={handleChange} />
				</div>
				<div className={style.addDataPanel}>
					<ListType clName={style.motive} collection='motivo' handleChanche={handleChange}/>
					<ListType clName={style.where} collection='donde'handleChanche={handleChange}/>
					<input className={style.qualification} type="number" name="Calificacion" placeholder='Calificacion' onChange={handleChange} />
					<input className={style.id} type='text' name="id" placeholder='ID'onChange={handleChange} />
				</div>

					<InputCheck />

					<button className={style.submit}>→</button>
				</form>
			</div>
	);
}

//import db from '../firebase/credenciales';
import db from '../firebase/credenciales';
import style from '../css/form.module.css';
import { InputImage } from './InputImage';
import {  useState } from 'react';
import { ListType } from './ListType';
import { InputCheck } from './InputCheck';
import { collection, addDoc } from "firebase/firestore";
import { InputDate } from './InputDate';

export function Form(){

	const init = {
        nombre:"",
        peso:"",
		raza:""
    }

	const [values, setValues] = useState(init);

	const handleChanche = e => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

	const handleSubmit = e => {
        e.preventDefault();
        addInfo(values);
    }

	 const addInfo = async (Objeto) => {
		try {
			const docRef = await addDoc(collection(db, "conejos"), {Objeto});
			console.log("Document written with ID: ", docRef.id);
			console.log(Objeto)
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}

	return(
		<div className={style.subPanel}>
			<form  onSubmit={handleSubmit}>
				<div className={style.basicDataPanel}>
					<input name= 'nombre' type='text' className={style.name} placeholder='Nombre' onChange={handleChanche}/>
					<InputDate place="Fecha de nacimiento" />
					<InputDate place="Fecha de destete" />
					<ListType name="raza" collection='raza'/>
					<input name= 'peso' type='text' className={style.weight} placeholder='Peso'onChange={handleChanche}/>
					<ListType collection='grupo'/>
				</div>
					<InputImage ty="date" pl="Nombre" />
				<div className={style.addDataPanel}>
					<ListType collection='motivo'/>
					<ListType collection='donde'/>
					<input name="Calificacion" placeholder='Calificacion' onChange={handleChanche}></input>
					<input name="id" placeholder='ID'onChange={handleChanche}></input>
				</div>

				<InputCheck />

				<button className={style.submit}>→</button>
			</form>
		</div>
	);
}

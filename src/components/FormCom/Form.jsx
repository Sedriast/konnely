//import db from '../firebase/credenciales';
import style3 from './css/aditionalData.module.css';
import style2 from './css/basicData.module.css';
import style from '../css/form.module.css';
import { InputImage } from './InputImage';
//import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import { ListType } from './ListType';
import { InputCheck } from './InputCheck';

export function Form(props){

	const init = {
        nombre:"",
        peso:""
    }

	const [values, setValues] = useState(init);

	const handleChanche = e => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

	const handleSubmit = e => {
        e.preventDefault();
        props.AddOrEdit(values);
    }

	/**
	 const addInfo = async (Objeto) => {
		try {
			const docRef = await addDoc(collection(db, "conejos"), {Objeto});
			console.log("Document written with ID: ", docRef.id);
			console.log(Objeto)
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}
	 */
	
	return(
		<div className={style.inputsPanel}>
			<form className={style2.basicDataPanel} onSubmit={handleSubmit}>
				<input name= 'nombre' type='text' className={style.name} placeholder='Nombre' onChange={handleChanche}/>
				<input type='date' className={style.dateBirth} /> 
				<input type='date' className={style.dateDestete} />
				<ListType k="Raza"/>
				<input name= 'peso' type='text' className={style.weight} placeholder='Peso'onChange={handleChanche}/>
				<ListType k="Grupo asignado"/>
			</form>
			<InputImage ty="date" pl="Nombre" />
			<form className={style3.addDataPanel} onSubmit={handleSubmit}>
				<ListType k="Motivo del ingreso"/>
				<ListType k="¿Donde?"/>
				<input name="Calificacion" placeholder='Calificacion' onChange={handleChanche}></input>
				<input name="id" placeholder='ID'onChange={handleChanche}></input>
			</form>
			<InputCheck />
			<button className={style.submit}>→</button>
		</div>
	);
}
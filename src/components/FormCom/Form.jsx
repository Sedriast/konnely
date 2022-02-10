//import db from '../firebase/credenciales';
import db from '../firebase/credenciales';
import style3 from './css/aditionalData.module.css';
import style2 from './css/basicData.module.css';
import style from '../css/form.module.css';
import { InputImage } from './InputImage';
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { ListType } from './ListType';
import { InputCheck } from './InputCheck';

export function Form(props){

	const init = {
        nombre:"",
        peso:""
    }

	const [values, setValues] = useState(init);
	const [list, setList] = useState([{ name: "Loading...", id: "initial" }]);


	const handleChanche = e => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

	const handleSubmit = e => {
        e.preventDefault();
        props.AddOrEdit(values);
    }

	useEffect(
		() =>
		  onSnapshot(collection(db, "raza"), (snapshot) =>
			setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
		  ),
		[]);

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
	 
	function lista_2 () {
		const lo = [];
		JSON.stringify(list, replacer);

		function replacer(key, value) {
			// Filtrando propiedades 
			if (typeof value === "string") {
				lo.push(value);
			}
			return value;
		  }
		return lo;
	}

	
	console.log(lista_2())
	*/
/*
	function lista_3 () {
		const lo = [ ];
		list.map((color) => (
			lo.push(color.name)
			))
		return lo
	}

	function id () {
		const id = [];
		list.map((color) => (
			id.push(color.id)
			))
		
		return id;
	}
*/
	return(
		<div className={style.subPanel}>

			<form className={style.basicDataPanel} onSubmit={handleSubmit}>
				<input type='text' name= 'nombre' placeholder='Nombre' onChange={handleChanche}/>
				<input type='date' /> 
				<input type='date' />
				<ListType k="Raza"/>
				<input type='text' name= 'peso' placeholder='Peso' onChange={handleChanche}/>
				<ListType k="Grupo asignado"/>
			</form>

			<InputImage />

			<form className={style.addDataPanel} onSubmit={handleSubmit}>
				<ListType k="Motivo del ingreso"/>
				<ListType k="¿Donde?"/>
				<input type="text" name="Calificacion" placeholder='Calificacion' onChange={handleChanche}></input>
				<input type="text" name="id" placeholder='ID'onChange={handleChanche}></input>
			</form>

			<InputCheck />

			<button className={style.submit}>→</button>

		</div>
	);
}

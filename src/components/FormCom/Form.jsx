import app from '../firebase/credenciales';
import style from '../css/Form.module.css';
import { getFirestore } from "firebase/firestore";
import { InputImage } from './InputImage';
import { useState } from 'react';
import { ListType } from './ListType';
import { ListTypeMH } from './ListTypeMH';
import { collection, addDoc } from "firebase/firestore";
import { InputDate } from './InputDate';
import { Btn } from '../Buttons/Btn';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const db = getFirestore(app);
const storage = getStorage(app);

export function Form(){

	const init = {}

	const [values, setValues] = useState(init);
	const [stateH, setStateH] = useState(false);
	const [stateM, setStateM] = useState(false);
	const [image, setImage] = useState();

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
			const storageRef = ref(storage, image.name);
			await uploadBytes(storageRef, image);
			const urlDescarga = await getDownloadURL(storageRef);
			Objeto.url =urlDescarga;
			await addDoc(collection(db, "conejos"), {Objeto});
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}

	const summitState = e => {
		console.log(e.target.value);
		if (e.target.value === "Hembra") {
				setStateM(true);
		}else if (e.target.value === "Macho") {
				setStateH(true);
		}

	}

	const summitStateLeave = e => {
		console.log(e.target.value);
		if (e.target.value === "Hembra" | e.target.value === "Macho") {
			setStateH(false);
			setStateM(false);
	}
	}

	function HaveImage (e) {
		setImage(e);
	}

	return(
		<div className={style.subPanel}>
			<form>
				<div className={style.basicDataPanel} >
					<InputImage ty="date" pl="Nombre" HaveImage={HaveImage} />
					<input className={style.name} type='text' name='nombre' placeholder='Nombre' onChange={handleChange} />
					<InputDate clName={style.birtDate} iden="birtDate" place="Fecha de nacimiento" handleChanche={handleChange} />
					<InputDate clName={style.desteteDate} iden="desteteDate" place="Fecha de destete" handleChanche={handleChange} />
					<ListType clName={style.race} collection='raza' handleChanche={handleChange}/>
					<input className={style.weight} name= 'peso' type='text' placeholder='Peso' onChange={handleChange} />
					<ListType clName={style.grupe} collection='grupo' handleChanche={handleChange} />
				</div>
				<div className={style.addDataPanel}>
					<ListType clName={style.motive} collection='motivo' handleChanche={handleChange}/>
					<ListType clName={style.where} collection='donde'handleChanche={handleChange}/>
					<input className={style.qualification} type="number" name="Calificacion" placeholder='Calificacion' onChange={handleChange} />
					<input className={style.id} type='text' name="id" placeholder='ID'onChange={handleChange} />
					<ListTypeMH clName={style.female} collection='hembra' handleChanche={handleChange} desabilitar={stateH} summitState={summitState} summitStateLeave={summitStateLeave} />
					<ListTypeMH clName={style.masle} collection='macho' handleChanche={handleChange} desabilitar={stateM} summitState={summitState} summitStateLeave={summitStateLeave} />
					<Btn clName={style.subPanelB} text_='→' itemPath='/listView' oClick_B={handleSubmit} />
				</div>
			</form>
		</div>
	);
}

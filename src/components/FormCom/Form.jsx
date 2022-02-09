import style from '../css/form.module.css';
import { AditionalData } from './AditionalData';
import { BasicData } from './BasicData';
import { InputImage } from './InputImage';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/credenciales'

export function Form(){

    /*
    Funcion asincrona que toma el objeto con los datos del conejo y muestra por consola en que id lo almaceno, ademas si hay algun error tambien lo muestra por consola.
    */
    const addinformation = async (Objeto) => {
        try {
            const docRef = await addDoc(collection(db, "conejos"), {Objeto});
            console.log("Document written with ID: ", docRef.id);
            console.log(Objeto)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };
    
    return(
        <div className={style.inputsPanel}>
            <BasicData AddOrEdit = {addinformation} />
            <InputImage />
            <hr />
            <AditionalData AddOrEdit = {addinformation}/>
        </div>
    );
}
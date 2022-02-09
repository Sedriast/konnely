import { useState } from 'react';
import style from './css/basicData.module.css';
import { ListType } from './ListType';

export function BasicData(props){
    
    /*
    Se almacena en un variable los datos iniciales para poder regresar al valor inicial todo el formulario.
    */
    const valoresiniciales = {
        nombre:"",
        peso:""
    };

    /* 
    Se almacena en el estado los valores iniciales
    */
    const [valores, setvalores] = useState(valoresiniciales);

    /*
    A traves de la funcion del estado, se copia y reemplaza los valores iniciales por el valor ingresado por el usuario.
    */
    const cambios = e => {
        const {name, value} = e.target;
        setvalores({...valores, [name]:value})
    }

    /*
    Aqui se envia los datos en forma de array al componenete padre encargado de enviar los datos a la firebase.
    */
    const enviardatos = e => {
        e.preventDefault();
        props.AddOrEdit(valores);
    };
    /*
    Cada input tieen un name que se utiliza para tomarlo como referencia cuando el usuario agrega o cambia el valor de dicho input.
    */
    return(
        <form onSubmit={enviardatos}>
        <div className={style.basicDataPanel}>
            <input name= 'nombre' type='text' className={style.name} placeholder='Nombre' onChange={cambios}/>
            <input type='date' className={style.dateBirth} /> 
            <input type='date' className={style.dateDestete} />
            <ListType key_s="Raza"/>
            <input name= 'peso' type='text' className={style.weight} placeholder='Peso'onChange={cambios}/>
            <ListType key_s="Grupo asignado"/>
            <button className={style.enviar}>Enviar</button>
        </div>
        </form>
    );
}
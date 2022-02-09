import { useState } from 'react';
import style from './css/aditionalData.module.css';
import { ListType } from './ListType';

export function AditionalData(props){

    const valoresiniciales = {
        calificacion:"",
        id:""
    };

    const [valores, setvalores] = useState(valoresiniciales);

    const cambios = e => {
        const {name, value} = e.target;
        setvalores({...valores, [name]:value})
    };

    const enviardatos = e => {
        e.preventDefault();
        props.AddOrEdit(valores)
        console.log(valores);
    };

    return(
        <form onSubmit={enviardatos}>
        <div className={style.addDataPanel}>
            <ListType key_s="Motivo del ingreso"/>
            <ListType key_s="¿Donde?"/>
            <input name="Calificacion" placeholder='Calificacion' onChange={cambios}></input>
            <input name="id" placeholder='ID'onChange={cambios}></input>
        </div>
        </form>
    );
}
import { useState } from 'react';
import { Inputs } from '../Tools/Inputs/Inputs';
import st from './css/NewTrats.module.css';

export function NewTrats() {
    const [values, setValues] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    return (
        <div className={st.container}>
            <div className={st.backBTN}></div>
            <div className={st.panel}>
                <Inputs
                    name_='tratamiento'
                    type_='text'
                    leyend='ID.Tratamiento'
                    handleChange={handleChange}
                />

                <Inputs leyend='Fecha' type_='text' handleChange={handleChange} />

                <Inputs
                    leyend='Enfermedad'
                    type_='text'
                    handleChange={handleChange}
                />

                <Inputs leyend='Chequeo' type_='text' handleChange={handleChange} />

                <div className={st.obse}>
                    <Inputs
                        leyend='Obserbaciones'
                        type_='text'
                        handleChange={handleChange}
                    />
                </div>

                <div className={st.imgs}>
                    <Inputs leyend='Imagenes' type_='file' />
                </div>
            </div>
            <div className={st.saveBTN}></div>
        </div>
    );
}

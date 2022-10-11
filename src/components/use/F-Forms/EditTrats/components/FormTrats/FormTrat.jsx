import st from './FormTrat.module.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { basicData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { AddTratament } from '../../../../../firebase/funtions/AddInformation';

import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { conditionalBasis } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function FormTrat() {
    const navigate = useNavigate();
    const [values, setValues] = useState({});

    const updateState = (name, value) => {
        setValues({ ...values, [name]: value });
    };
    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'date') {
            e.target.value = conditionalBasis(updateState, name, value);
        }
        updateState(name, value);
    }
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <div className={st.container}>
            <h1 className={st.d}>
                Llene los campos del tratamiento con la nueva información:
                <br />
                <br />
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let aux = {};
                    for (const element of e.target) {
                        if (element.name !== '') {
                            aux = { ...aux, [element.name]: element.value };
                        }
                    }
                    aux.uidRabbit = basicData.info.uid;
                    AddTratament(aux);
                }}
                action=''>
                <Inputs name='date' type='date' leyend='Fecha' handleChange={handleChange} />
                <Inputs name='signs' type='text' leyend='Sintomas' handleChange={handleChange} />
                <Inputs name='diagnosis' type='text' leyend='Diagnostico' handleChange={handleChange} />
                <Inputs name='treatment' type='text' leyend='Tratamiento' handleChange={handleChange} />
                <Inputs name='result' type='text' leyend='Resultados' handleChange={handleChange} />
                <Inputs
                    name='professional'
                    type='text'
                    leyend='Nombre del profecional'
                    handleChange={handleChange}
                />
                <div className={st.btn}>
                    <button type='submit'>
                        <div>
                            <figure title='Guardar cambios' tooltip-dir='top'>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </figure>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
}
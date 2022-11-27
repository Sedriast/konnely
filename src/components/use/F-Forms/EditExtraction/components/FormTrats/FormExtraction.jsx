import st from './FormTrat.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { basicData, recuperarExtraction, extractionData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { UpdateInformation } from '../../../../../firebase/funtions/AddInformation';

import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { conditionalBasisEdit } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lists } from '../../../../0-GeneralComp/1-List/Lists';
import { GetDocument } from '../../../../../firebase/funtions/GetInformation';
import swal from 'sweetalert';

export function FormExtraction() {
    const navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'date') {
            e.target.value = conditionalBasisEdit(value, extractionData.info.date);
        }
    }
    useEffect(() => {
        if (basicData.id === null && extractionData.info === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <div className={st.container}>
            <h1 className={st.d}>
                Diligencie los campos de la extracción de semen con la nueva información:
                <br />
                <br />
            </h1>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    let aux = {};
                    for (const element of e.target) {
                        if (element.name !== '') {
                            aux = { ...aux, [element.name]: element.value };
                        }
                    }
                    aux.uidRabbit = basicData.info.uid;
                    await UpdateInformation({
                        coleccion: 'extraction',
                        uid: extractionData.info.uid,
                        data: aux,
                    }).then(() => {
                        swal({
                            title: 'Su actualización se ha realizado correctamente',
                            icon: 'success',
                            button: 'aceptar',
                        }).then(() => {
                            window.history.back();
                            recuperarExtraction(null);
                        });
                    });
                }}
                action=''>
                <Inputs
                    value={extractionData.info.date}
                    name='date'
                    type='date'
                    leyend='Fecha'
                    handleChange={handleChange}
                />
                <Lists
                    value_={extractionData.info.methods}
                    name_='methods'
                    leyend='Metodo de extracción'
                    listar={GetDocument({ coleccion: 'lists', list: 'semenMethods' }).props.children[0].values}
                    handleChange={handleChange}
                />
                <Inputs
                    value={extractionData.info.volume}
                    name='volume'
                    type='number'
                    leyend='Volumen (mL)'
                    handleChange={handleChange}
                />
                <Inputs
                    value={extractionData.info.pajillas}
                    name='pajillas'
                    type='number'
                    leyend='Número de Pajillas'
                    handleChange={handleChange}
                />
                <Inputs
                    value={extractionData.info.observations}
                    name='observations'
                    type='text'
                    leyend='Observaciones'
                    handleChange={handleChange}
                />
                <Inputs
                    value={extractionData.info.professional}
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

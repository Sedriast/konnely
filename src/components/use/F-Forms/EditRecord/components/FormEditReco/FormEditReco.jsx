import st from './FormEditReco.module.css';

import { useState } from 'react';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { basicData, recuperarSales, SalesData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { addRegisters } from '../../../../../firebase/funtions/AddInformation';

import { Inputs } from '../../../../0-GeneralComp/1-Inputs/Inputs';
import { conditionalBasisEdit } from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import swal from 'sweetalert';
import { GenerateInputs } from '../../../../0-GeneralComp/0-Scripts/GenerateInputs';
import { SearchAll } from '../../../../../firebase/funtions/GetInformation';

export function FormHis() {
    const [rabbits, setRabbits] = useState(0);
    const coleccionInfo = SearchAll({ coleccion: 'rabbits' }).props.children;

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'date') {
            e.target.value = conditionalBasisEdit(value, null);
        }
        if (name === 'rabbits') {
            setRabbits(parseInt(e.target.value));
        }
    }

    const info = (e) => {
        if (e.length !== 0) {
            recuperarSales(e);
        }
    };
    const buscar = (e) => {
        let valor = false;
        let elemento = {};
        if (e !== '' && e !== null && e !== undefined) {
            coleccionInfo.filter(function (element) {
                if (element.id.toLowerCase().includes(e.toLowerCase()) && element.estado === 'Activo') {
                    valor = true;
                    elemento = element;
                }
                return false;
            });
            return { valor: valor, elemento: elemento };
        }
    };
    const VerificationSearch = () => {
        let SearchVerification = [];
        let informacion = [];
        SalesData?.info?.map((e) => {
            if (e.id === '' || e.id === undefined || e.id === null) {
                SearchVerification.push(false);
            } else if (e.valor === '' || e.valor === undefined || e.valor === null) {
                SearchVerification.push(false);
            } else if (buscar(e.id).valor) {
                SearchVerification.push(true);
                informacion.push(buscar(e.id).elemento);
            } else {
                SearchVerification.push(false);
            }
            return false;
        });
        return { verificacion: SearchVerification, informacion: informacion };
    };
    return (
        <div className={st.container}>
            <h1 className={st.d}>Nueva venta</h1>
            <hr />
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    let aux = {};

                    for (const element of e.target) {
                        if (element.value !== '' && element.value !== null && element.value !== undefined) {
                            if (!element.name.includes('Conejo') && !element.name.includes('Precio')) {
                                aux = { ...aux, [element.name]: element.value };
                            }
                        }
                    }
                    if (
                        Object.keys(aux).length === 6 &&
                        SalesData?.info.length === rabbits &&
                        VerificationSearch().verificacion.every((e) => e === true)
                    ) {
                        aux.uidRabbit = basicData?.info?.uid;
                        aux.rabbits = SalesData?.info;
                        await addRegisters({
                            coleccion: 'sales',
                            props: aux,
                            conejos: VerificationSearch().informacion,
                        }).then(() => {
                            swal({
                                title: 'La nueva venta se ha añadido correctamente',
                                icon: 'success',
                                button: 'aceptar',
                            }).then(() => {
                                window.history.back();
                            });
                        });
                    } else {
                        swal({
                            title: 'No se ha podido añadir la nueva venta',
                            text: 'Esto puede pasar porque no se ha diligenciado todos los campos y/o no existen registros de conejos con esos identificadores',
                            icon: 'error',
                            button: 'aceptar',
                        });
                    }
                }}>
                <Inputs name='date' type='date' leyend='Fecha' handleChange={handleChange} />
                <Inputs name='seller' type='text' leyend='Vendedor' handleChange={handleChange} />
                <Inputs name='buyer' type='text' leyend='Comprador/a' handleChange={handleChange} />
                <Inputs name='transaction' type='text' leyend='Tipo de transacción' handleChange={handleChange} />
                <Inputs name='manager' type='text' leyend='Nombre del administrador' handleChange={handleChange} />
                <Inputs name='rabbits' type='number' leyend='Número de conejos' handleChange={handleChange} />
                {rabbits !== 0 &&
                    rabbits !== null &&
                    rabbits !== '' &&
                    rabbits !== undefined &&
                    !isNaN(rabbits) && (
                        <>
                            <hr id={st.line} />
                            <div className={st.container_}>
                                <div className={st.creator}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Identificadres</th>
                                                <td>Valor ($)</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <GenerateInputs numero={rabbits} info={info} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    )}
                <hr />
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

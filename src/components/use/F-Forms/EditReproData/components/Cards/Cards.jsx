import swal from 'sweetalert';
import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import {
    conditionalBasisEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { useState } from 'react';
import { useAuth } from '../../../../../../context/AuthContext';
import { formatCycleReproductive } from '../../../../0-GeneralComp/0-StaticData/Dates/format';
import { UpdateReproductiveCycle } from '../../../../../firebase/funtions/AddInformation';
import { QueriesSimple_ } from '../../../../../firebase/funtions/GetInformation';
import { basicData, recuperar } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export function Cards({ item, stages }) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [date, setDate] = useState(stages[0].date);
    const males = QueriesSimple_({
        coleccion: 'rabbits',
        parametro: 'genero',
        busqueda: 'Macho',
    }).props.children;
    const Valor = (e) => {
        return males.filter(function (element) {
            if (
                element.id.toString().toLowerCase().includes(e.target.Macho.value.toLowerCase()) &&
                element.genero === 'Macho' &&
                element.estado !== 'Inactivo'
            ) {
                return element;
            } else {
                swal({
                    title: 'El identificador ingresado no corresponde a un macho activo o es de otra hembra',
                    dangerMode: true,
                    icon: 'warning',
                    button: 'Aceptar',
                });
                return null;
            }
        });
    };
    const autentication = (e) => {
        const valor = Valor(e);
        if (valor[0] !== undefined) {
            if (valor[0].idPadre === basicData.info.idPadre || valor[0].idMadre === basicData.info.idMadre) {
                swal({
                    title: 'Estos conejos son hermanos, no puede reproducirlos entre si',
                    dangerMode: true,
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                swal({
                    title: '¿Esta segura o seguro de actualizar este ciclo reproductivo?',
                    icon: 'success',
                    buttons: ['Cancelar', 'Aceptar'],
                }).then(async (respuesta) => {
                    if (respuesta) {
                        await UpdateReproductiveCycle({
                            props: formatCycleReproductive({
                                e: e,
                                format: item,
                                user: user,
                                rabbitMother: basicData?.info,
                                rabbitFather: valor[0],
                            }),
                            reproductivecycle: basicData?.info?.reproductivecycle,
                        }).then(() => {
                            recuperar(basicData?.info?.id);
                            swal({
                                title: 'Ciclo reproductivo actualizado con exito',
                                icon: 'success',
                                button: 'Aceptar',
                            }).then(() => {
                                navigate('/vitae');
                            });
                        });
                    }
                });
            }
        } else {
            swal({
                title: 'No existe un registro de este conejo, ¿segura o seguro que desea actualizar este ciclo reproductivo?',
                dangerMode: true,
                icon: 'warning',
                buttons: ['Cancelar', 'Aceptar'],
            }).then(async (respuesta) => {
                if (respuesta) {
                    await UpdateReproductiveCycle({
                        props: formatCycleReproductive({
                            e: e,
                            format: item,
                            user: user,
                            rabbitMother: basicData?.info,
                            rabbitFather: undefined,
                        }),
                        reproductivecycle: basicData?.info?.reproductivecycle,
                    }).then(() => {
                        recuperar(basicData?.info?.id);
                        swal({
                            title: 'Ciclo reproductivo actualizado con exito',
                            icon: 'success',
                            button: 'Aceptar',
                        }).then(() => {
                            navigate('/vitae');
                        });
                    });
                }
            });
        }
    };
    function handleChange(e) {
        if (e.target.name === 'DateInitial') {
            e.target.value = conditionalBasisEdit(e.target.value, stages[0].date);
            setDate(e.target.value);
            setDate({ DateInitial: e.target.value });
        } else if (e.target.name === 'DatePalpacion') {
            e.target.value = conditionalNextEdit(e.target.value, stages[1].date, date);
        } else if (e.target.name === 'DatePreparto') {
            e.target.value = conditionalNextEdit(e.target.value, stages[2].date, date);
        } else if (e.target.name === 'DateParto') {
            e.target.value = conditionalNextEdit(e.target.value, stages[3].date, date);
        } else if (e.target.name === 'DateDestete') {
            e.target.value = conditionalNextEdit(e.target.value, stages[4].date, date);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }

    return (
        <div className={st.container}>
            <form
                className={st.panelInfo}
                onSubmit={async (e) => {
                    e.preventDefault();
                    let aux = {};
                    for (const element of e.target) {
                        if (element.value !== '' && element.value !== null && element.value !== undefined) {
                            aux = { ...aux, [element.name]: element.value };
                        }
                    }
                    if (
                        e.target.DateInitial.value &&
                        e.target.idCamada.value &&
                        e.target.Macho.value &&
                        Valor(e) !== null
                    ) {
                        if (basicData?.info?.estado === 'Activo') {
                            autentication(e);
                        } else {
                            if (Object.keys(aux).length === 16) {
                                autentication(e);
                            } else {
                                swal({
                                    title: 'Por favor, verifique que todos los campos esten llenos',
                                    icon: 'error',
                                    button: 'Aceptar',
                                    dangerMode: true,
                                });
                            }
                        }
                    } else {
                        swal({
                            title: 'Debe ingresar un identidicador de la camada, una fecha inicial y un macho',
                            dangerMode: true,
                            icon: 'error',
                            button: 'aceptar',
                        });
                    }
                }}>
                {stages?.map((element) => {
                    return <Ref stage={element} handleChange={handleChange} date={date} />;
                })}
                <hr />
                <div className={st.btn}>
                    <button type='submit'>
                        <figure title='Guardar cambios' tooltip-dir='top'>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </figure>
                    </button>
                </div>
            </form>
        </div>
    );
}

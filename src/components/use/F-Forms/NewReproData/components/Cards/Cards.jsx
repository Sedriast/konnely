import st from './Cards.module.css';

import { useState } from 'react';

import { Ref } from './components/Ref/Ref';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
    conditionalBasisEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { useAuth } from '../../../../../../context/AuthContext';
import { AddReproductiveCycle } from '../../../../../firebase/funtions/AddInformation';
import { formatCycleReproductive } from '../../../../0-GeneralComp/0-StaticData/Dates/format';
import { SearchAll } from '../../../../../firebase/funtions/GetInformation';
import { basicData, recuperar } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export function Cards({ litterPrueba, stages }) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const males = SearchAll({ coleccion: 'rabbits' }).props.children;
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
            if (valor[0].idPadre === basicData?.info?.idPadre || valor[0].idMadre === basicData?.info?.idMadre) {
                swal({
                    title: 'Estos conejos son hermanos, no puede reproducirlos entre si',
                    dangerMode: true,
                    icon: 'error',
                    button: 'aceptar',
                });
            } else {
                swal({
                    title: '¿Esta segura o seguro de guardar este ciclo reproductivo?',
                    icon: 'success',
                    buttons: ['Cancelar', 'Aceptar'],
                }).then(async (respuesta) => {
                    if (respuesta) {
                        await AddReproductiveCycle({
                            props: formatCycleReproductive({
                                e: e,
                                format: litterPrueba,
                                user: user,
                                rabbitMother: basicData?.info,
                                rabbitFather: valor[0],
                            }),
                            reproductivecycle: basicData?.info?.reproductivecycle,
                        }).then(() => {
                            recuperar(basicData?.info?.id);
                            swal({
                                title: 'Ciclo reproductivo creado con exito',
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
                title: 'No existe un registro de este conejo, ¿segura o seguro que desea guardar este ciclo reproductivo?',
                dangerMode: true,
                icon: 'warning',
                buttons: ['Cancelar', 'Aceptar'],
            }).then(async (respuesta) => {
                if (respuesta) {
                    await AddReproductiveCycle({
                        props: formatCycleReproductive({
                            e: e,
                            format: litterPrueba,
                            user: user,
                            rabbitMother: basicData?.info,
                            rabbitFather: undefined,
                        }),
                        reproductivecycle: basicData?.info?.reproductivecycle,
                    }).then(() => {
                        recuperar(basicData?.info?.id);
                        swal({
                            title: 'Ciclo reproductivo creado con exito',
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
            e.target.value = conditionalBasisEdit(e.target.value, null);
            setDate(e.target.value);
        } else if (e.target.type === 'date') {
            e.target.value = conditionalNextEdit(e.target.value, null, date);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }

    const cm = (
        <div className={st.container}>
            <form
                onSubmit={(e) => {
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
                }}
                className={st.panelInfo}>
                {stages?.map((element) => (
                    <Ref key={element.title} stage={element} handleChange={handleChange} date={date} />
                ))}
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

    return cm;
}

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
import { QueriesSimple_ } from '../../../../../firebase/funtions/GetInformation';
import { basicData } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Cards({ id, litterPrueba, stages }) {
    const { user } = useAuth();
    const [date, setDate] = useState(null);
    const males = QueriesSimple_({
        coleccion: 'rabbits',
        parametro: 'genero',
        busqueda: 'Macho',
    }).props.children;
    const rabbitMother = QueriesSimple_({ coleccion: 'rabbits', parametro: 'uid', busqueda: basicData.info.uid })
        .props.children[0];

    const autentication = (e, valor) => {
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
                    title: '¿Esta segura o seguro de guardar este ciclo reproductivo?',
                    icon: 'success',
                    buttons: ['Cancelar', 'Aceptar'],
                }).then(async (respuesta) => {
                    if (respuesta) {
                        await AddReproductiveCycle(
                            formatCycleReproductive({
                                e: e,
                                format: litterPrueba,
                                user: user,
                                rabbitMother: rabbitMother,
                                rabbitFather: valor[0],
                            })
                        ).then(() => {
                            swal({
                                title: 'Ciclo reproductivo creado con exito',
                                icon: 'success',
                                button: 'Aceptar',
                            }).then(() => {
                                window.history.back();
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
            }).then((respuesta) => {
                if (respuesta) {
                    AddReproductiveCycle(
                        formatCycleReproductive({
                            e: e,
                            format: litterPrueba,
                            user: user,
                            rabbitMother: rabbitMother,
                            rabbitFather: undefined,
                        })
                    ).then(() => {
                        swal({
                            title: 'Ciclo reproductivo creado con exito',
                            icon: 'success',
                            button: 'Aceptar',
                        }).then(() => {
                            window.history.back();
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
            <div className={st.panelId}>{id}</div>
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const valor = males.filter(function (element) {
                        if (element.id.toString().toLowerCase().includes(e.target.Macho.value.toLowerCase())) {
                            return element;
                        } else {
                            return null;
                        }
                    });
                    if (e.target.DateInitial.value && e.target.idCamada.value && e.target.Macho.value) {
                        autentication(e, valor);
                    } else {
                        swal({
                            title: 'Debe ingresar una fecha inicial un identidicador de la camada y un macho',
                            dangerMode: true,
                            icon: 'error',
                            button: 'aceptar',
                        });
                    }
                }}
                className={st.panelInfo}>
                {stages?.map((element) => {
                    return <Ref stage={element} handleChange={handleChange} date={date} />;
                })}
                <div className={st.btn}>
                    <button
                        type='submit'
                        onChange={() => {
                            window.history.back();
                        }}>
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

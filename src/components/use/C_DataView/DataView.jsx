import st from '../0-GeneralComp/OpContainers.module.css';

import { useEffect, useState } from 'react';

import {
    faCircleInfo,
    faSyringe,
    faWandMagicSparkles,
    faTrashAlt,
    faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Option } from './components/Option';
import { basicData, recuperar } from '../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_, SearchAll } from '../../firebase/funtions/GetInformation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { StateRabbit } from '../../firebase/funtions/AddInformation';
import swal from 'sweetalert';
import { DateInactive } from '../0-GeneralComp/0-StaticData/Dates/Dates';

export function DataView() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const usuario = QueriesSimple_({ coleccion: 'users', parametro: 'uid', busqueda: user?.uid }).props.children[0];
    const coleccionInfo = SearchAll({ coleccion: 'rabbits' }).props.children;
    const rabbit = QueriesSimple_({ coleccion: 'rabbits', parametro: 'id', busqueda: basicData?.id }).props
        .children[0];
    const buscar = (e) => {
        let valor = false;
        if (e !== '' && e !== null && e !== undefined) {
            coleccionInfo.filter(function (element) {
                if (element.id.toLowerCase().includes(e.toLowerCase())) {
                    valor = true;
                }
                return false;
            });
            return valor;
        }
    };
    const [optionSelect, setOptionSelect] = useState(0);
    const fal = () => {
        setOptionSelect(0);
    };
    const tru = () => {
        setOptionSelect(1);
    };
    const def = () => {
        setOptionSelect(2);
    };
    const inactiveRabbit = () => {
        swal({
            title: '¿Estás seguro?',
            text: 'Una vez inactivado, no podrás recuperar este conejo',
            icon: 'warning',
            buttons: ['Cancelar', 'Inactivar'],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                await StateRabbit({ coleccion: 'rabbits', props: basicData?.info, estado: 'Inactivo' }).then(() => {
                    swal({
                        title: 'El conejo ha sido inactivado',
                        text: 'Puedes encontrarlo en la sección de conejos inactivos',
                        icon: 'success',
                        button: 'Aceptar',
                        dangerMode: true,
                    }).then(() => {
                        navigate('/vitaeslist');
                    });
                });
            } else {
                swal({
                    title: 'Cancelado',
                    icon: 'error',
                    timer: 2500,
                    dangerMode: true,
                });
            }
        });
    };
    const activeRabbit = () => {
        swal({
            title: '¿Estás seguro?',
            text: 'Si ya existe un conejo con este identificador o si este conejo se inactivo hace mas de 6 meses, no se podra activar',
            icon: 'info',
            buttons: ['Cancelar', 'Activar'],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                if (!buscar(basicData?.info.id) && !DateInactive(basicData?.info?.InactiveDate)) {
                    await StateRabbit({ coleccion: 'rabbits', props: basicData?.info, estado: 'Activo' }).then(
                        () => {
                            swal({
                                title: 'El conejo ha sido activado corectamente',
                                icon: 'success',
                                button: 'Aceptar',
                                dangerMode: true,
                            }).then(() => {
                                navigate('/vitaeslist');
                            });
                        }
                    );
                } else {
                    swal({
                        title: 'No se puede activar',
                        icon: 'error',
                        button: 'Aceptar',
                        dangerMode: true,
                    });
                }
            } else {
                swal({
                    title: 'Cancelado',
                    icon: 'error',
                    timer: 2500,
                    dangerMode: true,
                });
            }
        });
    };
    const dataViewOptionsUser = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
    ];
    const dataViewOptionsUser_ = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
        {
            id: 2,
            state: def,
            icon: faWandMagicSparkles,
            path: '#',
            label: 'Recolección de semen',
        },
    ];
    const dataViewOptions = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
        {
            id: 2,
            state: inactiveRabbit,
            icon: faTrashAlt,
            path: '#',
            label: 'Inactivar',
        },
    ];
    const dataViewOptions_ = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
        {
            id: 2,
            state: def,
            icon: faWandMagicSparkles,
            path: '#',
            label: 'Recolección de semen',
        },
        {
            id: 3,
            state: inactiveRabbit,
            icon: faTrashAlt,
            path: '#',
            label: 'Inactivar',
        },
    ];
    const dataViewOptionsInactivo = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
        {
            id: 2,
            state: activeRabbit,
            icon: faSquareCheck,
            path: '#',
            label: 'Activar',
        },
    ];
    const dataViewOptionsInactivo_ = [
        {
            id: 0,
            state: fal,
            icon: faCircleInfo,
            path: '#',
            label: 'Información general',
        },
        {
            id: 1,
            state: tru,
            icon: faSyringe,
            path: '#',
            label: 'Tratamientos',
        },
        {
            id: 2,
            state: def,
            icon: faWandMagicSparkles,
            path: '#',
            label: 'Recolección de semen',
        },
        {
            id: 3,
            state: activeRabbit,
            icon: faSquareCheck,
            path: '#',
            label: 'Activar',
        },
    ];
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
        } else if (basicData?.info === undefined && basicData?.id !== null) {
            recuperar(basicData?.id, rabbit);
        }
    }, [navigate, rabbit]);

    return (
        <>
            {usuario !== undefined && usuario.rol === 'administrador' ? (
                <>
                    {basicData?.info?.estado === 'Activo' ? (
                        <>
                            <LeftBottomMenu
                                options={basicData?.info?.genero === 'Macho' ? dataViewOptions_ : dataViewOptions}
                            />
                        </>
                    ) : (
                        <>
                            <LeftBottomMenu
                                options={
                                    basicData?.info?.genero === 'Macho'
                                        ? dataViewOptionsInactivo_
                                        : dataViewOptionsInactivo
                                }
                            />
                        </>
                    )}
                </>
            ) : (
                <>
                    <LeftBottomMenu
                        options={basicData?.info?.genero === 'Macho' ? dataViewOptionsUser_ : dataViewOptionsUser}
                    />
                </>
            )}
            <div className={st.optionContainer}>
                <Option setOptionSelect={setOptionSelect} op={optionSelect} rabbit={basicData?.info} />
            </div>
            <RigthTopButtons BTNS={generalOptions} />
        </>
    );
}

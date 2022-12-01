import st from '../0-GeneralComp/OpContainers.module.css';

import { useEffect, useState } from 'react';

import { faCircleInfo, faSyringe, faWandMagicSparkles, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { Option } from './components/Option';
import { basicData, recuperar } from '../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../firebase/funtions/GetInformation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { InactiveRabbit } from '../../firebase/funtions/AddInformation';
import swal from 'sweetalert';

export function DataView() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const usuario = QueriesSimple_({ coleccion: 'users', parametro: 'uid', busqueda: user?.uid }).props.children[0];
    const rabbit = QueriesSimple_({ coleccion: 'rabbits', parametro: 'id', busqueda: basicData?.id }).props
        .children[0];
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
        } else if (basicData?.info === undefined && basicData?.id !== null) {
            recuperar(basicData?.id, rabbit);
        }
    }, [navigate, rabbit]);

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
    const delet = () => {
        swal({
            title: '¿Estás seguro?',
            text: 'Una vez inactivado, no podrás recuperar este conejo',
            icon: 'warning',
            buttons: ['Cancelar', 'Inactivar'],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                await InactiveRabbit({ coleccion: 'rabbits', props: basicData?.info }).then(() => {
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
            state: delet,
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
            state: delet,
            icon: faTrashAlt,
            path: '#',
            label: 'Eliminar',
        },
    ];

    return (
        <>
            {usuario !== undefined && usuario.rol === 'administrador' ? (
                <>
                    <LeftBottomMenu options={rabbit?.genero === 'Macho' ? dataViewOptions_ : dataViewOptions} />
                </>
            ) : (
                <>
                    <LeftBottomMenu
                        options={rabbit?.genero === 'Macho' ? dataViewOptionsUser_ : dataViewOptionsUser}
                    />
                </>
            )}
            <div className={st.optionContainer}>
                <Option setOptionSelect={setOptionSelect} op={optionSelect} rabbit={rabbit} />
            </div>
            <RigthTopButtons BTNS={generalOptions} />
        </>
    );
}

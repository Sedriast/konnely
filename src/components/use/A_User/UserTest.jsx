import st from './User.module.css';

import { useEffect, useState } from 'react';
import swal from 'sweetalert';

import { optionsDataAdmin, generalOptionsUser } from '../0-GeneralComp/0-StaticData/options';
import { useAuth } from '../../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { Option } from './components/Option';
import { Buttons } from '../0-GeneralComp/1-Buttons/Buttons';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';

export function UserTest() {
    const { logout, user } = useAuth();
    const [optionSelect, setOptionSelect] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        async function setSelect() {
            if (optionSelect !== null) {
                try {
                    const recuest = optionSelect;
                    if (recuest === String) {
                        console.log(recuest);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        setSelect();
    }, [user, optionSelect]);

    const handleSubmit = async () => {
        navigate('/');
        await logout().then(() => {
            window.location.reload(true);
        });
    };

    const exit = () => {
        try {
            swal({
                title: '¿Desea cerrar sesión?',
                icon: 'warning',
                buttons: ['No', 'Si'],
            }).then((respuesta) => {
                if (respuesta) {
                    handleSubmit();
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className={st.menuLeft}>
                {optionsDataAdmin.map((option) => {
                    return (
                        <div className={st.option} key={option.id} id={option.id}>
                            <Buttons
                                route='#'
                                label={option.label}
                                direction='rigth'
                                btnIconText={option.icon}
                                btnClick={() => {
                                    setOptionSelect(option.id);
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <div className={st.optionContainer}>
                o<Option op={optionSelect}></Option>
            </div>

            <RigthTopButtons BTNS={generalOptionsUser} u={false} click={exit} />
        </>
    );
}

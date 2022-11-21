import st from './User.module.css';

import { useEffect, useState } from 'react';
import swal from 'sweetalert';

import { optionsDataUser, optionsDataAdmin, generalOptionsUser } from '../0-GeneralComp/0-StaticData/options';
import { useAuth } from '../../../context/AuthContext';

import { useNavigate } from 'react-router-dom';
import { Option } from './components/Option';
import { Buttons } from '../0-GeneralComp/1-Buttons/Buttons';
import { QueriesSimple_ } from '../../firebase/funtions/GetInformation';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';

export function User() {
    const { logout, user } = useAuth();
    const [optionSelect, setOptionSelect] = useState(0);
    const [rol, setRol] = useState(null);

    const navigate = useNavigate();

    const usuario = QueriesSimple_({
        coleccion: 'users',
        parametro: 'uid',
        busqueda: user.uid,
    }).props.children[0];

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
        if (user && usuario !== undefined) {
            setRol(usuario);
        }
        setSelect();
    }, [user, optionSelect, usuario]);

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
            {rol !== null && (
                <>
                    <div className={st.menuLeft}>
                        {rol.rol === 'usuario'
                            ? optionsDataUser.map((option) => {
                                  return (
                                      <div key={option.id} id={option.id} className={st.optionST}>
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
                              })
                            : optionsDataAdmin.map((option) => {
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
                        <Option op={optionSelect}></Option>
                    </div>

                    <RigthTopButtons BTNS={generalOptionsUser} u={false} click={exit} />
                </>
            )}
        </>
    );
}

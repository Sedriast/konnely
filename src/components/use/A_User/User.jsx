import st from './styles/User.module.css';

import { useEffect, useState } from 'react';

import { optionsDataUser, optionsDataAdmin } from '../0-GeneralComp/0-StaticData/options';
import { useAuth } from '../../../context/AuthContext';

import { Option } from './components/Option';
import { UserData } from './components/UserData/UserData';
import { Buttons } from '../0-GeneralComp/1-Buttons/Buttons';
import { QueriesSimple_ } from '../../firebase/funtions/GetInformation';

export function User() {
    const { user } = useAuth();
    const [optionSelect, setOptionSelect] = useState(0);
    const [rol, setRol] = useState(null);

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
        if (user && usuario !== undefined) setRol(usuario);
        setSelect();
    }, [user, optionSelect, usuario]);
    return (
        <>
            {rol !== null && (
                <div className={st.container}>
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
                              })}
                    </div>
                    <div className={st.panel}>
                        <Option op={optionSelect}></Option>
                    </div>
                    <div className={st.menuRigth}>
                        <UserData user_={rol} />
                    </div>
                </div>
            )}
        </>
    );
}

import st from './Semen.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faFileCirclePlus, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

import { List } from './components/List';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';

export function Semen({ setOptionSelect }) {
    let activos = [];
    let inactivos = [];
    const [cam, setCam] = useState(true);
    const [search, setSearch] = useState('');
    const [search_, setSearch_] = useState(['']);
    const navigate = useNavigate();
    const extraction = QueriesSimple_({
        coleccion: 'extraction',
        parametro: 'uidRabbit',
        busqueda: basicData?.info?.uid,
    }).props.children;
    extraction.map((items) => {
        if (items.state === 'Activo') {
            return activos.push(items);
        } else if (items.state === 'Inactivo') {
            return inactivos.push(items);
        }
        return null;
    });

    function buscar(e) {
        setSearch(e);
        const valor = extraction.filter(function (element) {
            if (
                element.date.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.methods.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.professional.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.volume.toString().toLowerCase().includes(e.toLowerCase())
            )
                return element;
            return null;
        });
        setSearch_(valor);
    }
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate, extraction]);

    return (
        <div className={st.container}>
            <div className={st.panelSearchBar}>
                {search === '' && (
                    <div className={st.btnCam}>
                        <Buttons
                            btnIconText={cam ? faCheck : faXmark}
                            route='#'
                            label={cam ? 'Borrados' : 'Activos'}
                            direction='bottom'
                            btnClick={() => {
                                setCam(!cam);
                            }}
                        />
                    </div>
                )}
                <div className={st.new}>
                    <Buttons
                        btnIconText={faFileCirclePlus}
                        route='/addSemen'
                        label='Nuevo tratamiento'
                        direction='rigth'
                    />
                </div>
                <form>
                    <input
                        name='buscar'
                        type='search'
                        placeholder='Buscar'
                        onChange={(e) => {
                            buscar(e.target.value);
                        }}
                    />
                    <button className={st.btnSearch} type='submit'>
                        🔎
                    </button>
                </form>
            </div>
            <div className={st.panelItems}>
                {search === '' ? (
                    <List
                        setOptionSelect={setOptionSelect}
                        extractionsActivos={activos}
                        extractionsInactivos={inactivos}
                        stateCam={cam}
                    />
                ) : (
                    <List
                        setOptionSelect={setOptionSelect}
                        extractionsActivos={search_}
                        extractionsInactivos={search_}
                        stateCam={cam}
                    />
                )}
                {search_.length === 0 && <h1>No hay resultados</h1>}
            </div>
        </div>
    );
}

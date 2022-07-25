import swal from 'sweetalert';
import st from './css/List.module.css';

import { useState } from 'react';
import { DropdownList } from './DropdownList';

export function List() {
    // Fecha de hoy en formato timestamp
    let Prueba_1 = Date.now();
    // Convertir una fecha de string a formato timestamp
    console.log(Date.parse('2022-07-13'));
    // Extraer la fecha correspondiente a los cuatro meses seguidos en base al dia de hoy en formato timestamp
    let Prueba = new Date(Prueba_1 + 10605600000);
    // Imprimirlo en consola
    console.log(Prueba);

    let search = { vieja: 'init' };
    const [search_, setSearch_] = useState('');
    const [filter, setFilter] = useState('Hembra');
    const [parametro, setParametro] = useState('');
    const [auxsearch_, setAuxsearch_] = useState(null);

    function handleChange(e) {
        const { value } = e.target;
        setAuxsearch_(value);
        setParametro(value);
    }

    return (
        <>
            <div className={st.container}>
                <div className={st.pa}>
                    <div className={st.fil}>
                        <div className={st.opFb} id='b'>
                            <button
                                onClick={() => {
                                    setAuxsearch_('Macho');
                                    setSearch_('');
                                    setFilter('Macho');
                                }}></button>
                        </div>
                        <div className={st.opFr} id='r'>
                            <button
                                onClick={() => {
                                    setAuxsearch_('Hembra');
                                    setSearch_('');
                                    setFilter('Hembra');
                                }}></button>
                        </div>
                    </div>
                    <div className={st.se}>
                        <input value={parametro} placeholder='Buscar' onChange={handleChange}></input>
                        <button
                            onClick={() => {
                                if (auxsearch_ === null) {
                                    swal({
                                        title: 'Digite un identificador válido.',
                                        icon: 'error',
                                        button: 'aceptar',
                                    });
                                } else if (auxsearch_ !== null) {
                                    setSearch_(auxsearch_);
                                    setFilter('');
                                    setParametro('');
                                    setAuxsearch_('init');
                                }
                            }}>
                            🔎
                        </button>
                    </div>
                </div>
                <div className={st.panel}>
                    {filter === 'Hembra' && (
                        <DropdownList coleccion='conejos' parametro='genero' busqueda={filter} />
                    )}
                    {filter === 'Macho' && (
                        <DropdownList coleccion='conejos' parametro='genero' busqueda={filter} />
                    )}
                    {auxsearch_ === search.vieja && (
                        <DropdownList coleccion='conejos' parametro='id' busqueda={search_} />
                    )}
                </div>
            </div>
        </>
    );
}

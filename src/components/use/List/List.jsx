import st from './css/List.module.css';

import { useState } from 'react';
import { DropdownList } from './DropdownList';
import swal from 'sweetalert';

export function List() {
    let Prueba = new Date(1657670400000 + 43200000);
    console.log(Date.parse('2022-07-13'));
    console.log(Prueba);
    let search = { vieja: 'init' };
    const [search_, setSearch_] = useState('');
    const [filter, setFilter] = useState('green');
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
                                    setAuxsearch_('Azul');
                                    setSearch_('');
                                    setFilter('blue');
                                }}></button>
                        </div>
                        <div className={st.opFr} id='r'>
                            <button
                                onClick={() => {
                                    setAuxsearch_('Rojo');
                                    setSearch_('');
                                    setFilter('red');
                                }}></button>
                        </div>
                        <div className={st.opFg} id='g'>
                            <button
                                onClick={() => {
                                    setAuxsearch_('Verde');
                                    setSearch_('');
                                    setFilter('green');
                                }}></button>
                        </div>
                        <div className={st.opFw} id='w'>
                            <button
                                onClick={() => {
                                    setAuxsearch_('Blanco');
                                    setSearch_('');
                                    setFilter('white');
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
                    {filter === 'red' && <DropdownList coleccion='conejos' parametro='grupo' busqueda={filter} />}
                    {filter === 'blue' && <DropdownList coleccion='conejos' parametro='grupo' busqueda={filter} />}
                    {filter === 'white' && <DropdownList coleccion='conejos' parametro='grupo' busqueda={filter} />}
                    {filter === 'green' && <DropdownList coleccion='conejos' parametro='grupo' busqueda={filter} />}
                    {auxsearch_ === search.vieja && (
                        <DropdownList coleccion='conejos' parametro='id' busqueda={search_} />
                    )}
                </div>
            </div>
        </>
    );
}

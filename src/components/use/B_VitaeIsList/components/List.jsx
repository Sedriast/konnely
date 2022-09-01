import st from '../styles/List.module.css';
import swal from 'sweetalert';

import { useState } from 'react';

import { DropdownList } from './DropdownList';

export function List() {
    let search = { vieja: 'init' };
    const [filter, setFilter] = useState('Hembra');
    const [search_, setSearch_] = useState('init');
    const [parametro, setParametro] = useState('');
    const [auxsearch_, setAuxsearch_] = useState('');
    function reset() {
        setAuxsearch_('');
        setParametro('');
        setFilter('Hembra');
    }
    return (
        <>
            <div className={st.container}>
                <div className={st.panelSearchBar}>
                    <input
                        value={parametro}
                        placeholder='Buscar'
                        onChange={(e) => {
                            setAuxsearch_(e.target.value);
                            setParametro(e.target.value);
                        }}
                    />
                    <button
                        className={st.btnSearch}
                        onClick={() => {
                            if (auxsearch_ === '') {
                                swal({
                                    title: 'Digite un identificador válido.',
                                    icon: 'error',
                                    button: 'aceptar',
                                });
                            } else {
                                setSearch_(auxsearch_);
                                setFilter('');
                                setParametro('');
                                setAuxsearch_('init');
                            }
                        }}>
                        🔎
                    </button>
                    <div className={st.filter}>
                        <figure title='Filtrar machos' tooltip-dir='bottom'>
                            <button
                                id='b'
                                className={st.male}
                                onClick={() => {
                                    setSearch_('');
                                    setAuxsearch_('Macho');
                                    setFilter('Macho');
                                }}>
                                ♂️
                            </button>
                        </figure>
                        <figure title='Filtrar hembras' tooltip-dir='bottom'>
                            <button
                                id='r'
                                className={st.female}
                                onClick={() => {
                                    setSearch_('');
                                    setAuxsearch_('Hembra');
                                    setFilter('Hembra');
                                }}>
                                ♀️
                            </button>
                        </figure>
                    </div>
                </div>
                <div className={st.panelCards}>
                    <div className={st.cards}>
                        {filter === 'Hembra' && (
                            <DropdownList coleccion='conejos' parametro='genero' busqueda={filter} />
                        )}
                        {filter === 'Macho' && (
                            <DropdownList coleccion='conejos' parametro='genero' busqueda={filter} />
                        )}
                        {auxsearch_ === search.vieja && (
                            <DropdownList coleccion='conejos' parametro='id' busqueda={search_} reset={reset} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

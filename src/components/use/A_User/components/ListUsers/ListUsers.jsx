import st from './ListUsers.module.css';
import { UserCards } from './components/UserCards';
import { SearchAll } from '../../../../firebase/funtions/GetInformation';
import { useState } from 'react';

export function ListUsers() {
    const data = SearchAll({ coleccion: 'users' }).props.children;
    const [search, setSearch] = useState('');
    const [search_, setSearch_] = useState(['']);
    function buscar(e) {
        setSearch(e);
        const valor = data.filter(function (element) {
            if (
                element.names.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.phone.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.user.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.lastNames.toString().toLowerCase().includes(e.toLowerCase()) ||
                element.rol.toString().toLowerCase().includes(e.toLowerCase())
            )
                return element;
            return null;
        });
        setSearch_(valor);
    }
    return (
        <>
            <div className={st.panelSearchBar}>
                <form>
                    <input
                        name='buscar'
                        placeholder='Buscar'
                        onChange={(e) => {
                            buscar(e.target.value);
                        }}
                    />
                    <button className={st.btnSearch}>🔎</button>
                </form>
            </div>

            <div className={st.container}>
                <div className={st.panelList}>
                    {data[0].uid !== null && (
                        <>
                            {search === ''
                                ? data.map((users, index) => (
                                      <UserCards
                                          key={index}
                                          userName={users.user}
                                          userEmail={users.email}
                                          user={users}
                                      />
                                  ))
                                : search_.map((users, index) => (
                                      <UserCards
                                          key={index}
                                          userName={users.user}
                                          userEmail={users.email}
                                          user={users}
                                      />
                                  ))}
                            {search_.length === 0 && <h1>No hay resultados</h1>}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

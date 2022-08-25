import st from './styles/ListUsers.module.css';
import { UserCards } from './components/UserCards';
import { SearchAll } from '../../../../firebase/funtions/SearchAll';

export function ListUsers() {
    const data = SearchAll('usuarios').props.children;
    return (
        <>
            <div className={st.container}>
                <div className={st.panelList}>
                    {data[0].uid !== null && (
                        <>
                            {data.map((users) => (
                                <UserCards userName={users.user} userEmail={users.email} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

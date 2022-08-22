import st from './styles/PanelButtons.module.css';

import { Link } from 'react-router-dom';
import { btnData } from './scripts/btnData';
import { useAuth } from '../../../../context/AuthContext';

export function PanelButtons() {
    const { user } = useAuth();
    return (
        <>
            <div className={st.container}>
                <div className={st.opUser}>
                    <figure id='photo' title='Preferencias de usuario' tooltip-dir='rigth'>
                        <Link to='/users'>
                            <button className={st.Photo}>
                                <img src={user.photoURL} alt='' />
                            </button>
                        </Link>
                    </figure>
                </div>
                <div className={st.optPrincipal}>
                    {btnData.map((options) => {
                        return (
                            <figure key={options.id} id={options.id} title={options.label} tooltip-dir='left'>
                                <Link to={options.path}>
                                    <button className={st.option}>{options.icon}</button>
                                </Link>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

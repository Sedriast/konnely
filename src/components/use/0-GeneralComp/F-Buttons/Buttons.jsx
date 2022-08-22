/**
 * Props
 * --- id_
 * --- click_
 * --- change_
 * --- name_
 * --- link_
 * --- icon_
 * --- cliLoa_
 * --- text_
 */

import st from './css/Buttons.module.css';

import { Link } from 'react-router-dom';

export function Buttons({ tittle, id_, click_, change_, name_, link_, text_, icon_ }) {
    return (
        <>
            <figure className={st.fig} title={tittle} tooltip-dir='up'>
                <button id={id_} className={st.container} onClick={click_} onChange={change_} name={name_}>
                    <Link className={st.link} to={link_}>
                        <div className={st.icon_}>{icon_}</div>
                    </Link>
                </button>
            </figure>
        </>
    );
}

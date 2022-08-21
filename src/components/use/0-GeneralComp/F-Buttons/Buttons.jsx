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

export function Buttons(props) {
    return (
        <>
            <button
                id={props.id_}
                className={st.container}
                onClick={props.click_}
                onChange={props.change_}
                name={props.name_}>
                <Link to={props.link_}>
                    <img src={props.icon_} onClick={props.cliLoa_} href='' alt='' />
                    <h1 id={props.id_}>{props.text_}</h1>
                </Link>
            </button>
        </>
    );
}

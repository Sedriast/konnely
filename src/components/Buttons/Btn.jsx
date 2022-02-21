import { Link } from 'react-router-dom';
import style from '../css/Btn.module.css';

export function Btn(props){


    /*Contastes de eventos del botton*/
    const name_B = props.name_B;
    const oClick_B = props.oClick_B;
    const oChangeB = props.oChangeB;
    /*Contastes de eventos del botton*/

    /*Contastes de eventos del div*/
    const clName = props.clName;
    const oMouseEnter = props.oMouseEnter;
    const oMouseLeave = props.oMouseLeave;

    /*Contantes de uso*/
    const itemPath = props.itemPath;
    const src_ = props.src_;
    const text_ = props.text_;

    return(
    <>
        <Link to='/login'>
            <div className={clName} onMouseEnter={oMouseEnter} onMouseLeave={oMouseLeave}>
                    <button  name={name_B} onClick={oClick_B} onChange={oChangeB}>
                        {text_}
                    </button>
            </div>
        </Link>
    </>);
    }
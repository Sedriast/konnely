import { Link } from 'react-router-dom';

export function Btn(props){


    /*Contastes de eventos del botton*/
    const clNameB = props.clNameB;
    const oClickB = props.oClickB;
    const oChangeB = props.oChangeB;
    const name_B = props.name_B;
    /*Contastes de eventos del botton*/

    /*Contastes de eventos del div*/
    const clName = props.clName;
    const oClick = props.oClick;
    const oChange = props.oChange;
    const oMouseEnter = props.oMouseEnter;
    const oMouseLeave = props.oMouseLeave;
    const name_ = props.name_;
    /*Contastes de eventos del div*/

    /*Contantes de uso*/
    const itemPath = props.itemPath;
    const src_ = props.src_;
    const text_ = props.text_;

    return(<>
        <Link to={itemPath}>
            <div  className={clName} onClick={oClick} onChange={oChange} onMouseEnter={oMouseEnter} onMouseLeave={oMouseLeave}>
                <button className={clNameB} name={name_B} onClick={oClickB} onChange={oChangeB}>
                    {text_}
                </button>
            </div>
        </Link>
    </>);
    }
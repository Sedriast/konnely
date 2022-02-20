import { Link } from 'react-router-dom';

export function Btn(props){


    /*Contastes de eventos del botton*/
    const clNameB = props.clName;
    const oClickB = props.oClicik;
    const oChangeB = props.oChange;
    const oMouseEnterB = props.oMouseEnter;
    const oMouseLeaveB = props.oMouseLeave;
    const name_B = props.name_;
    const disab_B = props.disab_; 
    /*Contastes de eventos del botton*/

    /*Contastes de eventos del div*/
    const clName = props.clName;
    const oClick = props.oClicik;
    const oChange = props.oChange;
    const oMouseEnter = props.oMouseEnter;
    const oMouseLeave = props.oMouseLeave;
    const name_ = props.name_;
    const disab_ = props.disab_; 

    /*Contantes de uso*/
    const itemPath = props.itemPath;
    const src_ = props.src_;
    const text_ = props.text_;

    return(<>
        <Link to={itemPath}>
            <div  className={clName} name={name_} onClick={oClick} onChange={oChange} disabled={disab_} onMouseEnter={oMouseEnter} onMouseLeave={oMouseLeave}>
                <button className={clNameB} name={name_B} onClick={oClickB} onChange={oChangeB} disabled={disab_B} onMouseEnter={oMouseEnterB} onMouseLeave={oMouseLeaveB}>
                    {text_}
                </button>
            </div>
            
        </Link>
    </>);
    }
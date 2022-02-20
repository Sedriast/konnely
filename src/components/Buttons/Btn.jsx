import { Link } from 'react-router-dom';

export function Btn(props){

    const clName = props.clName;
    const oClick = props.oClicik;
    const oChange = props.oChange;
    const oMouseEnter = props.oMouseEnter;
    const oMouseLeave = props.oMouseLeave;
    const name_ = props.name_;
    const disab_ = props.disab_; 
    const itemPath = props.itemPath;
    const src_ = props.src_;
    const text_ = props.text_;

    return(<>
        <Link to={itemPath}>
            <button className={clName} style= {"background: url("+ src_ +")" } name={name_} onClick={oClick} onChange={oChange} disabled={disab_} onMouseEnter={oMouseEnter} onMouseLeave={oMouseLeave}>
                <h1 >{text_}</h1>
            </button>
        </Link>
    </>);
    }
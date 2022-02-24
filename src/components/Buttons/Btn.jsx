import { Link } from 'react-router-dom';
import '../css/Btn.module.css'

export function Btn(props){

    const clName = props.clName;
    const oClick_ = props.oClick_B;
    const oChange = props.oChangeB;

    const itemPath = props.itemPath;
    const text_ = props.text_;

    return(
    <>
        <button onClick={oClick_} onChange={oChange}>
            <Link className={clName} to={itemPath}>
                <h1>{text_}</h1>
            </Link>
        </button>
    </>);
    }
import { Link } from 'react-router-dom';

export function Btn(props){

    const clName = props.clName;
    const name_ = props.name_B;
    const oClick_ = props.oClick_B;
    const oChange = props.oChangeB;

    const itemPath = props.itemPath;
    const text_ = props.text_;

    return(
    <>
        <button name={name_} onClick={oClick_} onChange={oChange}>
            <Link className={clName} to={itemPath}>
                <h1>{text_}</h1>
            </Link>
        </button>
    </>);
    }
import style_Pa from '../../css/Tools/Paragraphs.module.css';

export function Paragraphs(props) {
    
    return(<>
        <div className={props.clsName}>
            <div className={style_Pa.container_}>
                <h2 >{props.t1}</h2>
                <p >{props.b1}</p>
                <h2 >{props.t2}</h2>
                <p >{props.b2}</p>
                <h2 >{props.t3}</h2>
                <p >{props.b3}</p>
            </div>
        </div>    
    </>);
}
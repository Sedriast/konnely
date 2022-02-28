import paragStyle from '../css/Paragraph/Paragraphs.module.css';

export function Paragraphs(props) {

    const clName_ = props.clName_;
    const t1 = props.t1;
    const t2 = props.t2;
    const t3 = props.t3;
    const b1 = props.b1;
    const b2 = props.b2;
    const b3 = props.b3;
    
    return(<>
        <div className={clName_}>
            <div className={paragStyle.Container_}>
                <h2 >{t1}</h2>
                <p >{b1}</p>
                <h2 >{t2}</h2>
                <p >{b2}</p>
                <h2 >{t3}</h2>
                <p >{b3}</p>
            </div>
        </div>    
    </>);
}

import paragStyle from '../css/Paragraph/Paragraphs.module.css';

export function Paragraphs(props) {

    const t1 = props.title_I;
    const t2 = props.title_II;
    const t3 = props.title_III;
    const b1 = props.body_I;
    const b2 = props.body_II;
    const b3 = props.body_III;
    const styleImported = props.clName;
    
    return(<>
        <div className={styleImported}>
            <div className={paragStyle.Container_}>
                <h2>{t1}</h2>
                <p >{b1}</p>
                <h2>{t2}</h2>
                <p >{b2}</p>
                <h2>{t3}</h2>
                <p >{b3}</p>
            </div>
        </div>    
    </>);
}

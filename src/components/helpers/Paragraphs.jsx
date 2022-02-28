export function Paragraphs(props){

    const r = props.race;
    const w = props.weigth;
    const paragPanel = props.panel
    
    return(<>
        <div className={paragPanel} >
            <p>
            <h1>Raza:</h1>
            {r}
            </p> 
            <br/>
            <p> 
            <h1>Peso:</h1>
            {w}
            </p>
        </div>    
    </>);
}
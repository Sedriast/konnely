export function Paragraphs(props){

    const r = props.race;
    const w = props.weigth;
    
    return(<>
            <p>
            <h1>Raza:</h1>
            {r}
            </p> 
            <br/>
            <p> 
            <h1>Peso:</h1>
            {w}
            </p>
    </>);
}
export function Paragraphs(props){

    const r = props.race;
    const w = props.weigth;
    
    return(<>
            <h1>Raza:</h1>
            <p>{r}</p> 
            <br/> 
            <h1>Peso:</h1>
            <p>{w}</p>
    </>);
}
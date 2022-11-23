import st from './Ref.module.css';

export function Ref({ stage }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <hr />
                    <br />
                    <div>Macho: {stage.male}</div>
                    <div>Macho: {stage.date}</div>
                </div>
            );

        case 'Palpación':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />
                    <hr />
                    <br />

                    <div> Fecha: {stage.date} </div>
                </div>
            );

        case 'Preparto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />
                    <hr />
                    <br />
                    <div> Fecha: {stage.date}</div>
                </div>
            );

        case 'Parto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <hr />
                    <div> Fecha: {stage.date}</div>
                    <br />
                    Crias
                    <hr />
                    <div> Vivos: {stage.lives}</div>
                    <div> Muertos: {stage.deaths}</div>
                    <div> Homog.: {stage.homo}</div>
                    <div> Total: {stage.total}</div>
                </div>
            );

        case 'Destete':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <hr />
                    <br />
                    <div> Crias destetadas: {stage.WeanedPups}</div>
                    <div> Peso de la camada: {stage.WeanedPups}</div>
                    <div> Crias Hembras: {stage.FemaleHatchlings}</div>
                    <div> Crias Machos: {stage.MaleHatchlings}</div>
                    <div> Fecha: {stage.date}</div>
                </div>
            );

        default:
            return <></>;
    }
}

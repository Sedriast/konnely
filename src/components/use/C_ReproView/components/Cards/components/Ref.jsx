import st from './Ref.module.css';

export function Ref({ stage }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Males: </h1>
                        <h2>{stage.males}</h2>
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <h2>{stage.date}</h2>
                    </div>
                </div>
            );

        case 'Palpación':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <h2>{stage.date}</h2>
                    </div>
                </div>
            );

        case 'Preparto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <h2>{stage.date}</h2>
                    </div>
                </div>
            );

        case 'Parto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Crias vivas: </h1>
                        <h2>{stage.lives}</h2>
                    </div>
                    <div className={st.pt}>
                        <h1>Crias muertas: </h1>
                        <h2>{stage.deaths}</h2>
                    </div>
                    <div className={st.pt}>
                        <h1>Homogeneizados: </h1>
                        <h2>{stage.homogen}</h2>
                    </div>
                    <div className={st.pt}>
                        <h1>Crias totales: </h1>
                        <h2>{stage.total}</h2>
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <h2>{stage.date}</h2>
                    </div>
                </div>
            );

        case 'Destete':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Crias destetadas: </h1>
                        <h2>{stage.total}</h2>
                    </div>
                    <div className={st.pt}>
                        <h1>Peso de la camada: </h1>
                        <h2>{stage.averageWeight}</h2>
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <h2>{stage.date}</h2>
                    </div>
                </div>
            );

        default:
            return <></>;
    }
}

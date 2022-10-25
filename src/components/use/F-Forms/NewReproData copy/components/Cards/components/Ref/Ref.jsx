import st from './Ref.module.css';

export function Ref({ stage }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Macho: </h1>
                        <input name='Macho' type='text' />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DateInitial' type='date' />
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
                        <input name='DatePalpacion' type='date' />
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
                        <input name='DatePreparto' type='date' />
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
                        <input name='LiveYoung' type='text' />
                    </div>
                    <div className={st.pt}>
                        <h1>Crias muertas: </h1>
                        <input name='DeadPups' type='text' />
                    </div>
                    <div className={st.pt}>
                        <h1>Homogeneizados: </h1>
                        <input name='Homogenized' type='text' />
                    </div>
                    <div className={st.pt}>
                        <h1>Crias totales: </h1>
                        <input name='total offspring' type='text' />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DateParto' type='date' />
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
                        <input name='WeanedPups' type='text' />
                    </div>
                    <div className={st.pt}>
                        <h1>Peso de la camada: </h1>
                        <input name='LitterWeight' type='text' />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DateDestete' type='date' />
                    </div>
                </div>
            );

        default:
            return <></>;
    }
}

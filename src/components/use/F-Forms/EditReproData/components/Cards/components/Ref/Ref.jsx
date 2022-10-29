import { ApproximateRepro } from '../../../../../../0-GeneralComp/0-StaticData/Dates/Dates';
import st from './Ref.module.css';

export function Ref({ stage, handleChange, date }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />

                    <div className={st.pt}>
                        <h1>Macho: </h1>
                        <input name='Macho' type='text' defaultValue={stage.male} />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DateInitial' type='date' defaultValue={stage.date} onChange={handleChange} />
                    </div>
                </div>
            );

        case 'Palpación':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    {date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).palpation}</h1>}

                    <br />

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DatePalpacion' type='date' defaultValue={stage.date} onChange={handleChange} />
                    </div>
                </div>
            );

        case 'Preparto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    {date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).prepartum}</h1>}
                    <br />

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DatePreparto' type='date' defaultValue={stage.date} onChange={handleChange} />
                    </div>
                </div>
            );

        case 'Parto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    {date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).birth}</h1>}
                    <br />

                    <div className={st.pt}>
                        <h1>Crias vivas: </h1>
                        <input name='lives' type='text' defaultValue={stage.lives} />
                    </div>
                    <div className={st.pt}>
                        <h1>Crias muertas: </h1>
                        <input name='deaths' type='text' defaultValue={stage.deaths} />
                    </div>
                    <div className={st.pt}>
                        <h1>Homogeneizados: </h1>
                        <input name='homogen' type='text' defaultValue={stage.homogen} />
                    </div>
                    <div className={st.pt}>
                        <h1>Crias totales: </h1>
                        <input name='total' type='text' defaultValue={stage.total} />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input name='DateParto' type='date' defaultValue={stage.date} onChange={handleChange} />
                    </div>
                </div>
            );

        case 'Destete':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    {date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).weaning}</h1>}
                    <br />

                    <div className={st.pt}>
                        <h1>Crias destetadas: </h1>
                        <input name='WeanedPups' type='text' defaultValue={stage.WeanedPups} />
                    </div>
                    <div className={st.pt}>
                        <h1>Peso de la camada: </h1>
                        <input name='LitterWeight' type='text' defaultValue={stage.LitterWeight} />
                    </div>

                    <div className={st.pt}>
                        <h1>Fecha: </h1>
                        <input
                            name='DateDestete'
                            type='date'
                            defaultValue={stage.DateDestete}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            );

        default:
            return <></>;
    }
}

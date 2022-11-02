import { ApproximateRepro } from '../../../../../../0-GeneralComp/0-StaticData/Dates/Dates';
import { Inputs } from '../../../../../../0-GeneralComp/1-Inputs/Inputs';
import st from './Ref.module.css';

export function Ref({ stage, handleChange, date }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>

                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            value={stage.male}
                            name='Macho'
                            type='text'
                            leyend='Macho'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.date}
                            name='Macho'
                            type='date'
                            leyend='Fecha'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            );

        case 'Palpación':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <div className={st.edit}>
                        {date !== null && (
                            <>
                                <h1>Fecha aproximada:</h1> {ApproximateRepro(date).palpation}
                            </>
                        )}
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            value={stage.date}
                            name='DatePalpacion'
                            type='date'
                            leyend='Fecha'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            );

        case 'Preparto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <div className={st.edit}>
                        {date !== null && (
                            <>
                                <h1>Fecha aproximada:</h1> {ApproximateRepro(date).prepartum}
                            </>
                        )}
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            value={stage.date}
                            name='DatePreparto'
                            type='date'
                            leyend='Fecha'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            );

        case 'Parto':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <div className={st.edit}>
                        {date !== null && (
                            <>
                                <h1>Fecha aproximada:</h1> {ApproximateRepro(date).birth}
                            </>
                        )}
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            value={stage.lives}
                            name='lives'
                            type='text'
                            leyend='Crias vivas'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.deaths}
                            name='deaths'
                            type='text'
                            leyend='Crias muertas'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.homogen}
                            name='homogen'
                            type='text'
                            leyend='Homogeneizados'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.total}
                            name='total'
                            type='text'
                            leyend='Crias totales'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.date}
                            name='DateParto'
                            type='date'
                            leyend='Fecha'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            );

        case 'Destete':
            return (
                <div className={st.panel}>
                    <h3>{stage.title}</h3>
                    <br />
                    <div className={st.edit}>
                        {date !== null && (
                            <>
                                <h1>Fecha aproximada:</h1> {ApproximateRepro(date).weaning}
                            </>
                        )}
                    </div>

                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            value={stage.WeanedPups}
                            name='WeanedPups'
                            type='text'
                            leyend='Crias destetadas'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.LitterWeight}
                            name='LitterWeight'
                            type='text'
                            leyend='Peso de la camada'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.DateDestete}
                            name='DateDestete'
                            type='date'
                            leyend='Fecha'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            );

        default:
            return <></>;
    }
}

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
                            value={stage.idCamada}
                            name='idCamada'
                            type='text'
                            leyend='Identificador de la camada'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.male}
                            name='Macho'
                            type='number'
                            leyend='Macho'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.date}
                            name='DateInitial'
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
                    {date !== null && (
                        <>
                            <h1>Fecha aproximada:</h1>
                            <h1>{ApproximateRepro(date).palpation}</h1>
                        </>
                    )}
                    <br />
                    <hr />
                    <br />

                    <div className={st.edit}>
                        <Inputs
                            required_={false}
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
                    {date !== null && (
                        <>
                            <h1>Fecha aproximada:</h1>
                            <h1>{ApproximateRepro(date).prepartum}</h1>
                        </>
                    )}

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
                    {date !== null && (
                        <>
                            <h1>Fecha aproximada:</h1>
                            <h1>{ApproximateRepro(date).birth}</h1>
                        </>
                    )}

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
                        <Inputs
                            value={stage.news}
                            name='novedades'
                            type='text'
                            leyend='Novedades'
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

                    {date !== null && (
                        <>
                            <h1>Fecha aproximada:</h1>
                            <h1>{ApproximateRepro(date).weaning}</h1>
                        </>
                    )}

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
                            value={stage.MaleHatchlings}
                            name='MaleHatchlings'
                            type='number'
                            leyend='Crias machos'
                            min='0'
                            pattern='^[0-9]+'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.FemaleHatchlings}
                            name='FemaleHatchlings'
                            type='number'
                            leyend='Crias hembras'
                            min='0'
                            pattern='^[0-9]+'
                            handleChange={handleChange}
                        />
                        <Inputs
                            value={stage.date}
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

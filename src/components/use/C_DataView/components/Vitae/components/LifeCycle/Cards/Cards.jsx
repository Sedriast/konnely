import st from './Cards.module.css';

export function Cards({ stageId, info }) {
    return (
        <>
            {info?.map((items, index) => {
                return (
                    <form key={index} className={items.stage === 'Nacimiento' ? st.bird : st.container} action=''>
                        {items.stage === 'Nacimiento' ? (
                            <>
                                <div className={st.idName}>
                                    {items.stage}
                                    <br />
                                    <br />
                                    <hr />
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className={st.titles}>
                                    Camada:
                                    <br />
                                    Fecha:
                                    <br />
                                    Peso al destete:
                                </div>
                                <div className={st.ask}>
                                    {items.state}
                                    <br />
                                    {items.date}
                                    <br />
                                    {items.weigth} gr
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={st.idName}>{items.stage}</div>
                                <hr />
                                <br />
                                <br />
                                <br />
                                <div className={st.titles}>
                                    Fecha pronosticada:
                                    <br />
                                    <br />
                                    Peso final:
                                    <br />
                                    Fecha real:
                                </div>
                                <div className={st.ask}>
                                    {items.approDate}
                                    <br />
                                    <br />
                                    {items.weigth} gr
                                    <br />
                                    {items.date}
                                </div>
                            </>
                        )}
                    </form>
                );
            })}
        </>
    );
}

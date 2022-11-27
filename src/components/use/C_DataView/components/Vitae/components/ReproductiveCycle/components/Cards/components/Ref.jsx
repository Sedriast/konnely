import st from './Ref.module.css';

export function Ref({ stage }) {
    switch (stage.title) {
        case 'Monta':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{stage.date}</td>
                        </tr>
                        <tr>
                            <th>MACHO</th>
                            <td>{stage.male}</td>
                        </tr>
                    </table>
                </tbody>
            );

        case 'Palpación':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{stage.date}</td>
                        </tr>
                    </table>
                </tbody>
            );

        case 'Preparto':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{stage.date}</td>
                        </tr>
                        <tr></tr>
                    </table>
                </tbody>
            );

        case 'Parto':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{stage.date}</td>
                        </tr>
                        <tr>
                            <th>CRIAS</th>

                            <td id={st.ask}>
                                <table className={st.tableIn}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>VIVOS</th>
                                            <td>{stage.lives}</td>
                                        </tr>
                                        <tr>
                                            <th>MUERTOS</th>
                                            <td>{stage.deaths}</td>
                                        </tr>
                                        <tr>
                                            <th>HOMOG.</th>
                                            <td>{stage.homo}</td>
                                        </tr>
                                        <tr>
                                            <th>TOTAL</th>
                                            <td>{stage.total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </tbody>
            );

        case 'Destete':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{stage.date}</td>
                        </tr>

                        <tr>
                            <th>CRIAS</th>

                            <td id={st.ask}>
                                <table className={st.tableIn}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>MACHOS</th>
                                            <td>{stage.MaleHatchlings}</td>
                                        </tr>
                                        <tr>
                                            <th>HEMBRAS</th>
                                            <td>{stage.FemaleHatchlings}</td>
                                        </tr>
                                        <tr>
                                            <th>DESTETADOS</th>
                                            <td>{stage.WeanedPups}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </tbody>
            );

        default:
            return <></>;
    }
}

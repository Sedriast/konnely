import st from './Ref.module.css';

export function Ref({ stage }) {
    const descriptionDate = (date) => {
        if (date === null || date === undefined || date === '') {
            return 'Sin fecha';
        } else {
            return date;
        }
    };
    const descriptionItem = (item) => {
        if (item === null || item === undefined || item === '') {
            return 'Sin datos';
        } else {
            return item;
        }
    };
    switch (stage.title) {
        case 'Monta':
            return (
                <tbody>
                    <table>
                        <tr>
                            <th>FECHA</th>
                            <td>{descriptionDate(stage.date)}</td>
                        </tr>
                        <tr>
                            <th>MACHO</th>
                            <td>{descriptionItem(stage.male)}</td>
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
                            <td>{descriptionDate(stage.date)}</td>
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
                            <td>{descriptionDate(stage.date)}</td>
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
                            <td>{descriptionDate(stage.date)}</td>
                        </tr>
                        <tr>
                            <th>CRIAS</th>

                            <td id={st.ask}>
                                <table className={st.tableIn}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>VIVOS</th>
                                            <td>{descriptionItem(stage.lives)}</td>
                                        </tr>
                                        <tr>
                                            <th>MUERTOS</th>
                                            <td>{descriptionItem(stage.deaths)}</td>
                                        </tr>
                                        <tr>
                                            <th>HOMOG.</th>
                                            <td>{descriptionItem(stage.homogen)}</td>
                                        </tr>
                                        <tr>
                                            <th>TOTAL</th>
                                            <td>{descriptionItem(stage.total)}</td>
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
                            <td>{descriptionDate(stage.date)}</td>
                        </tr>

                        <tr>
                            <th>CRIAS</th>

                            <td id={st.ask}>
                                <table className={st.tableIn}>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th>MACHOS</th>
                                            <td>{descriptionItem(stage.MaleHatchlings)}</td>
                                        </tr>
                                        <tr>
                                            <th>HEMBRAS</th>
                                            <td>{descriptionItem(stage.FemaleHatchlings)}</td>
                                        </tr>
                                        <tr>
                                            <th>DESTETADOS</th>
                                            <td>{descriptionItem(stage.WeanedPups)}</td>
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

import st from './CardRecord_.module.css';

import { estadoRabbit } from '../../../0-GeneralComp/0-Scripts/EstadoRabbit';

export function CardRecord_({ Info }) {
    return (
        <div className={st.container}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <table className={st.tablee}>
                                <tbody>
                                    <tr>
                                        <th>Fecha</th>
                                        <td>{Info?.raza}qwwoiio</td>
                                    </tr>
                                    <tr>
                                        <th>Vendedor/a</th>
                                        <td>{Info?.genero}</td>
                                    </tr>
                                    <tr>
                                        <th>Comprador/a</th>
                                        <td>{Info?.concepcion}</td>
                                    </tr>
                                    <tr>
                                        <th>Tipo de transacción</th>
                                        <td>{Info?.nacimiento}</td>
                                    </tr>
                                    <tr>
                                        <th>Nombre del profecional</th>
                                        <td>{Info?.origen}</td>
                                    </tr>
                                    <tr>
                                        <th>Número de conejos</th>
                                        <td>{Info?.origen}</td>
                                    </tr>
                                    <tr>
                                        <th>Valor total</th>
                                        <td>{Info?.origen}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={st.tablee2}>
                <thead>
                    <tr>
                        <th>Identificadres</th>
                        <td>Valor ($)</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {info?.rabbits.map((e,i) => {
                        <tr>
                            <th id={st.identify}>{e.id}</th>
                            <td id={st.value}>{e.value}</td>
                        </tr>
                    })} */}
                </tbody>
            </table>
        </div>
    );
}

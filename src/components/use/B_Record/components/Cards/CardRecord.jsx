import st from './CardRecord.module.css';

import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';

import { faPencil } from '@fortawesome/free-solid-svg-icons';

export function CardRecord({ Info }) {
    const ValorTotal = () => {
        let total = 0;
        Info?.rabbits?.map((e) => {
            total += parseInt(e.valor);
            return false;
        });
        return total;
    };

    return (
        Info !== undefined &&
        Info !== null &&
        Info !== '' && (
            <>
                <div className={st.container}>
                    <div className={st.editbtn}>
                        <Buttons direction='bottom' label='Editar' route='/editReco' btnIconText={faPencil} />
                    </div>

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
                                                <th>Fecha: </th>
                                                <td> {Info?.date}</td>
                                            </tr>
                                            <tr>
                                                <th>Valor total: </th>
                                                <td>${ValorTotal()}</td>
                                            </tr>
                                            <tr>
                                                <th>Transacción: </th>
                                                <td>{Info?.transaction}</td>
                                            </tr>
                                            <tr>
                                                <th>Vendedor/a: </th>
                                                <td>{Info?.seller}</td>
                                            </tr>
                                            <tr>
                                                <th>Comprador/a: </th>
                                                <td>{Info?.buyer}</td>
                                            </tr>
                                            <tr>
                                                <th>Administrador/a: </th>
                                                <td>{Info?.manager}</td>
                                            </tr>
                                            <tr>
                                                <th>Número de conejos: </th>
                                                <td>{Info?.rabbits?.length}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <table className={st.tablee2}>
                        <thead>
                            <tr>
                                <th>Identificador</th>
                                <td>Precio ($)</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Info?.rabbits?.map((e) => {
                                return (
                                    <tr>
                                        <th id={st.identify}>{e.id}</th>
                                        <td id={st.value}>{e.valor}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    );
}

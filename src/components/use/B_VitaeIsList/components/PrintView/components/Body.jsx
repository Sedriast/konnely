import st from './Body.module.css';
import { Data } from './Data/Data';
import { basicData } from '../../../../0-GeneralComp/0-StaticData/dataProv';

export function Body({ cicles }) {
    console.log(basicData);
    const cm = (
        <div className={st.container}>
            <div className={st.carac}>
                <table>
                    <thead>
                        <th>Especie Cunicola</th>
                    </thead>
                    <tbody>
                        <table>
                            <thead>
                                <th>
                                    Identificador
                                    <br />
                                    de la hembra
                                </th>
                                <th>Fecha nacimiento</th>
                                <th>Raza</th>
                                <th>Edad</th>
                                <th>Peso</th>
                                <th>Procedencia</th>
                            </thead>
                            <tbody>
                                <td>{basicData?.info?.id}</td>
                                <td>{basicData?.info?.date}</td>
                                <td>{basicData?.info?.race}</td>
                                <td>23</td>
                                <td>{basicData?.info?.weigth}</td>
                                <td>{basicData?.info?.id}</td>
                                <td>{basicData?.info?.id}</td>
                            </tbody>
                        </table>
                    </tbody>
                </table>
            </div>
            <table className={st.tableTop}>
                <thead>
                    <th>Fecha servicio</th>
                    <th>Placa macho</th>
                    <th>
                        Fecha detección
                        <br />
                        de preñes
                    </th>
                    <th>
                        Fecha
                        <br />
                        posible parto
                    </th>
                    <th>
                        Fecha
                        <br />
                        atención de parto
                    </th>
                    <th>
                        Fecha real
                        <br />
                        de parto
                    </th>
                    <th>Crias vivas</th>
                    <th>Crias muertas</th>
                    <th>Peso nacimiento (gr)</th>
                    <th>Fecha destete</th>
                    <th>Crias hembras</th>
                    <th>Crias machos</th>
                    <th>Peso destete</th>
                </thead>
                <tbody>
                    <Data data={cicles} />
                </tbody>
            </table>
        </div>
    );
    return cm;
    // const cmu = (
    //     <div className={st.container}>
    //         <div className={st.carac}>
    //             <table>
    //                 <thead>
    //                     <th>Especie Cunicola</th>
    //                 </thead>
    //                 <tbody>
    //                     <table>
    //                         <thead>
    //                             <th>
    //                                 Identificador
    //                                 <br />
    //                                 de la hembras
    //                             </th>
    //                             <th>Fecha nacimiento</th>
    //                             <th>Raza</th>
    //                             <th>Edad</th>
    //                             <th>Peso</th>
    //                             <th>Procedencia</th>
    //                         </thead>
    //                         <tbody>
    //                             <td>{dataFemale?.id}</td>
    //                             <td>{dataFemale?.date}</td>
    //                             <td>{dataFemale?.race}</td>
    //                             <td>23</td>
    //                             <td>{dataFemale?.weigth}</td>
    //                             <td>{dataFemale?.id}</td>
    //                             <td>{dataFemale?.id}</td>
    //                         </tbody>
    //                     </table>{' '}
    //                 </tbody>
    //             </table>
    //         </div>
    //         <table className={st.tableTop}>
    //             <thead>
    //                 <th>Fecha servicio</th>
    //                 <th>Placa macho</th>
    //                 <th>
    //                     Fecha detección
    //                     <br />
    //                     de preñes
    //                 </th>
    //                 <th>
    //                     Fecha
    //                     <br />
    //                     posible parto
    //                 </th>
    //                 <th>
    //                     Fecha
    //                     <br />
    //                     atención de parto
    //                 </th>
    //                 <th>
    //                     Fecha real
    //                     <br />
    //                     de parto
    //                 </th>
    //                 <th>Crias vivas</th>
    //                 <th>Crias muertas</th>
    //                 <th>Peso nacimiento (gr)</th>
    //                 <th>Fecha destete</th>
    //                 <th>Crias hembras</th>
    //                 <th>Crias machos</th>
    //                 <th>Peso destete</th>
    //             </thead>
    //             <tbody></tbody>
    //         </table>
    //     </div>
    // );
    // return cmu;
}

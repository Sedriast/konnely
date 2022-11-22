import st from "./Body.module.css";
import { Data } from "./Data/Data";
import { basicData } from "../../../../0-GeneralComp/0-StaticData/dataProv";

export function Body({ cicles }) {
  const dataCicle = (cicle) => {
    console.log(cicle);
    const data = [
      cicle?.stages[0]?.date,
      cicle?.stages[0]?.male,
      cicle?.stages[1]?.date,
      cicle?.stages[3]?.approximateDate,
      cicle?.stages[2]?.date,
      cicle?.stages[3]?.date,
      cicle?.stages[3]?.lives,
      cicle?.stages[3]?.deaths,
      "--------",
      cicle?.stages[4]?.date,
      cicle?.stages[4]?.FemaleHatchlings,
      cicle?.stages[4]?.MaleHatchlings,
      cicle?.stages[4]?.LitterWeight,
    ];
    return data;
  };
  const cm = (
    <>
      {" "}
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
                  <th>Padre</th>
                  <th>Madre</th>
                </thead>
                <tbody>
                  <td>{basicData?.info?.id}</td>
                  <td>{basicData?.info?.nacimiento}</td>
                  <td>{basicData?.info?.raza}</td>
                  <td>23</td>
                  <td>{basicData?.info?.weigth}</td>
                  <td>{basicData?.info?.origen}</td>
                  <td>{basicData?.info?.origen}</td>
                  <td>{basicData?.info?.origen}</td>
                </tbody>
              </table>
            </tbody>
          </table>
        </div>
        <div className={st.complete}>
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
              {cicles?.map((e) => {
                if (e.state === false) return <Data data={dataCicle(e)} />;
                return <></>;
              })}
            </tbody>
          </table>
        </div>

        <div className={st.carac}>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Sintomas,Signos,Vacunas </th>
                <th>Diagnostico</th>
                <th>Medicamento</th>
                <th>Dosis</th>
                <th>Redultados</th>
                <th>Nombre del profecional</th>
              </tr>
            </thead>
            <tbody>
              {/* {cicles?.map((e) => {
          if (e.state === false) return <Data data={dataCicle(e)} />;
          return <></>;
        })} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  return cm;
}

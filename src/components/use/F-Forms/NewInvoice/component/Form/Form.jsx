import st from "./Form.module.css";

import { useState } from "react";
import { RabitList } from "./RabitLists/RabitList";

export function Form() {
  const [rabitList, setRabitList] = useState([
    { id: 1, name: "Rabit 1", race: "RabbitNS" },
    { id: 1, name: "Rabit 1", race: "RabbitNS" },
    { id: 1, name: "Rabit 1", race: "RabbitNS" },
  ]);
  const cm = (
    <>
      <form className={st.panelContainer} action="">
        <div className={st.headerInvo}>
          <div className={st.headerInvoLeft}>
            <p>Unidad agroambiental el Tíbar</p>
            <br />
            <p>NTI: 123456789</p>
            <br />
          </div>
          <div className={st.headerInvoRight}>
            <p>
              Numero de factura:
              <input name="numInvo" id="numInvo" type="text" />
            </p>
            <br />
            <p>Fecha: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <hr />
        <div className={st.bodyInvo}>
          {/* Lista de los conejos activos existentes */}
          <RabitList />
          <table>
            <tr>
              <th>Id conejo</th>
              <th>Genero</th>
              <th>Raza</th>
              <th>Precio</th>
            </tr>
            {rabitList.map((rabit, index) => {
              return (
                <tr>
                  <th>{index}</th>
                  <td>{rabit.id}</td>
                  <td>{rabit.name}</td>
                  <td>{rabit.race}</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <hr />
        <div className={st.footerInvo}></div>
      </form>
    </>
  );

  return cm;
}

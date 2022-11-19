import st from "./Form.module.css";

import { useState } from "react";
import { RabitList } from "./RabitLists/RabitList";

export function Form() {
  const [rabitList, setRabitList] = useState([
    { id: 1, name: "Rabit 1", race: "RabbitNS", weith: 5 },
    { id: 1, name: "Rabit 1", race: "RabbitNS", weith: 6 },
    { id: 1, name: "Rabit 1", race: "RabbitNS", weith: 7 },
  ]);
  const cm = (
    <>
      <form
        className={st.panelContainer}
        onSubmit={(e) => {
          e.preventDefault();
          let aux = {};
          for (const element of e.target) {
            if (element.name !== "") {
              aux = { ...aux, [element.name]: element.value };
            }
          }
          console.log(aux);
        }}
      >
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
            <p className={st.pa}>
              Fecha:
              <input
                className={st.nf}
                name="date"
                id="date"
                type="text"
                disabled
                value={new Date().toLocaleDateString()}
              />
            </p>
          </div>
        </div>
        <hr />
        <div className={st.bodyInvo}>
          {/* Lista de los conejos activos existentes */}
          <RabitList />
          <div className={st.dataInvoice}>
            <table>
              <tr>
                <th></th>
                <th>Id conejo</th>
                <th>Genero</th>
                <th>Raza</th>
                <th>Peso</th>
                <th>Precio</th>
              </tr>
              {rabitList.map((rabit, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <input
                        disabled
                        className={st.nf}
                        name={"rid_" + index}
                        id={"rid_" + index}
                        type="text"
                        value={rabit.id}
                      />
                    </td>
                    <td>
                      <input
                        className={st.nf}
                        disabled
                        name={"rgen_" + index}
                        id={"rgen_" + index}
                        type="text"
                        value={rabit.name}
                      />
                    </td>
                    <td>
                      <input
                        className={st.nf}
                        disabled
                        name={"rrace_" + index}
                        id={"rrace_" + index}
                        type="text"
                        value={rabit.race}
                      />
                    </td>
                    <td>
                      <input
                        className={st.nf}
                        disabled
                        name={"rweith_" + index}
                        id={"rweith_" + index}
                        type="text"
                        value={rabit.weith}
                      />
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <br />
        <hr />
        <div></div>
        <div className={st.footerInvo}>
          <br />
          <p>Total factura</p>
          <br />
          <br />
          <div>
            <button type="submit">✔️✔️</button>
          </div>
        </div>
      </form>
    </>
  );

  return cm;
}

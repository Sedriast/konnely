import st from "./Form.module.css";

import { useState } from "react";
import { RabitList } from "./RabitLists/RabitList";
import { TableData } from "./RabitLists/TableData";

export function Form() {
  const [rabitList, setRabitList] = useState([
    { id: 1, gen: "Rabit1", race: "RabbitNS", weith: 5 },
    { id: 1, gen: "Hembra", race: "RabbitNS", weith: 6 },
    { id: 1, gen: "Macho", race: "RabbitNS", weith: 7 },
  ]);
  const cm = (
    <>
      <form
        className={st.panelContainer}
        onSubmit={(e) => {
          e.preventDefault();
          let aux = {};
          for (const element of e.target) {
            if (element.id !== "") {
              aux = { ...aux, [element.name]: element.value };
              aux = { ...aux, rabbits: rabitList };
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
            <TableData rabitList={rabitList} />
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

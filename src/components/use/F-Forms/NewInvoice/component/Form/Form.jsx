import st from "./Form.module.css";

import { useEffect, useState } from "react";
import { RabitList } from "./RabitLists/RabitList";
import { TableData } from "./RabitLists/TableData";
import { RabbitDate } from "../../../../0-GeneralComp/0-StaticData/dataProv";

export function Form() {
  const [addr, setAddr] = useState();
  const [rabitList, setRabitList] = useState([
    { id: 1, gen: "Rabit1", race: "RabbitNS", weith: 5, price: 1000 },
    { id: 1, gen: "Hembra", race: "RabbitNS", weith: 6, price: 150 },
    { id: 1, gen: "Macho", race: "RabbitNS", weith: 7, price: 20 },
  ]);
  useEffect(() => {
    console.log(rabitList);
  }, [rabitList]);
  const cm = (
    <>
      <form
        className={st.panelContainer}
        onSubmit={(e) => {
          e.preventDefault();
          let aux = {};
          rabitList.push(RabbitDate.id);
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
          {/* Lista de los conejos activos existentes que en el handleChange hace parte de la magia*/}
          <div>
            {/* <Lists
              leyend="Conejos"
              name="rabbits"
              listar={rabitList}
              handleChange={(e) => {
                setAddr(e.target.value);
              }}
            /> */}
          </div>
          <RabitList rabbit={addr} />
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

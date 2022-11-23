import st from "./Form.module.css";

import { useEffect, useState } from "react";
import {
  addInvoice,
  RabbitDate,
} from "../../../../0-GeneralComp/0-StaticData/dataProv";
import { useNavigate } from "react-router-dom";

export function Form() {
  /**************************************************************************
   *                                                                            *
   *                                                                            *
   *                                                                            *
   *                  Constantes de uso, para estados o contextos               */
  const [addr] = useState();

  const [rabitList] = useState([{}]);

  const navigate = useNavigate();

  const [aux, setAux] = useState({
    id: addr?.id,
    gen: addr?.gen,
    race: addr?.race,
    weith: addr?.weith,
  });

  useEffect(() => {
    if (RabbitDate === null) {
      navigate("/vitaeslist");
      return null;
    }
  }, [navigate, aux]);

  /******************************************************************************
   *                                                                            *
   *                                                                            *
   *                                                                            *
   *                  cosntante que encapsula el componente de react           */
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
        <div className={st.setAddr}>
          {/* <Lists
              leyend="Conejos"
              name="rabbits"
              listar={rabitList}
              handleChange={(e) => {
                setAddr(e.target.value);
              }}
            /> */}
          <div>
            <input id="pri" type="number" />
          </div>
          <button
            onClick={() => {
              setAux({
                ...aux,
                price: parseInt(document.getElementById("pri").value),
              });
              addInvoice(aux);
              rabitList.push(RabbitDate.id);
            }}
          >
            ✔️
          </button>
        </div>
        <div className={st.bodyInvo}>
          {/* Lista de los conejos activos existentes que en el handleChange hace parte de la magia*/}

          <div className={st.dataInvoice}>
            <table>
              <thead>
                <tr>
                  <th> Id del conejo </th>
                  <th> Genero </th>
                  <th> Raza </th>
                  <th> Peso </th>
                  <th> Precio </th>
                </tr>
              </thead>

              {rabitList.map((rabit, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td> {rabit.id} </td>
                      <td> {rabit.gen} </td>
                      <td> {rabit.race} </td>
                      <td> {rabit.weith} </td>
                      <td> {rabit.price} </td>
                    </tr>
                  </tbody>
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

import st from "./List.module.css";
import swal from "sweetalert";

import { useState } from "react";

import { DropdownList } from "./components/DropdownList";
import { Buttons } from "../../../0-GeneralComp/1-Buttons/Buttons";

import { faPrint } from "@fortawesome/free-solid-svg-icons";

export function List() {
  let search = { vieja: "init" };
  const [filter, setFilter] = useState("Hembra");
  const [search_, setSearch_] = useState("init");
  const [parametro, setParametro] = useState("");
  const [auxsearch_, setAuxsearch_] = useState("");
  function reset() {
    setAuxsearch_("");
    setParametro("");
    setFilter("Hembra");
  }
  return (
    <>
      <div className={st.container}>
        <div className={st.panelSearchBar}>
          <div className={st.filter}>
            <figure title="Filtrar machos" tooltip-dir="bottom">
              <button
                id="b"
                className={st.male}
                onClick={() => {
                  setSearch_("");
                  setAuxsearch_("Macho");
                  setFilter("Macho");
                }}
              >
                ♂️
              </button>
            </figure>
            <figure title="Filtrar hembras" tooltip-dir="bottom">
              <button
                id="r"
                className={st.female}
                onClick={() => {
                  setSearch_("");
                  setAuxsearch_("Hembra");
                  setFilter("Hembra");
                }}
              >
                ♀️
              </button>
            </figure>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (auxsearch_ === "") {
                swal({
                  title: "Digite un identificador válido.",
                  icon: "error",
                  button: "aceptar",
                });
              } else {
                setSearch_(auxsearch_);
                setFilter("");
                setParametro("");
                setAuxsearch_("init");
              }
            }}
          >
            <input
              name="buscar"
              value={parametro}
              placeholder="Buscar"
              onChange={(e) => {
                setAuxsearch_(e.target.value);
                setParametro(e.target.value);
              }}
            />
            <button className={st.btnSearch} type="submit">
              🔎
            </button>
          </form>
        </div>
        <div className={st.panelCards}>
          <div className={st.cards}>
            {filter === "Hembra" && (
              <>
                <DropdownList
                  coleccion="rabbits"
                  parametro="genero"
                  busqueda={filter}
                />
                <div className="btnPrint">
                  <Buttons
                    direction="top"
                    label="Imprimir ciclos reproductivos"
                    route="/test"
                    btnIconText={faPrint}
                  />
                </div>
              </>
            )}
            {filter === "Macho" && (
              <DropdownList
                coleccion="rabbits"
                parametro="genero"
                busqueda={filter}
              />
            )}
            {auxsearch_ === search.vieja && (
              <DropdownList
                coleccion="rabbits"
                parametro="id"
                busqueda={search_}
                reset={reset}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

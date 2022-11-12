import { ApproximateRepro } from "../../../../../../0-GeneralComp/0-StaticData/Dates/Dates";
import { Inputs } from "../../../../../../0-GeneralComp/1-Inputs/Inputs";
import st from "./Ref.module.css";

export function Ref({ stage, handleChange, date }) {
  const hf = () => {};
  switch (stage.title) {
    case "Monta":
      return (
        <div className={st.panel}>
          <h3>{stage.title}</h3>
          <br />

          <Inputs name="Macho" type="text" leyend="Macho" handleChange={hf} />
          <Inputs
            name="DateInitial"
            type="date"
            leyend="Fecha"
            handleChange={handleChange}
          />
        </div>
      );

    case "Palpación":
      return (
        <div className={st.panel}>
          <h3>{stage.title}</h3>
          {date !== null && (
            <h1>Fecha aproximada: {ApproximateRepro(date).palpation}</h1>
          )}
          <br />
          <Inputs
            name="DatePalpacion"
            type="date"
            leyend="Fecha"
            handleChange={handleChange}
          />
        </div>
      );

    case "Preparto":
      return (
        <div className={st.panel}>
          <h3>{stage.title}</h3>
          {date !== null && (
            <h1>Fecha aproximada: {ApproximateRepro(date).prepartum}</h1>
          )}
          <br />
          <Inputs
            name="DatePreparto"
            type="date"
            leyend="Fecha"
            handleChange={handleChange}
          />
        </div>
      );

    case "Parto":
      return (
        <div className={st.panel}>
          <h3>{stage.title}</h3>
          {date !== null && (
            <h1>Fecha aproximada: {ApproximateRepro(date).birth}</h1>
          )}

          <br />
          <Inputs
            name="lives"
            type="number"
            leyend="Crias vivas"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="deaths"
            type="number"
            leyend="Crias muertas"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="homogen"
            type="number"
            leyend="Homogeneizados"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="total"
            type="number"
            leyend="Crias totales"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="DateParto"
            type="date"
            leyend="Fecha"
            handleChange={handleChange}
          />
        </div>
      );

    case "Destete":
      return (
        <div className={st.panel}>
          <h3>{stage.title}</h3>
          {date !== null && (
            <h1>Fecha aproximada: {ApproximateRepro(date).weaning}</h1>
          )}
          <br />
          <Inputs
            name="WeanedPups"
            type="number"
            leyend="Crias destetadas"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="LitterWeight"
            type="number"
            leyend="Peso camada"
            min="1"
            pattern="^[0-9]+"
            handleChange={hf}
          />
          <Inputs
            name="DateDestete"
            type="date"
            leyend="Fecha"
            handleChange={handleChange}
          />
        </div>
      );

    default:
      return <></>;
  }
}

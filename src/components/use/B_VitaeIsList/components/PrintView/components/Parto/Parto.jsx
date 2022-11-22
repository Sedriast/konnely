import { Row } from "./components/Rows";

export function Parto({ dataPartos }) {
  const cm = (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>V</th>
            <th>M</th>
            <th>Peso Camada</th>
            <th>Homog.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {dataPartos?.map((m, i) => (
            <tr>
              <Row key={i} data={m} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  return cm;
}

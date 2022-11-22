import { Row } from "./components/Rows";

export function Destete({ dataDes }) {
  const cm = (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hembras</th>
            <th>Machos</th>
            <th>Total</th>
            <th>Promedio peso</th>
          </tr>
        </thead>
        <tbody>
          {dataDes?.map((m, i) => (
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

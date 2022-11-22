import { Row } from "./components/Rows";

export function Monta({ dataMontas }) {
  const cm = (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hembra</th>
            <th>Macho</th>
            <th>Saltos</th>
            <th>Posible parto</th>
          </tr>
        </thead>
        <tbody>
          {dataMontas?.map((m, i) => (
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

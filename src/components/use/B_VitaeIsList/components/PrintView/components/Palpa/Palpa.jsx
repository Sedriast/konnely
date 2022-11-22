import { Row } from "./components/Rows";

export function Palpa({ dataPalpa }) {
  const cm = (
    <>
      <table>
        <thead>
          <tr>
            <th>10 días</th>
            <th>20 días</th>
          </tr>
        </thead>
        <tbody>
          {dataPalpa?.map((m, i) => (
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

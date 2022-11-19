import st from "../Form.module.css";

export function TableData({ rabitList }) {
  const cm = (
    <>
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
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
  return cm;
}

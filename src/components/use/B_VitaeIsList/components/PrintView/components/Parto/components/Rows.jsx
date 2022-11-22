export function Row({ data }) {
  const cm = (
    <>
      <td>{data.date}</td>
      <td>{data.V}</td>
      <td>{data.M}</td>
      <td>{data.Wcamada}</td>
      <td>{data.homog}</td>
      <td>{data.total}</td>
    </>
  );
  return cm;
}

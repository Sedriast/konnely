export function Row({ data }) {
  const cm = (
    <>
      <td>{data.date}</td>
      <td>{data.females}</td>
      <td>{data.males}</td>
      <td>{data.total}</td>
      <td>{data.Waverage}</td>
    </>
  );
  return cm;
}

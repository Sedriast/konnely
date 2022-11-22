export function Row({ data }) {
  const cm = (
    <>
      <td>{data.date}</td>
      <td>{data.female}</td>
      <td>{data.male}</td>
      <td>{data.jumps}</td>
      <td>{data.dateAproxParto}</td>
    </>
  );
  return cm;
}

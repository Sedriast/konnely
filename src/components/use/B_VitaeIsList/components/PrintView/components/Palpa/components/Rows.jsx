export function Row({ data }) {
  const cm = (
    <>
      <td>{data.first ? <h3>✔️</h3> : <h3>❌</h3>}</td>
      <td>{data.second ? <h3>✔️</h3> : <h3>❌</h3>}</td>
    </>
  );
  return cm;
}

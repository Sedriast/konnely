export function Data({ data }) {
  const cm = (
    <>
      {data?.map((e) => (
        <tr>
          <td>{e}</td>
        </tr>
      ))}
    </>
  );
  return cm;
}

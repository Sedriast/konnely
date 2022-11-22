export function Data({ data }) {
    const cm = (
        <tr>
            {data?.map((e) => (
                <td>{e}</td>
            ))}
        </tr>
    );
    return cm;
}

import st from './styles/Lists.module.css';

export function Lists(props) {
    return (
        <>
            {props.listar[0] !== 'Loading...' && (
                <div className={st.container}>
                    <h1>{props.leyend}</h1>
                    <select
                        className={st.list_}
                        name={props.name_}
                        onChange={(e) => {
                            props.handleChange(e);
                        }}
                        defaultValue={props.value_}>
                        {props.listar?.map((a) => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
}

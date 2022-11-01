import st from './Lists.module.css';
import { useEffect, useState } from 'react';

export function Lists({ leyend, name_, listar, value_, handleChange }) {
    const [cnsST, setCNSST] = useState(true);
    useEffect(() => {
        value_ ? setCNSST(false) : setCNSST(true);
    }, [value_]);
    return (
        <>
            {listar[0] !== 'Loading...' && (
                <div className={st.container}>
                    <h1 className={cnsST ? st.lblInac : st.lblAc}>{leyend}</h1>
                    <select
                        className={st.list_}
                        id={name_}
                        name={name_}
                        defaultValue={value_ ? value_ : 'DEFAULT'}
                        onFocus={() => {
                            setCNSST(false);
                        }}
                        onBlur={() => {
                            if (
                                document.getElementById(name_).value === '' ||
                                document.getElementById(name_).value === 'DEFAULT'
                            ) {
                                setCNSST(true);
                            }
                        }}
                        onChange={(e) => {
                            handleChange(e);
                        }}>
                        <option value='DEFAULT' hidden></option>
                        {listar?.map((a, i) => (
                            <option key={i} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
}

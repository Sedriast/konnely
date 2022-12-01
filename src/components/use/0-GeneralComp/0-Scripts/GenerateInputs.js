import { useState } from 'react';
import st from '../../F-Forms/NewHistory/components/FormHis/FormHis.module.css';

import { Inputs } from '../1-Inputs/Inputs';

export const GenerateInputs = ({ numero, info }) => {
    const [messyinformation, setMessyinformation] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setMessyinformation({ ...messyinformation, [name]: value });
    };
    function NumeroInputs() {
        let inputs = [];
        let orderedInformation = [];
        for (let i = 0; i < numero; i++) {
            inputs.push(
                <tr>
                    <th id={st.identify}>
                        <Inputs name={'Conejo ' + i} key={i} type='number' handleChange={handleChange} />
                    </th>
                    <td id={st.value}>
                        <Inputs
                            name={'Precio ' + numero + i}
                            key={numero + i}
                            type='number'
                            handleChange={handleChange}
                        />
                    </td>
                </tr>
            );
        }
        if (Object.keys(messyinformation).length / 2 === numero) {
            for (let i = 0; i < numero; i++) {
                orderedInformation.push({
                    id: messyinformation['Conejo ' + i],
                    valor: messyinformation['Precio ' + numero + i],
                });
            }
        }
        info(orderedInformation);
        return inputs;
    }
    return <>{NumeroInputs()}</>;
};

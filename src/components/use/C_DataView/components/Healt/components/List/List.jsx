import { Cards } from '../Cards/Cards';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../../../../C_DataView/scripts/dataProv';
import { QueriesSimple_ } from '../../../../../../firebase/funtions/QueriesSimple_';

export function List() {
    const navigate = useNavigate();
    const trataments = QueriesSimple_({
        coleccion: 'trataments',
        parametro: 'uidRabbit',
        busqueda: basicData.info.uid,
    }).props.children;
    useEffect(() => {
        if (basicData.id === null) {
            navigate('/vitaeslist');
            return null;
        }
    }, [navigate]);
    return (
        <>
            {trataments.map((item) => (
                <>
                    <Cards
                        key={item.uid}
                        id={item.uid}
                        date={item.date}
                        signs={item.signs}
                        diagnosis={item.diagnosis}
                        tratament={item.tratament}
                        result={item.result}
                        professional={item.professional}
                    />
                </>
            ))}
        </>
    );
}

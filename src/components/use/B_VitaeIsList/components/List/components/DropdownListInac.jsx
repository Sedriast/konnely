import { SearchAll } from '../../../../../firebase/funtions/GetInformation';
import { Cards } from './Cards/Cards';

export function DropdownListInac({ coleccion, reset }) {
    const resultado = SearchAll({ coleccion: 'rabbits' }).props.children;

    return (
        <>
            {JSON.stringify(resultado) !== '[{}]' &&
                resultado.map((item, index) => {
                    return item.estado === 'Inactivo' && <Cards key={index} rabitID={item.id} rabitInfo={item} />;
                })}
        </>
    );
}

import swal from 'sweetalert';

import { useEffect } from 'react';
import { Cards } from './Cards';
import { RealTime } from '../../../../../firebase/funtions/RealTime';

export function DropdownList({ coleccion, parametro, busqueda, reset }) {
    const resultado = RealTime({
        coleccion: coleccion,
        parametro: parametro,
        busqueda: busqueda,
    }).props.children;
    useEffect(() => {
        if (resultado.length === 0 && parametro === 'id') {
            swal({
                title: 'No existe ningun registro con ese identificador.',
                icon: 'error',
                button: 'Aceptar',
            }).then(() => {
                reset();
            });
        }
    }, [resultado, parametro, reset]);
    return (
        <>
            {JSON.stringify(resultado) !== '[{}]' &&
                resultado.map((item, index) => (
                    <Cards
                        key={index}
                        rabitID={item.id}
                        rabitImage={item.url}
                        rabitGen={item.genero}
                        rabitRaza={item.raza}
                        rabitInfo={item}
                    />
                ))}
        </>
    );
}

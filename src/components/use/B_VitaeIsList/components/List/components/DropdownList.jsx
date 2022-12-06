import swal from 'sweetalert';

import { useEffect } from 'react';
import { Cards } from './Cards/Cards';
import { RealTime } from '../../../../../firebase/funtions/GetInformation';

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
            {JSON.stringify(resultado) !== '[{}]' && (
                <>
                    {parametro !== 'id' ? (
                        <>
                            {resultado.map((item, index) => {
                                return (
                                    item.estado === 'Activo' && (
                                        <Cards key={index} rabitID={item.id} rabitInfo={item} />
                                    )
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {resultado.map((item, index) => {
                                return <Cards key={index} rabitID={item.id} rabitInfo={item} />;
                            })}
                        </>
                    )}
                </>
            )}
        </>
    );
}

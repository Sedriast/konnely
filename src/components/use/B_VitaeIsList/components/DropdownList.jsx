import swal from 'sweetalert';

import { useEffect } from 'react';
import { Cards } from './Cards';
import { RealTime } from '../../../firebase/funtions/RealTime';

export function DropdownList(props) {
	const resultado = RealTime({
		coleccion: props.coleccion,
		parametro: props.parametro,
		busqueda: props.busqueda,
	}).props.children;
	useEffect(() => {
		if (resultado.length === 0 && props.parametro === 'id') {
			swal({
				title: 'No existe ningun registro con ese identificador.',
				icon: 'error',
				button: 'aceptar',
			});
		}
	}, [resultado, props.parametro]);
	return (
		<>
			{resultado.map((item, index) => (
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

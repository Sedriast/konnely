import swal from 'sweetalert';

import { useEffect } from 'react';
import { Cards } from '../Tools/Cards/Cards';
import { RealTime } from '../../firebase/funtions/RealTime';

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
			{resultado.map((a, index) => (
				<Cards
					key={index}
					id_={index}
					cGp={a.grupo}
					url={a.url}
					rabitDataName={a.id}
					data={a}
					data1={a.raza}
					data2={a.genero}
				/>
			))}
		</>
	);
}

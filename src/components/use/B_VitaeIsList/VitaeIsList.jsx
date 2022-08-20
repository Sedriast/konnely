import swal from 'sweetalert';
import st from './styles/List.module.css';

import { useState } from 'react';
import { DropdownList } from './components/DropdownList';

export function ViewIsList() {
	let search = { vieja: 'init' };
	const [filter, setFilter] = useState('Hembra');
	const [search_, setSearch_] = useState({
		genero: 'genero',
		coletion: 'rabits',
		filter: { filter },
	});

	const [parametro, setParametro] = useState('');
	const [auxsearch_, setAuxsearch_] = useState('');

	function handleChange(e) {
		const { value } = e.target;
		setAuxsearch_(value);
		setParametro(value);
	}

	return (
		<>
			<div className={st.container}>
				<div className={st.pa}>
					<div className={st.fil}>
						<div className={st.opFb} id="b">
							<button
								onClick={() => {
									setAuxsearch_('Macho');
									setSearch_('');
									setFilter('Macho');
								}}
							></button>
						</div>
						<div className={st.opFr} id="r">
							<button
								onClick={() => {
									setAuxsearch_('Hembra');
									setSearch_('');
									setFilter('Hembra');
								}}
							></button>
						</div>
					</div>
					<div className={st.se}>
						<input value={parametro} placeholder="Buscar" onChange={handleChange}></input>
						<button
							onClick={() => {
								if (auxsearch_ === '') {
									swal({
										title: 'Digite un identificador válido.',
										icon: 'error',
										button: 'aceptar',
									});
								} else {
									setSearch_(auxsearch_);
									setFilter('');
									setParametro('');
									setAuxsearch_('init');
								}
							}}
						>
							🔎
						</button>
					</div>
				</div>
				<div className={st.panel}>
					{filter === 'Hembra' && (
						<DropdownList coleccion="conejos" parametro="genero" busqueda={filter} />
					)}
					{filter === 'Macho' && (
						<DropdownList coleccion="conejos" parametro="genero" busqueda={filter} />
					)}
					{auxsearch_ === search.vieja && (
						<DropdownList coleccion="conejos" parametro="id" busqueda={search_} />
					)}
				</div>
			</div>
		</>
	);
}

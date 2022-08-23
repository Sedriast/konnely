import st from '../styles/List.module.css';
import swal from 'sweetalert';

import { useState } from 'react';

import { DropdownList } from './DropdownList';

export function List() {
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
				<div className={st.panelSearchBar}>
					<input value={parametro} placeholder="Buscar" onChange={handleChange} />
					<button
						className={st.btnSearch}
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
					<div className={st.filter}>
						<figure title="Filtrar machos" tooltip-dir="bottom">
							<button
								id="b"
								className={st.male}
								onClick={() => {
									setAuxsearch_('Macho');
									setSearch_('');
									setFilter('Macho');
								}}
							>
								♂️
							</button>
						</figure>
						<figure title="Filtrar hembras" tooltip-dir="bottom">
							<button
								id="r"
								className={st.female}
								onClick={() => {
									setAuxsearch_('Hembra');
									setSearch_('');
									setFilter('Hembra');
								}}
							>
								♀️
							</button>
						</figure>
					</div>
				</div>
				<div className={st.panelCards}>
					<div className={st.cards}>
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
			</div>
		</>
	);
}

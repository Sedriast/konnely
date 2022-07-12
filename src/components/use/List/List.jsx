import r from '../../img/c/r.jpeg';
import g from '../../img/c/g.jpeg';
import b from '../../img/c/b.jpeg';
import w from '../../img/c/w.jpeg';
import st from './css/List.module.css';

import { useState } from 'react';
import { DropdownList } from './DropdownList';
import { Buttons } from '../Tools/Buttons/Buttons';

export function List() {
	var search = { vieja: 'init' };
	const [search_, setSearch_] = useState('');
	const [filter, setFilter] = useState('green');
	const [parametro, setParametro] = useState('');
	const [auxsearch_, setAuxsearch_] = useState(null);

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
						<div className={st.opF} id="b">
							<Buttons
								link_="#"
								text_="Azul"
								icon_={b}
								click_={() => {
									setAuxsearch_('Azul');
									setSearch_('');
									setFilter('blue');
								}}
							/>
						</div>
						<div className={st.opF} id="r">
							<Buttons
								link_="#"
								text_="Rojo"
								icon_={r}
								click_={() => {
									setAuxsearch_('Rojo');
									setSearch_('');
									setFilter('red');
								}}
							/>
						</div>
						<div className={st.opF} id="g">
							<Buttons
								link_="#"
								text_="Verde"
								icon_={g}
								click_={() => {
									setAuxsearch_('Verde');
									setSearch_('');
									setFilter('green');
								}}
							/>
						</div>
						<div className={st.opF} id="w">
							<Buttons
								link_="#"
								text_="Blanco"
								icon_={w}
								click_={() => {
									setAuxsearch_('Blanco');
									setSearch_('');
									setFilter('white');
								}}
							/>
						</div>
					</div>
					<div className={st.se}>
						<input value={parametro} placeholder="Buscar" onChange={handleChange}></input>
						<button
							onClick={() => {
								setSearch_(auxsearch_);
								setFilter('');
								setParametro('');
								setAuxsearch_('init');
							}}
						>
							🔎
						</button>
					</div>
				</div>
				<div className={st.panel}>
					{filter === 'red' && (
						<DropdownList coleccion="conejos" parametro="grupo" busqueda={filter} />
					)}
					{filter === 'blue' && (
						<DropdownList coleccion="conejos" parametro="grupo" busqueda={filter} />
					)}
					{filter === 'white' && (
						<DropdownList coleccion="conejos" parametro="grupo" busqueda={filter} />
					)}
					{filter === 'green' && (
						<DropdownList coleccion="conejos" parametro="grupo" busqueda={filter} />
					)}
					{auxsearch_ === search.vieja && (
						<DropdownList coleccion="conejos" parametro="id" busqueda={search_} />
					)}
				</div>
			</div>
		</>
	);
}

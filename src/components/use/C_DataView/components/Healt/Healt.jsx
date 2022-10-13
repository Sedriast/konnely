/* eslint-disable array-callback-return */
import st from './Healt.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faFileCirclePlus, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

import { List } from './components/List';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';

export function Healt() {
	let activos = [];
	let inactivos = [];
	const [cam, setCam] = useState(true);
	const [search, setSearch] = useState('');
	const [search_, setSearch_] = useState('');
	const navigate = useNavigate();
	const trataments = QueriesSimple_({
		coleccion: 'trataments',
		parametro: 'uidRabbit',
		busqueda: basicData.info.uid,
	}).props.children;
	trataments.map((items) => {
		if (items.state === 'Activo') {
			activos.push(items);
		} else if (items.state === 'Inactivo') {
			inactivos.push(items);
		}
	});

	const buscar = (e) => {
		setSearch(e);
		const valor = trataments.filter((element) => {
			if (
				element.signs.toString().toLowerCase().includes(e.toLowerCase()) ||
				element.date.toString().toLowerCase().includes(e.toLowerCase()) ||
				element.diagnosis.toString().toLowerCase().includes(e.toLowerCase())
			)
				return element;
		});
		setSearch_(valor);
	};
	useEffect(() => {
		if (basicData.id === null) {
			navigate('/vitaeslist');
			return null;
		}
	}, [navigate, trataments]);

	return (
		<div className={st.container}>
			<div className={st.panelSearchBar}>
				<div className={st.new}>
					<Buttons
						btnIconText={faFileCirclePlus}
						route="/addTrat"
						label="Nuevo tratamiento"
						direction="rigth"
					/>
				</div>
				<input
					placeholder="Buscar"
					onChange={(e) => {
						buscar(e.target.value);
					}}
				/>
				<button className={st.btnSearch}>🔎</button>

				<div className={st.btnCam}>
					<Buttons
						btnIconText={cam ? faCheck : faXmark}
						route="#"
						label={cam ? 'Borrados' : 'Activos'}
						direction="bottom"
						btnClick={() => {
							setCam(!cam);
						}}
					/>
				</div>
			</div>

			<div className={st.panelItems}>
				{search === '' ? (
					<List tratamentsActivos={activos} tratamentsInactivos={inactivos} stateCam={cam} />
				) : (
					<List tratamentsActivos={search_} stateCam={true} />
				)}
			</div>
		</div>
	);
}

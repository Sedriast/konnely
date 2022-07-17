import { Buttons } from '../Tools/Buttons/Buttons';
import { Lifecycle } from './com/Lifecycle';
import st from './css/Vitae.module.css';
import { basicData, reproData } from './dataProv';

export function Vitae() {
	return (
		<>
			<div className={st.container}>
				<div className={st.panelBasicInfo}>
					<div className={st.imgVitae}>.............................................</div>
					<div className={st.basicInf}>
						<div className={st.re}>
							<div className={st.id}>
								<h1>Identificador</h1>
								<div className={st.viewI}>{basicData.id}</div>
							</div>
							<div className={st.raza}>
								<h1>Raza</h1>
								<div className={st.viewI}>{basicData.raza}</div>
							</div>
							<div className={st.genero}>
								<h1>Genero</h1>
								<div className={st.viewI}>{basicData.genero}</div>
							</div>
						</div>
						<div className={st.re}>
							<div className={st.idPadre}>
								<h1>Id. Padre</h1>
								<div className={st.viewI}>{basicData.idPadre}</div>
							</div>
							<div className={st.idMadre}>
								<h1>id. Madre</h1>
								<div className={st.viewI}>{basicData.idMadre}</div>
							</div>
							<div className={st.origen}>
								<h1>Origen</h1>
								<div className={st.viewI}>{basicData.origen}</div>
							</div>
						</div>
						<div className={st.re}>
							<div className={st.time1}>
								<h1>Fecha concepcion</h1>
								<div className={st.viewI}>{basicData.fechaConcepcion}</div>
							</div>
							<div className={st.procentaje}>
								<h1>Porcentaje pureza</h1>
								<div className={st.viewI}>{basicData.porcentajePureza}</div>
							</div>
						</div>
					</div>
				</div>

				<Lifecycle />

				<div className={st.stadistics}>
					<div className={st.rej}>Crias rechasadas: {reproData.rechazos}</div>
					<div className={st.dea}>Crias muertas: {reproData.muertes}</div>
					<div className={st.lif}>Crias vivas: {reproData.vivos}</div>
				</div>

				<div className={st.btnEdits}>
					<div className={st.lifeCi}>
						<Buttons link_="#" />
					</div>
					<div className={st.basicData}>
						<Buttons link_="#" />
					</div>
					<div className={st.nPartos}>
						<Buttons link_="#">{reproData.partos}</Buttons>
					</div>
				</div>
			</div>
		</>
	);
}

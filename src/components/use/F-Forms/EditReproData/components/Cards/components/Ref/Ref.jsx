import { ApproximateRepro } from '../../../../../../0-GeneralComp/0-StaticData/Dates/Dates';
import { Inputs } from '../../../../../../0-GeneralComp/1-Inputs/Inputs';
import st from './Ref.module.css';

export function Ref({ stage, handleChange, date }) {
	function handleChange(e) {}
	switch (stage.title) {
		case 'Monta':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />
					<hr />
					<br />

					<div className={st.edit}>
						<Inputs
							value={stage.male}
							name="Macho"
							type="text"
							leyend="Macho"
							handleChange={handleChange}
						/>
						<Inputs
							value={stage.date}
							name="Macho"
							type="date"
							leyend="Fecha"
							handleChange={handleChange}
						/>
					</div>
				</div>
			);

		case 'Palpación':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>
					<br />
					<div className={st.edit}>
						{date !== null && (
							<>
								<h1>Fecha aproximada:</h1> {ApproximateRepro(date).palpation}
							</>
						)}
					</div>

					<br />
					<hr />
					<br />

					<div className={st.edit}>
						<Inputs
							value={stage.date}
							name="DatePalpacion"
							type="date"
							leyend="Fecha"
							handleChange={handleChange}
						/>
					</div>
				</div>
			);

		case 'Preparto':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>
					<br />
					<div className={st.edit}>
						{date !== null && (
							<>
								<h1>Fecha aproximada:</h1> {ApproximateRepro(date).prepartum}
							</>
						)}
					</div>

					<br />
					<hr />
					<br />

					<div className={st.edit}>
						<Inputs
							value={stage.date}
							name="DatePreparto"
							type="date"
							leyend="Fecha"
							handleChange={handleChange}
						/>
					</div>
				</div>
			);

		case 'Parto':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>
					{date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).birth}</h1>}
					<br />
					<hr />
					<br />

					<div className={st.pt}>
						<h1>Crias vivas: </h1>
						<input name="lives" type="text" defaultValue={stage.lives} />
					</div>
					<div className={st.pt}>
						<h1>Crias muertas: </h1>
						<input name="deaths" type="text" defaultValue={stage.deaths} />
					</div>
					<div className={st.pt}>
						<h1>Homogeneizados: </h1>
						<input name="homogen" type="text" defaultValue={stage.homogen} />
					</div>
					<div className={st.pt}>
						<h1>Crias totales: </h1>
						<input name="total" type="text" defaultValue={stage.total} />
					</div>

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input name="DateParto" type="date" defaultValue={stage.date} onChange={handleChange} />
					</div>
				</div>
			);

		case 'Destete':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>
					{date !== null && <h1>Fecha aproximada: {ApproximateRepro(date).weaning}</h1>}
					<br />
					<hr />
					<br />

					<div className={st.pt}>
						<h1>Crias destetadas: </h1>
						<input name="WeanedPups" type="text" defaultValue={stage.WeanedPups} />
					</div>
					<div className={st.pt}>
						<h1>Peso de la camada: </h1>
						<input name="LitterWeight" type="text" defaultValue={stage.LitterWeight} />
					</div>

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input
							name="DateDestete"
							type="date"
							defaultValue={stage.DateDestete}
							onChange={handleChange}
						/>
					</div>
				</div>
			);

		default:
			return <></>;
	}
}

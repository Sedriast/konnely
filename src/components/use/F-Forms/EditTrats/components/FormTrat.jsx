import st from "../../FormStyles.module.css";

import swal from "sweetalert";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { basicData, recuperarTrataments, tratamentsData } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { UpdateInformation } from "../../../../firebase/funtions/AddInformation";

import { Inputs } from "../../../0-GeneralComp/1-Inputs/Inputs";
import { conditionalBasisEdit } from "../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FormTrat() {
	const navigate = useNavigate();

	function handleChange(e) {
		e.preventDefault();
		const { name, value } = e.target;
		if (name === "date") {
			e.target.value = conditionalBasisEdit(value, tratamentsData.info.date);
		}
	}
	useEffect(() => {
		if (basicData.id === null && tratamentsData.info === null) {
			navigate("/vitaeslist");
			return null;
		}
	}, [navigate]);
	return (
		<div className={st.container}>
			<h1 className={st.d}>Edita el tratamiento:</h1>
			<hr />
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					let aux = {};
					for (const element of e.target) {
						if (element.name !== "") {
							aux = { ...aux, [element.name]: element.value };
						}
					}
					aux.uidRabbit = basicData.info.uid;
					await UpdateInformation({
						coleccion: "trataments",
						uid: tratamentsData.info.uid,
						data: aux,
					}).then(() => {
						swal({
							title: "Su actualización se ha realizado correctamente",
							icon: "success",
							button: "aceptar",
						}).then(() => {
							window.history.back();
							recuperarTrataments(null);
						});
					});
				}}
				action=''>
				<Inputs
					value={tratamentsData.info.date}
					name='date'
					type='date'
					leyend='Fecha'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.signs}
					name='signs'
					type='text'
					leyend='Sintomas'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.diagnosis}
					name='diagnosis'
					type='text'
					leyend='Diagnostico'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.treatment}
					name='treatment'
					type='text'
					leyend='Tratamiento'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.result}
					name='result'
					type='text'
					leyend='Resultados'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.medicine}
					name='medicine'
					type='text'
					leyend='Medicamento'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.dose}
					name='dose'
					type='text'
					leyend='Dosis'
					handleChange={handleChange}
				/>
				<Inputs
					value={tratamentsData.info.professional}
					name='professional'
					type='text'
					leyend='Nombre del profecional'
					handleChange={handleChange}
				/>
				<hr />
				<div className={st.btn}>
					<button type='submit'>
						<div>
							<figure title='Guardar cambios' tooltip-dir='top'>
								<FontAwesomeIcon icon={faPaperPlane} />
							</figure>
						</div>
					</button>
				</div>
			</form>
		</div>
	);
}

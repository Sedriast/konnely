import st from "../../FormStyles.module.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { basicData } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { AddTratament } from "../../../../firebase/funtions/AddInformation";

import { Inputs } from "../../../0-GeneralComp/1-Inputs/Inputs";
import { conditionalBasisEdit } from "../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

export function FormTrat() {
	const navigate = useNavigate();

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === "date") {
			e.target.value = conditionalBasisEdit(value, null);
		}
	}
	useEffect(() => {
		if (basicData.id === null) {
			navigate("/vitaeslist");
			return null;
		}
	}, [navigate]);
	return (
		<div className={st.container}>
			<h1 className={st.d}>Nuevo tratamiento</h1>

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
					await AddTratament(aux).then(() => {
						swal({
							title: "El nuevo tratamiento se ha añadido correctamente",
							icon: "success",
							button: "aceptar",
						}).then(() => {
							window.history.back();
						});
					});
				}}
				action=''>
				<Inputs name='date' type='date' leyend='Fecha' handleChange={handleChange} />
				<Inputs name='signs' type='text' leyend='Sintomas' handleChange={handleChange} />
				<Inputs name='diagnosis' type='text' leyend='Diagnostico' handleChange={handleChange} />
				<Inputs name='treatment' type='text' leyend='Tratamiento' handleChange={handleChange} />
				<Inputs name='medicine' type='text' leyend='Medicamento' handleChange={handleChange} />
				<Inputs name='dose' type='text' leyend='Dosis' handleChange={handleChange} />
				<Inputs name='result' type='text' leyend='Resultados' handleChange={handleChange} />
				<Inputs
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
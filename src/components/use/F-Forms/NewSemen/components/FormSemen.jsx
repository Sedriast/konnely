import st from "../../FormStyles.module.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { basicData } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { AddExtraction } from "../../../../firebase/funtions/AddInformation";

import { Inputs } from "../../../0-GeneralComp/1-Inputs/Inputs";
import { conditionalBasisEdit } from "../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import { Lists } from "../../../0-GeneralComp/1-List/Lists";
import { GetDocument } from "../../../../firebase/funtions/GetInformation";

export function FormSemen() {
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
			<h1 className={st.d}>Recoleción de semen</h1>
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
					await AddExtraction(aux).then(() => {
						swal({
							title: "La nueva extracción de semen se ha añadido correctamente",
							icon: "success",
							button: "aceptar",
						}).then(() => {
							window.history.back();
						});
					});
				}}
				action=''>
				<Inputs name='date' type='date' leyend='Fecha' handleChange={handleChange} />
				<Lists
					name_='methods'
					leyend='Metodo de extracción'
					listar={GetDocument({ coleccion: "lists", list: "semenMethods" }).props.children[0].values}
					handleChange={handleChange}
				/>
				<Inputs name='volume' type='number' leyend='Volumen (mL)' handleChange={handleChange} />
				<Inputs name='pajillas' type='number' leyend='Número de Pajillas' handleChange={handleChange} />
				<Inputs name='observations' type='text' leyend='Observaciones' handleChange={handleChange} />
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

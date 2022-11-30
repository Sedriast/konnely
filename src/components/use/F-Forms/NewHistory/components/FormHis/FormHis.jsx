import st from "./FormHis.module.css";

import { useState } from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { basicData } from "../../../../0-GeneralComp/0-StaticData/dataProv";
import { AddTratament } from "../../../../../firebase/funtions/AddInformation";

import { Inputs } from "../../../../0-GeneralComp/1-Inputs/Inputs";
import { conditionalBasisEdit } from "../../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

export function FormHis() {
	const [value1, setValue1] = useState(0);

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === "date") {
			e.target.value = conditionalBasisEdit(value, null);
		}
		if (name === "value1") {
			setValue1(parseInt(e.target.value));
		}
	}

	return (
		<div className={st.container}>
			<h1 className={st.d}>
				Nuevo tratamiento
				<br />
				<br />
			</h1>
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
				<Inputs name='seller' type='text' leyend='Vendedor' handleChange={handleChange} />
				<Inputs name='buyer' type='text' leyend='Comprador/a' handleChange={handleChange} />
				<Inputs name='type' type='text' leyend='Tipo de transacción' handleChange={handleChange} />
				<Inputs name='date' type='text' leyend='Fecha' handleChange={handleChange} />
				<Inputs name='value1' type='text' leyend='Numero de conejos' handleChange={handleChange} />
				<Inputs
					name='professional'
					type='text'
					leyend='Nombre del profecional'
					handleChange={handleChange}
				/>
				<br />
				<br />
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

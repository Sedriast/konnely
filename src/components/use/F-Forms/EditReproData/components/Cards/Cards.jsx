import st from "./Cards.module.css";

import { Ref } from "./components/Ref/Ref";
import {
	conditionalBasisEdit,
	conditionalNextEdit,
} from "../../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { useState } from "react";
import { useAuth } from "../../../../../../context/AuthContext";
import { formatCycleReproductive } from "../../../../0-GeneralComp/0-StaticData/Dates/format";
import { UpdateReproductiveCycle } from "../../../../../firebase/funtions/AddInformation";
import { QueriesSimple_ } from "../../../../../firebase/funtions/GetInformation";
import swal from "sweetalert";
import { basicData } from "../../../../0-GeneralComp/0-StaticData/dataProv";

export function Cards({ item, stages }) {
	const { user } = useAuth();
	const [date, setDate] = useState(stages[0].date);
	const males = QueriesSimple_({
		coleccion: "rabbits",
		parametro: "genero",
		busqueda: "Macho",
	}).props.children;
	const autentication = (e, valor) => {
		if (valor[0] !== undefined) {
			if (valor[0].idPadre === basicData.info.idPadre || valor[0].idMadre === basicData.info.idMadre) {
				swal({
					title: "Estos conejos son hermanos, no puede reproducirlos entre si",
					dangerMode: true,
					icon: "error",
					button: "aceptar",
				});
			} else {
				swal({
					title: "¿Esta segura o seguro de actualizar este ciclo reproductivo?",
					icon: "success",
					buttons: ["Cancelar", "Aceptar"],
				}).then(async (respuesta) => {
					if (respuesta) {
						await UpdateReproductiveCycle(formatCycleReproductive(e, item, user)).then(() => {
							swal({
								title: "Ciclo reproductivo actualizado con exito",
								icon: "success",
								button: "Aceptar",
							}).then(() => {
								window.history.back();
							});
						});
					}
				});
			}
		} else {
			swal({
				title: "No existe un registro de este conejo, ¿segura o seguro que desea actualizar este ciclo reproductivo?",
				dangerMode: true,
				icon: "warning",
				buttons: ["Cancelar", "Aceptar"],
			}).then(async (respuesta) => {
				if (respuesta) {
					await UpdateReproductiveCycle(formatCycleReproductive(e, item, user)).then(() => {
						swal({
							title: "Ciclo reproductivo actualizado con exito",
							icon: "success",
							button: "Aceptar",
						}).then(() => {
							window.history.back();
						});
					});
				}
			});
		}
	};
	function handleChange(e) {
		if (e.target.name === "DateInitial") {
			e.target.value = conditionalBasisEdit(e.target.value, stages[0].date);
			setDate(e.target.value);
		} else if (e.target.name === "DatePalpacion") {
			e.target.value = conditionalNextEdit(e.target.value, stages[1].date, date);
		} else if (e.target.name === "DatePreparto") {
			e.target.value = conditionalNextEdit(e.target.value, stages[2].date, date);
		} else if (e.target.name === "DateParto") {
			e.target.value = conditionalNextEdit(e.target.value, stages[3].date, date);
		} else if (e.target.name === "DateDestete") {
			e.target.value = conditionalNextEdit(e.target.value, stages[4].date, date);
		}
		if (e.target.name === "DateInitial" && e.target.value === "") {
			setDate(null);
			e.target.value = null;
		}
	}

	return (
		<div className={st.container}>
			<form
				className={st.panelInfo}
				onSubmit={async (e) => {
					e.preventDefault();
					const valor = males.filter(function (element) {
						if (element.id.toString().toLowerCase().includes(e.target.Macho.value.toLowerCase())) {
							return element;
						} else {
							return null;
						}
					});
					if (e.target.DateInitial.value && e.target.id.value) {
						autentication(e, valor);
					} else {
						swal({
							title: "Debe ingresar una fecha inicial o un identidicador de la camada",
							dangerMode: true,
							icon: "error",
							button: "aceptar",
						});
					}
				}}>
				{stages?.map((element) => {
					return <Ref stage={element} handleChange={handleChange} date={date} />;
				})}
				<div className={st.btn}>
					<button type='submit'>💾</button>
				</div>
			</form>
		</div>
	);
}

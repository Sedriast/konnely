import st from "./Cards.module.css";

import { faPen, faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Buttons } from "../../../../../0-GeneralComp/1-Buttons/Buttons";
import swal from "sweetalert";
import { Modal } from "../../../../../0-GeneralComp/0-StaticData/Modals/Modal";
import { useModal } from "../../../../../0-GeneralComp/0-StaticData/Modals/useModal";
import { useAuth } from "../../../../../../../context/AuthContext";
import { useState } from "react";
import { AddAudit, ReactivateRegistration } from "../../../../../../firebase/funtions/AddInformation";
import { recuperarTrataments } from "../../../../../0-GeneralComp/0-StaticData/dataProv";

export function CardRecord({
	id,
	uid,
	date,
	signs,
	diagnosis,
	tratament,
	result,
	professional,
	trataments,
	uidAudit,
	state,
	setOptionSelect,
}) {
	const { user } = useAuth();
	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [auditoria, setAuditoria] = useState("");

	return (
		<div className={st.container} id={id}>
			<div className={st.panelId}>Tratamiento {id} </div>
			{state === "Activo" ? (
				<div className={st.btnPanel}>
					<div>
						<Buttons
							route='/EditTrats'
							label='Editar'
							direction='bottom'
							btnIconText={faPen}
							btnClick={(e) => {
								e.preventDefault();
								recuperarTrataments(trataments);
							}}
						/>
					</div>
					<div>
						<Buttons
							route='#'
							label='Eliminar'
							direction='bottom'
							btnIconText={faTrash}
							btnClick={() => {
								swal({
									title: "¿Desea eliminar este tratamiento?",
									dangerMode: true,
									icon: "warning",
									buttons: ["No", "Si"],
								}).then((respuesta) => {
									if (respuesta) {
										openModal();
									}
								});
							}}
						/>
					</div>
				</div>
			) : (
				<div className={st.btnPanel}>
					<Buttons
						route='#'
						label='Activar'
						direction='bottom'
						btnIconText={faCircle}
						btnClick={() => {
							swal({
								title: "¿Desea volver a activar este tratamiento?",
								icon: "warning",
								buttons: ["No", "Si"],
							}).then(async (respuesta) => {
								if (respuesta) {
									await ReactivateRegistration({
										coleccion: "trataments",
										uid: uid,
										uidAudit: uidAudit,
										data: {
											removalDate: null,
											state: "Activo",
											uidAudit: null,
										},
									}).then(() => {
										swal({
											title: "El tratamiento se ha reactivado correctamente",
											icon: "success",
											button: "Aceptar",
										}).then(() => {
											setOptionSelect(0);
										});
									});
								}
							});
						}}
					/>
				</div>
			)}
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				{isOpenModal && (
					<>
						<br />
						¿Porque desea eliminar este tratamiento?
						<br />
						<br />
						<textarea
							className={st.inpModal}
							defaultValue={auditoria}
							type='text'
							placeholder='Porque desea eliminar este tratamiento'
							onChange={(e) => {
								e.preventDefault();
								setAuditoria(e.target.value);
							}}></textarea>
						<button
							className={st.btnModal}
							onClick={async (e) => {
								e.preventDefault();
								if (auditoria !== "") {
									await AddAudit({
										coleccion: "trataments",
										props: {
											razon: auditoria,
											uidTratament: uid,
											uidProfile: user.uid,
											userNameProfile: user.displayName,
											fecha: Date.now(),
										},
									}).then(() => {
										swal({
											title: "El tratamiento se ha eliminado temporalmente",
											text: "Puede volver a activarla en un periodo de 2 meses",
											icon: "success",
											button: "Aceptar",
										}).then(() => {
											setAuditoria("");
											setOptionSelect(0);
										});
									});
								}
								closeModal();
							}}>
							Enviar
						</button>
					</>
				)}
			</Modal>
			<br />
			<br />
			<hr />
			<br />
			<br />
			<br />
			<div className={st.panelInfo}>
				<div className={st.sp}>
					Fecha:
					<br />
					<div>{date}</div>
				</div>
				<div className={st.sp}>
					Síntomas:
					<br />
					<div>{signs}</div>
				</div>
				<div className={st.sp}>
					Diagnóstico:
					<br />
					<div>{diagnosis}</div>
				</div>
				<div className={st.sp}>
					Tratamiento:
					<br />
					<div>{tratament}</div>
				</div>
				<div className={st.sp}>
					Resultados:
					<br />
					<div>{result}</div>
				</div>
				<div className={st.sp}>
					Nombre del profesional:
					<br />
					<div>{professional}</div>
				</div>
			</div>
		</div>
	);
}

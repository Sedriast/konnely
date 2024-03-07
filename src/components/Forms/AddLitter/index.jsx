import { errorAlert, useRabbits } from "../../../hooks/useContexts";
import { useEffect, useState } from "react";
import st from "./addLitter.module.css";
import { Link } from "react-router-dom";

export function AddLitter({ language }) {
	const { litters_, rabbits_ } = useRabbits();
	const [stage, setStage] = useState({
		ride: false,
		partum: false,
		weaning: false,
		palpation: false,
		prepartum: false,
	});
	const {
		labels: {
			id,
			ride,
			date,
			male,
			dead,
			males,
			alive,
			partum,
			female,
			females,
			natural,
			weaning,
			isFemale,
			palpation,
			prepartum,
			artificial,
			homogenized,
			averangeWeight,
		},
		buttons: { back },
	} = language;

	function validateRabbitID(rabbitID, name) {
		if (rabbitID.length > 0 && rabbitID !== null && rabbitID !== undefined) {
			if (!rabbitID) {
				throw new Error("Invalid rabbit ID");
			}

			const doesRabbitIDExist = rabbits_?.some(
				({ id, status: { active } }) =>
					id.toLowerCase().includes(rabbitID.toLowerCase()) && active
			);

			if (!doesRabbitIDExist) {
				document.getElementsByName(name)[0].value = "";
				errorAlert("id-no-exists");
			} else {
				return true;
			}
		} else {
			errorAlert("id-invalid");
		}
	}

	function validateLitterID(litterID) {
		if (litterID.length > 0 && litterID !== null && litterID !== undefined) {
			if (!litterID) {
				throw new Error("Invalid litter ID");
			}

			const doesLitterIDExist = litters_?.some(
				({ id, status: { active } }) =>
					id.toLowerCase().includes(litterID.toLowerCase()) && active
			);

			if (doesLitterIDExist) {
				document.getElementsByName("id")[0].value = "";
				errorAlert("id-already-exists");
			} else {
				return true;
			}
		} else {
			errorAlert("id-invalid");
		}
	}

	// this use effect is to activate the first stage input when the component is mounted
	useEffect(() => {
		document.getElementsByName("observerRide")[0]?.click();
	}, []);

	return (
		<>
			<Link className="BTN_back" to="/litterList">
				{back}
			</Link>
			<form className={st.panelLitter} onSubmit={() => {}}>
				<section>
					<label title="id_label">
						{id}
						<input
							required
							name="id"
							type="number"
							placeholder={id}
							inputMode="numeric"
							onBlur={(event) => {
								validateLitterID(event.target.value);
							}}
						/>
					</label>
				</section>
				<div>
					<label title="rideStage_label">
						{ride}
						<div className={st.switch}>
							<input
								required
								type="checkbox"
								name="observerRide"
								onChange={(event) =>
									event.target.checked
										? setStage({
												...stage,
												ride: (
													<section>
														<label title="rideDate_label">
															{date}
															<input required type="date" name="rideDate" />
														</label>
														<label title="rideFemale_label">
															{female}
															<input
																type="number"
																name="rideFemaleID"
																placeholder={female}
																onBlur={(event) => {
																	validateRabbitID(
																		event.target.value,
																		event.target.name
																	);
																}}
															/>
														</label>
														<label title="rideMale_label">
															{male}
															<input
																type="number"
																name="rideMaleID"
																placeholder={male}
																onBlur={(event) => {
																	validateRabbitID(
																		event.target.value,
																		event.target.name
																	);
																}}
															/>
														</label>
														<label title="rideIsFemale_label">
															{isFemale}
															<section className={st.isNatural}>
																<input
																	type="radio"
																	id="natural"
																	value={true}
																	name="isNatural"
																	defaultChecked
																/>
																<label htmlFor="natural">{natural}</label>
																<input
																	type="radio"
																	name="isNatural"
																	value={false}
																	id="artificial"
																/>
																<label htmlFor="artificial">{artificial}</label>
															</section>
														</label>
													</section>
												),
										  })
										: setStage({ ...stage, ride: false })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{stage.ride}
				</div>

				<div>
					<label title="palpationStage_label">
						{palpation}
						<div className={st.switch}>
							<input
								required
								type="checkbox"
								name="observerPalpation"
								onChange={(event) =>
									event.target.checked
										? setStage({
												...stage,
												palpation: (
													<section>
														<label title="palpationDate_label">
															{date}
															<input
																required
																type="date"
																name="palpationDate"
															/>
														</label>
													</section>
												),
										  })
										: setStage({ ...stage, palpation: false })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{stage.palpation}
				</div>

				<div>
					<label title="prepartumStage_label">
						{prepartum}
						<div className={st.switch}>
							<input
								required
								type="checkbox"
								name="observerPrepartum"
								onChange={(event) =>
									event.target.checked
										? setStage({
												...stage,
												prepartum: (
													<section>
														<label title="prepartumDate_label">
															{date}
															<input required type="date" name="prepatumDate" />
														</label>
													</section>
												),
										  })
										: setStage({ ...stage, prepartum: false })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{stage.prepartum}
				</div>

				<div>
					<label title="partumStage_label">
						{partum}
						<div className={st.switch}>
							<input
								required
								type="checkbox"
								name="observerPartum"
								onChange={(event) =>
									event.target.checked
										? setStage({
												...stage,
												partum: (
													<section>
														<label title="partumDate_label">
															{date}
															<input required type="date" name="patumDate" />
														</label>
														<label title="partumAlive_label">
															{alive}
															<input
																required
																placeholder={alive}
																type="number"
																inputMode="numeric"
																name="patumAlive"
															/>
														</label>
														<label title="partumDead_label">
															{dead}
															<input
																required
																placeholder={dead}
																type="number"
																inputMode="numeric"
																name="patumDead"
															/>
														</label>
														<label title="patumHomonogenized_label">
															{homogenized}
															<input
																required
																placeholder={homogenized}
																type="number"
																inputMode="numeric"
																name="patumHomonogenized"
															/>
														</label>
													</section>
												),
										  })
										: setStage({ ...stage, partum: false })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{stage.partum}
				</div>

				<div>
					<label title="weaningStage_label">
						{weaning}
						<div className={st.switch}>
							<input
								required
								type="checkbox"
								name="observerWeaning"
								onChange={(event) =>
									event.target.checked
										? setStage({
												...stage,
												weaning: (
													<section>
														<label title="weaningDate_label">
															{date}
															<input required type="date" name="patumDate" />
														</label>
														<label title="weaningAverangeWeight_label">
															{averangeWeight}
															<input
																required
																placeholder={averangeWeight}
																type="number"
																inputMode="numeric"
																name="patumAlive"
															/>
														</label>
														<label title="weaningMales_label">
															{males}
															<input
																required
																placeholder={males}
																type="number"
																inputMode="numeric"
																name="patumDead"
															/>
														</label>
														<label title="weaningFemales_label">
															{females}
															<input
																required
																placeholder={females}
																type="number"
																inputMode="numeric"
																name="patumHomonogenized"
															/>
														</label>
													</section>
												),
										  })
										: setStage({ ...stage, weaning: false })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{stage.weaning}
				</div>
			</form>
		</>
	);
}

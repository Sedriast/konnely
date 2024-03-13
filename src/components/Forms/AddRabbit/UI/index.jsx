import { errorAlert } from "../../../../hooks/useContexts";
import imageCompression from "browser-image-compression";
import React, { useEffect, useState } from "react";
import { Cards } from "../../../LitterList/Cards";
import { Racee } from "../../../Fragments/Racee";
import { useNavigate } from "react-router-dom";
import st from "../addRabbit.module.css";

export function UI({
	litter,
	racesFN,
	filterFN,
	submitFN,
	language,
	validateIDFN,
}) {
	const [state, setState] = useState({
		image: null,
		litters: [],
		inputRaces: [],
		isTransferred: <></>,
	});

	const {
		races_,
		labels: {
			male,
			races,
			dadID,
			momID,
			origin,
			female,
			rabbitID_l,
			weaningDate,
			rabbitGender,
			transferenceDate,
			weaningAverageWeight,
			currentAverageWeight,
		},
		placeholders: {
			origin_p,
			rabbitID_p,
			weaningAverangeWeight_p,
			currentAverangeWeight_p,
		},
		buttons: { submit_b, back_b, addRaces_b, deleteRaces_b },
		card,
	} = language;

	const navigate = useNavigate();

	// this use effect is to activate the first race input the component is mounted
	useEffect(() => {
		document.getElementsByName("add_race_btn")[0]?.click();
	}, []);

	return (
		<>
			<button
				className="BTN_back"
				onClick={() => {
					filterFN(["female", ""]);
					navigate("/rabbitList");
				}}>
				{back_b}
			</button>
			<form
				className={st.panel}
				onSubmit={(event) => {
					event.preventDefault();
					const genderInput = Array.from(
						event.target.elements.rabbit_gender
					).find((input) => input.checked);
					submitFN({
						elements: event.target.elements,
						races: racesFN(
							state.inputRaces.length,
							event.target.elements.numerators,
							event.target.elements.denominators,
							event.target.elements.raceNames
						),
						gender: genderInput && genderInput.value === "true" ? true : false,
						image: state.image,
					});
				}}>
				<section className={st.image}>
					<hr />
					<input
						required
						type="file"
						id="rabbit_Picture"
						name="rabbit_Picture"
						onChange={async (event) => {
							const file = event.target.files[0];
							if (file && file.type.startsWith("image/")) {
								try {
									const options = {
										maxSizeMB: 1,
										maxWidthOrHeight: 1920,
										useWebWorker: true,
									};
									const compressedFile = await imageCompression(file, options);

									const reader = new FileReader();
									reader.onloadend = () => {
										const base64String = reader.result;
										setState({
											...state,
											image: base64String,
										});
									};
									reader.readAsDataURL(compressedFile);
								} catch (error) {
									console.error("Failed to compress image:", error);
								}
							} else {
								errorAlert("image-invalid");
							}
						}}
					/>
					<label
						htmlFor="rabbit_Picture"
						style={{ backgroundImage: `url(${state.image})` }}></label>
				</section>
				<section>
					<label>
						{rabbitID_l}
						<input
							required
							name="id"
							type="number"
							placeholder={rabbitID_p}
							inputMode="numeric"
							step="1"
							onBlur={(event) => validateIDFN(parseFloat(event.target.value))}
						/>
					</label>
				</section>
				<section className={st.gender}>
					<label>{rabbitGender}</label>
					<section>
						<input
							type="radio"
							value={true}
							defaultChecked
							id="rabbit_gender_f"
							name="rabbit_gender"
						/>
						<label htmlFor="rabbit_gender_f">{female}</label>
						<input
							type="radio"
							value={false}
							name="rabbit_gender"
							id="rabbit_gender_m"
						/>
						<label htmlFor="rabbit_gender_m">{male}</label>
					</section>
				</section>

				{litter ? (
					<Cards language={card} litter={litter} />
				) : (
					<section className={st.transference}>
						<label>
							{origin}
							<input
								required
								type="text"
								placeholder={origin_p}
								name="origin"
							/>
						</label>
						<label>
							{transferenceDate}
							<input required type="date" name="transference_date" />
						</label>
						<section>
							<label>
								{weaningDate}
								<input required type="date" name="weaning_date" />
							</label>
							<label>
								{weaningAverageWeight}
								<input
									required
									placeholder={weaningAverangeWeight_p}
									type="number"
									inputMode="numeric"
									name="weaningAverageWeight"
								/>
							</label>
							<label>
								{momID}
								<input
									required
									placeholder={momID}
									step="1"
									type="number"
									inputMode="numeric"
									name="weaningFemales"
								/>
							</label>
							<label>
								{dadID}
								<input
									required
									placeholder={dadID}
									step="1"
									type="number"
									inputMode="numeric"
									name="weaningMales"
								/>
							</label>
						</section>
						<section>
							<label>
								{currentAverageWeight}
								<input
									required
									placeholder={currentAverangeWeight_p}
									type="number"
									inputMode="numeric"
									name="currentAverageWeight"
								/>
							</label>
						</section>
					</section>
				)}
				<section>
					<label>
						{races}
						{state.inputRaces.map((element) => element)}
					</label>
					<div>
						{state.inputRaces.length < races_.length && (
							<button
								type="button"
								title={addRaces_b}
								name="add_race_btn"
								onClick={() =>
									setState({
										...state,
										inputRaces: [
											...state.inputRaces,
											<Racee
												races_={races_}
												key={state.inputRaces.length}
												index={state.inputRaces.length}
											/>,
										],
									})
								}>
								{addRaces_b}
							</button>
						)}
						{state.inputRaces.length > 1 && (
							<button
								type="button"
								title={deleteRaces_b}
								name="delete_race_btn"
								onClick={() => {
									const newInputRaces = [...state.inputRaces];
									newInputRaces.pop();
									setState({
										...state,
										inputRaces: newInputRaces,
									});
								}}>
								{deleteRaces_b}
							</button>
						)}
					</div>
				</section>

				<section>
					<button title={submit_b} name="submit_btn" type="submit">
						{submit_b}
					</button>
				</section>
			</form>
		</>
	);
}

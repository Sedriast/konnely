import React, { useEffect, useState } from "react";
import st from "../addRabbit.module.css";
import { Link } from "react-router-dom";
import { useRabbits } from "../../../../hooks/useContexts";
import { Racee } from "../../../Fragments/Racee";

export function UI({ language }) {
	const { litters_ } = useRabbits();

	const {
		races_,
		labels: {
			male,
			races,
			dadID,
			momID,
			origin,
			female,
			litterID_l,
			rabbitID_l,
			weaningDate,
			rabbitGender,
			isTransferred,
			transferenceDate,
			weaningAverageWeight,
			currentAverageWeight,
		},
		placeholders: {
			origin_p,
			litterID_p,
			rabbitID_p,
			weaningAverangeWeight_p,
			currentAverangeWeight_p,
		},
		buttons: { submit_b, back_b, addRaces_b, deleteRaces_b },
	} = language;

	const [state, setState] = useState({
		image: null,
		inputRaces: [],
		isTransferred: (
			<label title="id_camada_label">
				{litterID_l}
				<select
					required
					name="litterID"
					onChange={(event) => {
						console.log(litters_);
						setLitter(event.target.value);
					}}>
					<option hidden value="">
						{litterID_p}
					</option>
					{litters_?.map((option_, index) => (
						<option key={index} value={option_}>
							{option_.id}
						</option>
					))}
				</select>
			</label>
		),
	});
	const [birthLittter, setLitter] = useState({});

	// this use effect is to activate the first race input and simulate the transferece check when the component is mounted
	useEffect(() => {
		document.getElementsByName("add_race_btn")[0]?.click();
	}, []);

	return (
		<>
			<Link className="BTN_back" to="/rabbitList">
				{back_b}
			</Link>
			<form className={st.panel}>
				<section className={st.image}>
					<hr />
					<input
						required
						type="file"
						id="rabbit_Picture"
						name="rabbit_Picture"
						onChange={(event) => {
							if (event.target.files && event.target.files[0]) {
								setState({
									...state,
									image: URL.createObjectURL(event.target.files[0]),
								});
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
							onBlur={(event) => {}}
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
				<section className={st.transference}>
					<label>
						{isTransferred}
						<div className="switch">
							<input
								type="checkbox"
								name="originObserver"
								onChange={(event) =>
									event.target.checked
										? setState({
												...state,
												isTransferred: (
													<>
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
															<input
																required
																type="date"
																name="transference_date"
															/>
														</label>
														<label>
															{momID}
															<input
																required
																placeholder={momID}
																name="momID"
																type="number"
																inputMode="numeric"
															/>
														</label>
														<label>
															{dadID}
															<input
																required
																name="dadID"
																placeholder={dadID}
																type="number"
																inputMode="numeric"
															/>
														</label>
														<section>
															<label>
																{weaningDate}
																<input
																	required
																	type="date"
																	name="weaning_date"
																/>
															</label>
															<label>
																{weaningAverageWeight}
																<input
																	required
																	placeholder={weaningAverangeWeight_p}
																	type="number"
																	inputMode="numeric"
																	name="weaningAverangeWeight"
																/>
															</label>
															<label>
																{momID}
																<input
																	required
																	placeholder={momID}
																	type="number"
																	inputMode="numeric"
																	name="weaningMales"
																/>
															</label>
															<label>
																{dadID}
																<input
																	required
																	placeholder={dadID}
																	type="number"
																	inputMode="numeric"
																	name="weaningFemales"
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
																	name="patumAlive"
																/>
															</label>
														</section>
													</>
												),
										  })
										: setState({
												...state,
												isTransferred: (
													<label title="id_camada_label">
														{litterID_l}
														<select
															required
															name="litterID"
															onChange={(event) => {
																console.log(litters_);
																setLitter(event.target.value);
															}}>
															<option hidden value="">
																{litterID_p}
															</option>
															{litters_?.map((option_, index) => (
																<option key={index} value={option_}>
																	{option_.id}
																</option>
															))}
														</select>
													</label>
												),
										  })
								}
							/>
							<span></span>
						</div>
					</label>
					<hr />
					{state.isTransferred}
				</section>
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

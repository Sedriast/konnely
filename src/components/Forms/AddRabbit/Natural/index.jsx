import { addImageAndInfo } from "../../../../hooks/firebase/functions/AddInformation";
import { errorAlert, useRabbits } from "../../../../hooks/useContexts";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import st from "../addRabbit.module.css";
import Swal from "sweetalert2";

import { Lists } from "../../../Fragments/Lists";
import { Racee } from "../../../Fragments/Racee";

export function Natural({ language, user }) {
	const navigate = useNavigate();
	const [image, setImage] = useState(null);
	const [addRaces, setAddRaces] = useState([]);

	const { litters, rabbits, setRabbit } = useRabbits();
	const {
		L_id,
		race,
		place,
		image_,
		gender,
		Q_submit,
		BTN_back,
		L_LitterID,
		BTN_submit,
	} = language;

	const litters_id = litters.map((element) => ({
		label_: element.id,
		value: element.id,
	}));

	const races_ = race.values.map((element) => ({
		label_: element,
		value: element,
	}));

	function validateRabbitID(rabbitID) {
		if (!rabbitID) {
			throw new Error("Invalid rabbit ID");
		}

		const doesRabbitIDExist = rabbits.some(
			({ id, status: { active } }) =>
				id.toLowerCase().includes(rabbitID.toLowerCase()) && active
		);

		if (doesRabbitIDExist) {
			errorAlert("id-already-exists");
		} else {
			return true;
		}
	}

	function handleImageChange(event) {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	}

	function handleSubmit(document) {
		Swal.fire({
			icon: "question",
			title: Q_submit[0],
			showCancelButton: true,
			confirmButtonText: Q_submit[1],
			cancelButtonText: Q_submit[2],
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					await addImageAndInfo(document);
					Swal.fire({
						title: Q_submit[3],
						icon: "success",
					}).then(() => {
						setRabbit(document);
						navigate("/vitae");
					});
				} catch (error) {
					alert(error);
				}
			}
		});
	}

	// this use effect is to activate the first race input when the component is mounted
	useEffect(() => {
		document.getElementsByName("addRisessBTN")[0]?.click();
	}, []);

	return (
		<>
			<Link className={st.BTN_back} to="/rabbitList">
				{BTN_back}
			</Link>
			<form
				className={st.panelNatural}
				onSubmit={(event) => {
					event.preventDefault();
					const fecha = new Date();
					const selectedGender = document.querySelector(
						'input[name="gender"]:checked'
					).value;
					let racesAdded = [];
					if (addRaces.length > 1) {
						for (let index = 0; index < addRaces.length; index++) {
							racesAdded.push({
								name: event.target.elements.race[index]?.value,
								percentage: `${event.target.elements.numerator[index]?.value}/${event.target.elements.denominator[index]?.value}`,
							});
						}
					} else {
						racesAdded.push({
							name: event.target.elements.race.value,
							percentage: `${event.target.elements.numerator.value}/${event.target.elements.denominator.value}`,
						});
					}
					handleSubmit({
						id: event.target.elements.id.value,
						uid: "0",
						litter: "false",
						isFemale: selectedGender === "true" ? true : false,
						origin: place,
						status: {
							transferred: {
								status: false,
								date: "00-00-00",
								mom_id: "0",
								dad_id: "0",
							},
							changeDate: `${String(fecha.getDate()).padStart(2, "0")}-${String(
								fecha.getMonth() + 1
							).padStart(2, "0")}-${String(fecha.getFullYear()).substr(-2)}`,
							active: true,
						},
						userSignature: { name: user.displayName, uid: user.uid },
						pictureURL: image,
						lifecycle: {
							birth: {
								litter: event.target.elements.litter.value,
								race: racesAdded,
							},
							weaning: {
								weight: "000",
								finish: false,
								date: "00-00-00",
							},
							fattening: {
								weight: "000",
								finish: false,
								date: "00-00-00",
							},
						},
					});
				}}>
				<section className={st.image} title="image_section">
					<hr />
					<input
						required
						id="image"
						type="file"
						name="image"
						onChange={handleImageChange}
					/>
					<label htmlFor="image" style={{ backgroundImage: `url(${image})` }}>
						{image === null && image_}
					</label>
				</section>

				<label title="id_label">
					{L_id}
					<input
						required
						name="id"
						type="number"
						placeholder={L_id}
						inputMode="numeric"
						onBlur={(event) => {
							validateRabbitID(event.target.value);
						}}
					/>
				</label>

				<label title="id_camada_label">
					{L_LitterID}
					<Lists
						required
						name={"litter"}
						options={litters_id}
						placeholder={L_LitterID}
					/>
				</label>

				<label title="gender">
					{gender.label}
					<section className={st.gender}>
						<input
							id="gender_female"
							name="gender"
							type="radio"
							value={true}
							defaultChecked
						/>
						<label htmlFor="gender_female">{gender.female}</label>
						<input type="radio" id="gender_male" name="gender" value={false} />
						<label htmlFor="gender_male">{gender.male}</label>
					</section>
				</label>

				<label className={st.races} title="race">
					{race.label}
					{addRaces.map((element) => element)}
					{addRaces.length < races_.length && (
						<button
							name="addRisessBTN"
							type="button"
							onClick={() =>
								setAddRaces([
									...addRaces,
									<React.Fragment key={addRaces.length}>
										<Racee index={addRaces.length} races_={races_} /> <hr />
									</React.Fragment>,
								])
							}>
							{race.BTN_label}
						</button>
					)}
				</label>

				<button title="addRabbit" type="submit">
					{BTN_submit}
				</button>
			</form>
		</>
	);
}

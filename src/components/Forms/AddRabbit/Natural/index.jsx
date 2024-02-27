import { addRabbitData } from "../../../../hooks/firebase/functions/AddInformation";
import { errorAlert } from "../../../../hooks/useContexts";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import st from "../addRabbit.module.css";
import Swal from "sweetalert2";

import { Lists } from "../../../Fragments/Lists";

export function Natural({ refreshData, language, litters, rabbits, user }) {
	const navigate = useNavigate();
	const [image, setImage] = useState(null);
	const [addRaces, setAddRaces] = useState([]);
	const {
		L_id,
		race,
		place,
		image_,
		gender,
		Q_submit,
		L_LitterID,
		BTN_submit,
	} = language;

	let litters_id = [];
	litters.map((element) =>
		litters_id.push({ label_: element.id, value: element.id })
	);

	let races_ = [];
	race.values.map((element) =>
		races_.push({ label_: element, value: element })
	);

	function validateRabbitID(rabbitID) {
		if (rabbitID !== "" && rabbitID !== null && rabbitID !== undefined) {
			rabbits.filter(({ id, status: { active } }) =>
				`${id}`.toLowerCase().includes(`${rabbitID}`.toLowerCase()) && active
					? errorAlert("id-already-exists")
					: true
			);
		}
	}

	function handleImageChange(event) {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	}

	function handleSubmit(document) {
		Swal.fire({
			icon: "info",
			showCancelButton: true,
			text: Q_submit[0],
		}).then(
			async (res) =>
				res &&
				(await addRabbitData(document).then(() =>
					Swal.fire({
						text: Q_submit[3],
						icon: "success",
					}).then(() => {
						refreshData();
						//navigate(`/rabbit/${document.id}`);
						navigate("/rabbitList");
					})
				))
		);
	}

	function Racee({ index }) {
		return (
			<div>
				<input
					required
					name="numerator"
					type="number"
					min="-100"
					max="100"
					pattern="^[0-9]+"
				/>
				<hr />
				<input
					required
					name="denominator"
					type="number"
					max="100"
					min="1"
					pattern="^[0-9]+"
				/>
				<Lists
					required
					name="race"
					options={races_}
					placeholder={races_[index].value}
					defaultValue={races_[index].value}
				/>
			</div>
		);
	}

	useEffect(() => {
		document.getElementsByName("addRisessBTN")[0]?.click();
	}, []);

	return (
		<form
			className={st.panelNatural}
			onSubmit={(event) => {
				event.preventDefault();
				const fecha = new Date();
				const selectedGender = document.querySelector(
					'input[name="gender"]:checked'
				).value;
				let racesAdded = [];
				for (let index = 0; index < addRaces.length; index++) {
					racesAdded.push({
						name: event.target.elements.race[index]?.value,
						percentage: `${event.target.elements.numerator[index]?.value}/${event.target.elements.denominator[index]?.value}`,
					});
				}
				handleSubmit({
					id: event.target.elements.id.value,
					litter: "false",
					isFemale: selectedGender === "true" ? true : false,
					origin: place,
					status: {
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
							name: "Nacimiento",
						},
						weaning: {
							weight: "000",
							finish: false,
							name: "Destete",
							date: "00-00-00",
						},
						fattening: {
							weight: "000",
							finish: false,
							name: "Engorde",
							date: "00-00-00",
						},
					},
				});
			}}>
			<section className={st.image} title="image_section">
				<input
					id="image"
					type="file"
					name="image"
					onChange={handleImageChange}
				/>
				<label htmlFor="image" style={{ backgroundImage: `url(${image})` }}>
					{image === null && image_}
				</label>
				<hr />
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
									<Racee index={addRaces.length} /> <hr />
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
	);
}

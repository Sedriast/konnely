import { useEffect, useState } from "react";
import st from "../addLitter.module.css";
import { Link } from "react-router-dom";
import { Cards } from "../../../RabbitList/Cards";
import { Lists } from "../../../Fragments/Lists";
import { Sales } from "../Sales";

export function UI({ language, femaleBunnie, rabbits_, litters_ }) {
	const [gazapos, setGazapos] = useState(0);
	const [malesB, setMalesB] = useState([]);
	const {
		labels: {
			id,
			ride,
			sell,
			date,
			male,
			dead,
			males,
			alive,
			sales_,
			partum,
			female,
			females,
			natural,
			weaning,
			addMales,
			isFemale,
			palpation,
			prepartum,
			artificial,
			deletemales,
			homogenized,
			averangeWeight,
		},
		buttons: { back, submit },
		cards,
		sales,
	} = language;

	// this use effect is to activate the first stage input when the component is mounted
	useEffect(() => {
		document.getElementsByName("observerRide")[0]?.click();
		document.getElementsByName("add_males_btn")[0]?.click();
	}, []);

	return (
		<>
			<Link className="BTN_back" to="/vitae">
				{back}
			</Link>
			<form className={st.panelLitter} onSubmit={() => {}}>
				<section>
					<label title="id_label">
						{id}
						<h2>{litters_.length + 1}</h2>
					</label>
				</section>
				<div>
					<label title="rideStage_label">{ride}</label>
					<hr />
					<section>
						<label title="rideFemale_label">{female}</label>
						<Cards language={cards} rabbit={femaleBunnie} setRabbit={false} />
						<label title="rideDate_label">
							{date}
							<input required type="date" name="rideDate" />
						</label>

						<section>
							<label>
								{male}
								{malesB.map((element) => element)}
							</label>

							<div>
								{malesB.length < rabbits_.length && (
									<button
										type="button"
										title={addMales}
										name="add_males_btn"
										onClick={() =>
											setMalesB([
												...malesB,
												<Lists
													name="males"
													required={true}
													options={rabbits_}
													key={malesB.length}
												/>,
											])
										}>
										{addMales}
									</button>
								)}
								{malesB.length > 1 && (
									<button
										type="button"
										title={deletemales}
										name="delete_males_btn"
										onClick={() => {
											const newMales = [...malesB];
											newMales.pop();
											setMalesB(newMales);
										}}>
										{deletemales}
									</button>
								)}
							</div>
						</section>

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
									value={false}
									name="isNatural"
									id="artificial"
								/>
								<label htmlFor="artificial">{artificial}</label>
							</section>
						</label>
					</section>
				</div>

				<div>
					<label title="palpationStage_label">{palpation}</label>
					<hr />
					<section>
						<label title="palpationDate_label">
							{date}
							<input required type="date" name="palpationDate" />
						</label>
					</section>
				</div>

				<div>
					<label title="prepartumStage_label">{prepartum}</label>
					<hr />
					<section>
						<label title="prepartumDate_label">
							{date}
							<input required type="date" name="prepatumDate" />
						</label>
					</section>
				</div>

				<div>
					<label title="partumStage_label">{partum}</label>
					<hr />
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
				</div>

				<div>
					<label title="weaningStage_label">{weaning}</label>
					<hr />
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
								name="weaningAverangeWeight"
							/>
						</label>
						<label title="weaningMales_label">
							{males}
							<input
								required
								placeholder={males}
								type="number"
								inputMode="numeric"
								name="weaningMales"
								onBlur={(event) => {
									setGazapos(parseInt(event.target.value) + gazapos);
								}}
							/>
						</label>
						<label title="weaningFemales_label">
							{females}
							<input
								required
								placeholder={females}
								type="number"
								inputMode="numeric"
								name="weaningFemales"
								onBlur={(event) => {
									setGazapos(parseInt(event.target.value) + gazapos);
								}}
							/>
						</label>
						<label title="weaningFemales_label">
							{dead}
							<input
								required
								placeholder={dead}
								type="number"
								inputMode="numeric"
								name="weaningDead"
							/>
						</label>
					</section>
				</div>
				<div>
					<label title="rideStage_label">{sell}</label>
					<hr />
					<section>
						{sales_}
						<Sales language={sales} gazapos={gazapos} />
					</section>
				</div>
				<section>
					<button type="submit">{submit}</button>
				</section>
			</form>
		</>
	);
}

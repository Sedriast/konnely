import { useNavigate } from "react-router-dom";
import { addUpdateRabbits } from "../../../hooks/firebase/functions/AddInformation";
import {
	useAuth,
	useRabbits,
	errorAlert,
	yesNotAlert,
} from "../../../hooks/useContexts";
import { Timestamp } from "firebase/firestore";

import { UI } from "./UI";
import { filters_keys } from "../../../constants/keys";

export function AddRabbit({ language, litter }) {
	const { rabbits_, setFilter } = useRabbits();
	const navigate = useNavigate();
	const { user } = useAuth();

	function validateRabbitID(rabbitID) {
		if (!rabbitID) {
			errorAlert("id-invalid");
			return;
		}
		const doesRabbitIDExist = rabbits_.some(
			({ id, states: { isAlive } }) => id === rabbitID && isAlive
		);

		if (doesRabbitIDExist) {
			document.getElementsByName("id")[0].value = "";
			errorAlert("id-already-exists");
		}
	}

	function races(long, numerators, denominators, racesNames) {
		let racesAdded = [];
		if (long >= 1) {
			for (let index = 0; index < long; index++) {
				racesAdded.push({
					name: racesNames[index]?.value,
					value: parseFloat(
						(
							(parseFloat(numerators[index]?.value) /
								parseFloat(denominators[index]?.value)) *
							100
						).toFixed(3)
					),
				});
			}
		} else {
			racesAdded.push({
				name: racesNames.value,
				value:
					(parseFloat(numerators.value) / parseFloat(denominators.value)) * 100,
			});
		}
		return racesAdded;
	}

	function hendleSubmit({ elements, races, gender, image }) {
		const date = new Date();

		yesNotAlert(language.alert, async ({ isConfirmed }) => {
			const rabbit = {
				id: parseInt(elements.id.value),
				isFemale: gender,
				pictureURL: image,
				userSignature: {
					name: user.displayName,
					uid: user.uid,
					date: Timestamp.fromDate(date),
				},
				states: {
					transferred: {
						status: litter ? false : true,
						dad_id: litter ? "none" : parseInt(elements.weaningMales.value),
						mom_id: litter ? "none" : parseInt(elements.weaningFemales.value),
						date: litter
							? "none"
							: Timestamp.fromDate(new Date(elements.transference_date.value)),
						origin: litter ? language.defaultOrigin : elements.origin.value,
					},
					changeDate: Timestamp.fromDate(date),
					isAlive: true,
				},
				lifecycle: {
					birth: {
						litter: litter ? litter.id : 0,
						race: races,
					},
					weaning: {
						weight: litter
							? litter.stages.weaning.averageWeight
							: parseFloat(elements.weaningAverageWeight.value),
						date: litter
							? litter.stages.weaning.date
							: Timestamp.fromDate(new Date(elements.weaning_date.value)),
					},
					currentWeight: parseFloat(elements.currentAverageWeight.value),
				},
			};
			isConfirmed &&
				(await addUpdateRabbits(parseInt(elements.id.value), rabbit).then(
					() => {
						setFilter([filters_keys.UPLOAD_RABBIT, rabbit]);
						navigate("/litter");
					}
				));
		});
	}

	return (
		<UI
			litter={litter}
			racesFN={races}
			language={language}
			filterFN={setFilter}
			submitFN={hendleSubmit}
			validateIDFN={validateRabbitID}
		/>
	);
}

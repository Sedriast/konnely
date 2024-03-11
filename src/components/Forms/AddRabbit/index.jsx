import { addImageAndInfo } from "../../../hooks/firebase/functions/AddInformation";
import { errorAlert, useAuth, useRabbits } from "../../../hooks/useContexts";

import { UI } from "./UI";

export function AddRabbit({ language, litter }) {
	const { rabbits_ } = useRabbits();
	const { user } = useAuth();

	function validateRabbitID(rabbitID) {
		if (rabbitID.length > 0 && rabbitID !== null && rabbitID !== undefined) {
			if (!rabbitID) {
				throw new Error("Invalid rabbit ID");
			}

			const doesRabbitIDExist = rabbits_?.some(
				({ id, state: { isAlive } }) =>
					id.toLowerCase().includes(rabbitID.toLowerCase()) && isAlive
			);

			if (doesRabbitIDExist) {
				document.getElementsByName("id")[0].value = "";
				errorAlert("id-already-exists");
			} else {
				return true;
			}
		} else {
			errorAlert("id-invalid");
		}
	}

	function races(long, numerators, denominators, racesNames) {
		let racesAdded = [];
		if (long >= 1) {
			for (let index = 0; index < long; index++) {
				racesAdded.push({
					name: racesNames[index]?.value,
					value: (
						(parseFloat(numerators[index]?.value) /
							parseFloat(denominators[index]?.value)) *
						100
					).toFixed(3),
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
		const formattedDate = `${date.getFullYear()}-${String(
			date.getMonth() + 1
		).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

		addImageAndInfo({
			id: parseInt(elements.id.value),
			isFemale: gender,
			pictureURL: image,
			userSignature: { name: user.displayName, uid: user.uid },
			states: {
				transferred: {
					status: litter ? false : true,
					dad_id: litter ? "none" : parseInt(elements.weaningMales.value),
					mom_id: litter ? "none" : parseInt(elements.weaningFemales.value),
					date: litter ? "none" : elements.transference_date.value,
					origin: litter ? language.defaultOrigin : elements.origin.value,
				},
				changeDate: formattedDate,
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
						: elements.weaning_date.value,
				},
				currentWeight: parseFloat(elements.currentAverageWeight.value),
			},
		});
	}
	return (
		<UI
			litter={litter}
			racesFN={races}
			language={language}
			submitFN={hendleSubmit}
			validateIDFN={validateRabbitID}
		/>
	);
}

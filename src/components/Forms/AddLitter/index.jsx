import { addUpdateLitters } from "../../../hooks/firebase/functions/AddInformation";
import { useRabbits, yesNotAlert } from "../../../hooks/useContexts";
import { Timestamp } from "firebase/firestore";

import { UI } from "./UI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filters_keys } from "../../../constants/keys";

export function AddLitter({ language, user }) {
	const { litters_, rabbits_, rabbit, setFilter } = useRabbits();
	const [idCreated, setIdCreated] = useState(0);
	const navigate = useNavigate();

	function sales(long, ids, prices, weights, dates) {
		let salesAdded = [];
		if (long >= 1) {
			for (let index = 0; index < long; index++) {
				salesAdded.push({
					id: parseFloat(ids[index]?.value),
					price: parseFloat(prices[index]?.value),
					weight: parseFloat(weights[index]?.value),
					date: Timestamp.fromDate(new Date(dates[index]?.value)),
				});
			}
		} else {
			salesAdded.push({
				id: parseFloat(ids.value),
				price: parseFloat(prices.value),
				weight: parseFloat(weights.value),
				date: Timestamp.fromDate(new Date(dates.value)),
			});
		}
		return salesAdded;
	}

	function malesFN(malesIDs) {
		let malesAdded = [];
		if (malesIDs instanceof NodeList) {
			for (let index = 0; index < malesIDs.length; index++) {
				malesAdded.push(parseFloat(malesIDs[index].value));
			}
		} else if (malesIDs instanceof HTMLSelectElement) {
			malesAdded.push(parseFloat(malesIDs.value));
		}
		return malesAdded;
	}

	function handleSubmit({ elements, typeInput }) {
		const date_ = new Date();

		yesNotAlert(language.alert, async ({ isConfirmed }) => {
			const litterS = {
				id: idCreated,
				stages: {
					ride: {
						male: malesFN(elements.males),
						female: rabbit.id,
						date_r: Timestamp.fromDate(new Date(elements.rideDate.value)),
						isNatural: typeInput === "true" ? true : false,
					},
					palpation: {
						date_pal: Timestamp.fromDate(
							new Date(elements.palpationDate.value)
						),
					},
					partum: {
						date_par: Timestamp.fromDate(new Date(elements.partumDate.value)),
						dead: parseFloat(elements.patumDead.value),
						alive: parseFloat(elements.patumAlive.value),
						homogenized: parseFloat(elements.patumHomonogenized.value),
					},
					prepartum: {
						date_pr: Timestamp.fromDate(new Date(elements.prepartumDate.value)),
					},
					weaning: {
						date_w: Timestamp.fromDate(new Date(elements.weaningDate.value)),
						deads: parseFloat(elements.weaningDead.value),
						males: parseFloat(elements.weaningMales.value),
						females: parseFloat(elements.weaningFemales.value),
						averageWeight: parseFloat(elements.weaningAverageWeight.value),
					},
					sales: sales(
						elements.salesID.length,
						elements.salesID,
						elements.salesPrice,
						elements.salesWeight,
						elements.salesDate
					),
				},
				userSignature: {
					uid: user.uid,
					name: user.displayName,
					date: Timestamp.fromDate(date_),
				},
			};

			isConfirmed &&
				(await addUpdateLitters(idCreated, litterS).then(() => {
					setFilter([filters_keys.UPLOAD_LITTER, litterS]);
					navigate("/litterlist");
				}));
		});
	}

	useEffect(() => {
		setIdCreated(litters_.length + rabbit.id + Math.floor(Math.random() * 999));
		// eslint-disable-next-line
	}, [litters_]);

	return (
		<UI
			language={language}
			rabbits_={rabbits_}
			idCreated={idCreated}
			femaleBunnie={rabbit}
			submitFN={handleSubmit}
		/>
	);
}

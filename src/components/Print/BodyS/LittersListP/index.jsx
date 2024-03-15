import st from "../../print.module.css";

export function LittersListP({ language, litterRecord }) {
	const {
		titles: {
			palpationDate,
			prepartumDate,
			ride: { date_r, format_r, males },
			weaning: { date_w, animals_w, format_w, weight_w },
			partum: { date_p, predictedDate, format_p, animals_p, weight_p },
		},
	} = language;

	function formatDates(date) {
		let day = String(date?.getDate()).padStart(2, "0");
		let month = String(date?.getMonth() + 1).padStart(2, "0");
		let year = date?.getFullYear();

		return `${month}-${day}-${year}`;
	}

	function stimatedPartumDate(date) {
		date?.setDate(date.getDate() + 30);

		let day = String(date?.getDate()).padStart(2, "0");
		let month = String(date?.getMonth() + 1).padStart(2, "0");
		let year = date?.getFullYear();

		return `${month}-${day}-${year}`;
	}

	return (
		<div className={st.litterList}>
			<span>
				<label>
					<h2>{date_r}</h2>
					<h2>{format_r[0]}</h2>
					<h2>{format_r[1]}</h2>
					<h2>{format_r[2]}</h2>
				</label>
				<h2>{males}</h2>
				<h2>{palpationDate}</h2>
				<h2>{predictedDate}</h2>
				<h2>{prepartumDate}</h2>
				<h2>{date_p}</h2>
				<label>
					<h2>{animals_p}</h2>
					<h2>{format_p[0]}</h2>
					<h2>{format_p[0]}</h2>
				</label>
				<h2>{weight_p}</h2>
				<h2>{date_w}</h2>
				<label>
					<h2>{animals_w}</h2>
					<h2>{format_w[0]}</h2>
					<h2>{format_w[1]}</h2>
				</label>
				<h2>{weight_w}</h2>
			</span>
			{litterRecord.map((litter, index) => {
				const {
					stages: {
						prepartum: { date_pr },
						ride: { male, date_r },
						palpation: { date_pal },
						partum: { dead, alive, date_par },
						weaning: { males, date_w, females, averageWeight },
					},
				} = litter;

				return (
					<span key={index}>
						<p>{formatDates(date_r.toDate())}</p>
						<p>{male}</p>
						<p>{formatDates(date_pal.toDate())}</p>
						<p>{stimatedPartumDate(date_par.toDate())}</p>
						<p>{formatDates(date_pr.toDate())}</p>
						<p>{formatDates(date_par.toDate())}</p>
						<label>
							<p>{alive}</p>
							<p>{dead}</p>
						</label>
						<p>〰〰〰〰〰</p>
						<p>{formatDates(date_w.toDate())}</p>
						<label>
							<p>{females}</p>
							<p>{males}</p>
						</label>
						<p>{averageWeight}</p>
					</span>
				);
			})}
		</div>
	);
}

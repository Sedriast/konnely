import { useRabbits } from "../../hooks/useContexts";
import st from "./litter.module.css";

export function Litter({ language }) {
	const { litter } = useRabbits();
	const {
		titles: {
			id_t,
			ride_t,
			sales_t,
			partum_t,
			stages_t,
			weaning_t,
			palpaton_t,
			prepartum_t,
		},
		labels: {
			id_l,
			date,
			dead,
			male,
			males,
			alive,
			female,
			weight,
			price_l,
			females,
			natural,
			artificial,
			homogenized,
		},
		buttons: { back_b, plus_b },
	} = language;
	const {
		id,
		stages: { ride, palpaton, prepartum, partum, weaning, sales },
	} = litter;
	return (
		<>
			<button className="BTN_back">{back_b}</button>
			<button className={st.plus}>{plus_b}</button>
			<section>
				<h1>{`${id_t}: ${id}`}</h1>

				<hr />

				<h1>{stages_t}</h1>

				<span>
					<h2>{ride_t}</h2>
					<div>
						<h3>{date}</h3>
						〰〰〰〰〰〰〰〰
						<h3>{female}</h3>
						<h3>{male}</h3>
					</div>
					<div>
						<p>{ride.date_r}</p>
						〰〰〰〰〰〰〰〰
						<p>{ride.female}</p>
						<p>{ride.male}</p>
					</div>
					<p>{ride.isNatural ? natural : artificial}</p>
				</span>
				<span>
					<h2>{palpaton_t}</h2>
					<div>
						<h3>{date}</h3>
					</div>
					<div>
						<p>{palpaton.date_pal}</p>
					</div>
				</span>
				<span>
					<h2>{prepartum_t}</h2>
					<div>
						<h3>{date}</h3>
					</div>
					<div>
						<p>{prepartum.date_pr}</p>
					</div>
				</span>
				<span>
					<h2>{partum_t}</h2>
					<div>
						<h3>{date}</h3>
						〰〰〰〰〰〰〰〰
						<h3>{alive}</h3>
						<h3>{dead}</h3>
						<h3>{homogenized}</h3>
					</div>
					<div>
						<p>{partum.date_par}</p>
						〰〰〰〰〰〰〰〰
						<p>{partum.alive}</p>
						<p>{partum.dead}</p>
						<p>{partum.homogenized}</p>
					</div>
				</span>
				<span>
					<h2>{weaning_t}</h2>
					<div>
						<h3>{date}</h3>
						〰〰〰〰〰〰〰〰
						<h3>{dead}</h3>
						<h3>{females}</h3>
						<h3>{males}</h3>
						<h3>{weight}</h3>
					</div>
					<div>
						<p>{weaning.date_w}</p>
						〰〰〰〰〰〰〰〰
						<p>{weaning.deads}</p>
						<p>{weaning.females}</p>
						<p>{weaning.males}</p>
						<p>{weaning.averageWeight}</p>
					</div>
				</span>
				<span>
					<h2>{sales_t}</h2>
					{sales.map((sale) => (
						<>
							<div>
								<h3>{id_l}</h3>
								<h3>{price_l}</h3>
								<h3>{weight}</h3>
								<h3>{date}</h3>
							</div>
							<div>
								<p>{sale.id}</p>
								<p>{sale.price}</p>
								<p>{sale.weight}</p>
								<p>{sale.date}</p>
							</div>
							〰〰〰〰〰〰〰〰
						</>
					))}
				</span>
			</section>
		</>
	);
}

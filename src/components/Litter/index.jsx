import { Fragment } from "react";
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
		stages: { ride, palpation, prepartum, partum, weaning, sales },
	} = litter;
	return (
		<>
			<button className="BTN_back">{back_b}</button>
			<button className={st.plus}>{plus_b}</button>
			<section className={st.litter_panel}>
				<div>
					<h1>{`${id_t}: ${id}`}</h1>
					<hr />
					<h1>{stages_t}</h1>
				</div>
				<span>
					<h2>{ride_t}</h2>
					<div>
						<h3>{date}</h3>
						〰〰〰〰〰〰〰〰
						<h3>{female}</h3>
						<h3>{male}</h3>
					</div>
					<div>
						<p>
							{ride.date_r.toDate().toLocaleDateString("es-ES", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</p>
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
						<p>
							{palpation.date_pal?.toDate().toLocaleDateString("es-ES", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</p>
					</div>
				</span>
				<span>
					<h2>{prepartum_t}</h2>
					<div>
						<h3>{date}</h3>
					</div>
					<div>
						<p>
							{prepartum?.date_pr.toDate().toLocaleDateString("es-ES", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</p>
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
						<p>
							{partum.date_par.toDate().toLocaleDateString("es-ES", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</p>
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
						<p>
							{weaning.date_w.toDate().toLocaleDateString("es-ES", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</p>
						〰〰〰〰〰〰〰〰
						<p>{weaning.deads}</p>
						<p>{weaning.females}</p>
						<p>{weaning.males}</p>
						<p>{weaning.averageWeight}</p>
					</div>
				</span>
				<span>
					<h2>{sales_t}</h2>
					<table>
						<thead>
							<tr>
								<th>{id_l}</th>
								<th>{weight}</th>
								<th>{price_l}</th>
								<th>{date}</th>
							</tr>
						</thead>
						<tbody>
							{sales.map((sale, index) => (
								<Fragment key={index}>
									<tr>
										<td>{sale.id}</td>
										<td>{sale.weight}</td>
										<td>{`${sale.price} COP`}</td>
										<td>
											{sale.date.toDate().toLocaleDateString("es-ES", {
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											})}
										</td>
									</tr>
								</Fragment>
							))}
						</tbody>
					</table>
				</span>
			</section>
		</>
	);
}

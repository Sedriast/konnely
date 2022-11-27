import st from "./Head.module.css";

import s from "../../../../../../img/LogoUDEC.png";

export function Head({ marc, proces, title, code, version, dateValidity }) {
	const d = new Date().toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const cm = (
		<div className={st.headContainer}>
			<div className={st.logoUDEC}>
				<img src={s} alt='' />
			</div>
			<table>
				<tbody className={st.metaData}>
					<th className={st.metaCenter}>
						<tr>
							<th>{marc}</th>
						</tr>
						<tr>
							<th>{proces}</th>
						</tr>
						<tr>
							<th>{title}</th>
						</tr>
					</th>
					<th className={st.metaEnd}>
						<tr>
							<th>CÓDIGO: {code}</th>
						</tr>
						<tr>
							<th>VERSIÓN: {version}</th>
						</tr>
						<tr>
							<th>VIGENCIA: {dateValidity}</th>
						</tr>
						<tr>
							<th>FECHA: {d}</th>
						</tr>
					</th>
				</tbody>
			</table>
		</div>
	);

	return cm;
}

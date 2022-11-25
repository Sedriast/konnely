import st from "./Foot.module.css";

export function Foot() {
	const cm = (
		<div className={st.foot}>
			<table>
				<tfoot>
					<tr>
						<td>Calle 6 N° 9-80 Ubate – Cundinamarca </td>
					</tr>
					<tr>
						<td>Teléfono: (091) 855 3055/3056</td>
					</tr>
					<tr>
						<td>Ext.127 Línea Gratuita 018000180414</td>
					</tr>
					<tr>
						<td>
							<a href='www.ucundinamarca.edu.co'>www.ucundinamarca.edu.co </a> E-mail:
							<a href='info@ucundinamarca.edu.co'>info@ucundinamarca.edu.co</a>
						</td>
					</tr>
					<tr>
						<td>NIT: 890.680.062-2</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
	return cm;
}

import st from "./Body.module.css";
import { Data } from "./components/0_Data/Data";
import { basicData } from "../../../../../0-GeneralComp/0-StaticData/dataProv";
import { TableOne } from "./components/1_TableOne/TableOne";
import { TableTwo } from "./components/1_TableTwo/TableTwo";
import { TableThree } from "./components/1_TableThree/TableThree";
import { TableFour } from "./components/1_TableFour/TableFour";

export function Body({ cicles, trataments }) {
	const edad = (Date.now() - Date.parse(basicData?.info?.nacimiento)) * (3.8 * Math.pow(10, -10));
	const dataCicle = (cicle) => {
		const data = [
			cicle?.stages[0]?.date,
			cicle?.stages[0]?.male,
			cicle?.stages[1]?.date,
			cicle?.stages[3]?.approximateDate,
			cicle?.stages[2]?.date,
			cicle?.stages[3]?.date,
			cicle?.stages[3]?.lives,
			cicle?.stages[3]?.deaths,
			"--------",
			cicle?.stages[4]?.date,
			cicle?.stages[4]?.FemaleHatchlings,
			cicle?.stages[4]?.MaleHatchlings,
			cicle?.stages[4]?.LitterWeight,
		];
		return data;
	};

	const dataTrataments = (tratament) => {
		const data = [
			tratament?.date,
			tratament?.signs,
			tratament?.diagnosis,
			tratament?.route,
			tratament?.responsible,
			tratament?.result,
			tratament?.professional,
		];
		return data;
	};
	const dateborn = { year: "0000", month: "00", day: "00", born: basicData?.info?.nacimiento };
	const cm = (
		<div className={st.container}>
			<TableOne dateBorn={dateborn} race={basicData?.info?.raza} rabbitId={basicData?.info?.id} />
			<TableTwo
				father={basicData?.info?.padre}
				mother={basicData?.info?.madre}
				grandMotherF=''
				grandFatherF=''
				grandMotherM=''
				grandFatherM=''
			/>
			<TableThree data1={basicData?.info?.weigth} />
			<TableFour ageDestete='0000 00 00' criterion='Translado dela unidad agroambiental la esperanza ' />

			<div className={st.complete}>
				<table className={st.tableTop}>
					<thead>
						<th>Fecha servicio</th>
						<th>Placa macho</th>
						<th>
							Fecha detección
							<br />
							de preñes
						</th>
						<th>
							Fecha
							<br />
							posible parto
						</th>
						<th>
							Fecha
							<br />
							atención de parto
						</th>
						<th>
							Fecha real
							<br />
							de parto
						</th>
						<th>Crias vivas</th>
						<th>Crias muertas</th>
						<th>Peso nacimiento (gr)</th>
						<th>Fecha destete</th>
						<th>Crias hembras</th>
						<th>Crias machos</th>
						<th>Peso destete</th>
					</thead>
					<tbody>
						{cicles?.map((e) => {
							if (e.state === false) return <Data data={dataCicle(e)} />;
							return <></>;
						})}
					</tbody>
				</table>
			</div>

			{trataments?.length > 0 && (
				<div className={st.carac}>
					<table>
						<thead>
							<tr>
								<th>Fecha</th>
								<th>sintomas,signos,vacunas </th>
								<th>Diagnostico</th>
								<th>Medicamento</th>
								<th>Dosis</th>
								<th>Redultados</th>
								<th>Nombre del profecional</th>
							</tr>
						</thead>
						<tbody>
							{trataments?.map((e) => {
								if (e.state !== "Inactivo") return <Data data={dataTrataments(e)} />;
								return <></>;
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
	return cm;
}

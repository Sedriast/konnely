import st from "./Body.module.css";
import { basicData } from "../../../../../0-GeneralComp/0-StaticData/dataProv";
import { TableOne } from "./components/1_TableOne/TableOne";
import { TableTwo } from "./components/1_TableTwo/TableTwo";
import { TableThree } from "./components/1_TableThree/TableThree";
import { TableFour } from "./components/1_TableFour/TableFour";
import { TableReproCicle } from "./components/2_TableReproductiveCicle/TableReproCicle";
import { TableTrataments } from "./components/3_TableTrataments/TableTrataments";

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
	if (dataCicle === null) {
		console.log("LOL");
	}

	const dateborn = { year: "0000", month: "00", day: "00", born: basicData?.info?.nacimiento };

	const cm = (
		<div className={st.container}>
			<TableOne dateBorn={dateborn} race={basicData?.info?.raza} rabbitId={basicData?.info?.id} />
			<TableTwo
				father={basicData?.info?.padre}
				mother={basicData?.info?.madre}
				grandMotherF='NaN'
				grandFatherF='NaN'
				grandMotherM='NaN'
				grandFatherM='NaN'
			/>
			<TableThree data1={basicData?.info?.weigth} />
			<TableFour ageDestete={edad} criterion='Translado dela unidad agroambiental la esperanza ' />

			<TableReproCicle cicles={cicles} />

			<TableTrataments trataments={trataments} />
		</div>
	);
	return cm;
}

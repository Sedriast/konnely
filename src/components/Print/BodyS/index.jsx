import { TableFive } from "./TableFive";
import { TableFour } from "./TableFour";
import { TableOne } from "./TableOne";
import { TableThree } from "./TableThree";
import { TableTwo } from "./TableTwo";

export function BodyS({
	st,
	language,
	table_one,
	table_two,
	table_four,
	table_five,
	table_three,
}) {
	return (
		<section className={st.bodyS}>
			<TableOne language={language.bodyS.table_one} table_one={table_one} />
			<TableTwo language={language.bodyS.table_two} table_two={table_two} />
			<TableThree
				language={language.bodyS.table_three}
				table_three={table_three}
			/>
			<TableFour language={language.bodyS.table_four} table_four={table_four} />
			<TableFive language={language.bodyS.table_five} table_five={table_five} />
		</section>
	);
}

import { LittersListP } from "./LittersListP";
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
	table_three,
	litterRecord,
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
			<LittersListP
				litterRecord={litterRecord}
				language={language.bodyS.litterRecord}
			/>
		</section>
	);
}

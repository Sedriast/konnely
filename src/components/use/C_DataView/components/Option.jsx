import { Healt } from "./Healt/Healt";
import { Semen } from "./Semen/Semen";
import { Vitae } from "./Vitae/Vitae";

export function Option({ op, rabbit }) {
	switch (op) {
		case 0:
			return <Vitae rabbit={rabbit} />;
		case 1:
			return <Healt />;
		case 3:
			return <Semen />;
		default:
			break;
	}
}

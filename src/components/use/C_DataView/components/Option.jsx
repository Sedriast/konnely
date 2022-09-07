import { Healt } from './Healt/Healt';
import { Vitae } from './Vitae/Vitae';

export function Option({ op, data1 }) {
	switch (op) {
		case false:
			return <Vitae />;
		case true:
			return <Healt />;
		default:
			break;
	}
}

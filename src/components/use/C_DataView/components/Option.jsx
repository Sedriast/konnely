import { Vitae } from './Vitae/Vitae';

export function Option({ op, rabbitData, rabbitHealt }) {
	switch (op) {
		case 0:
			return <Vitae />;
		case 1:
			return <></>;
		default:
			break;
	}
}

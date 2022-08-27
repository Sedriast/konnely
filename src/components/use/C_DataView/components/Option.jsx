import { Healt } from './Healt/Healt';
import { Vitae } from './Vitae/Vitae';
import { tratamientos } from '../scripts/dataProv';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <Vitae />;
		case 1:
			return <Healt trataments={tratamientos} />;
		default:
			break;
	}
}

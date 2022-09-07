import { Healt } from './Healt/Healt';
import { Vitae } from './Vitae/Vitae';
import { tratamientos } from '../scripts/dataProv';

export function Option({ op }) {
	switch (op) {
		case false:
			return <Vitae />;
		case true:
			return <Healt trataments={tratamientos} />;
		default:
			break;
	}
}

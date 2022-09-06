import { Healt } from './Healt/Healt';
import { Vitae } from './Vitae/Vitae';
import { tratamientos } from '../scripts/dataProv';

export function Option({ op }) {
	switch (op) {
		case true:
			return <Vitae />;
		case false:
			return <Healt trataments={tratamientos} />;
		default:
			break;
	}
}

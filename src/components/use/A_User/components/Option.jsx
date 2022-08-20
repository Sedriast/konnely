import { ListUsers } from './ListUsers';
import { Themes } from './Themes';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <ListUsers />;
		case 1:
			return <Themes />;
		default:
			break;
	}
}

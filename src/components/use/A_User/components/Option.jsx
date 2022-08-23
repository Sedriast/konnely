import { ListUsers } from './ListUsers/ListUsers';
import { Themes } from './Themes/Themes';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <Themes />;
		case 1:
			return <ListUsers />;
		default:
			break;
	}
}

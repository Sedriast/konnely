import { ListUsers } from './ListUsers';
import { Preferences } from './Preferences';
import { Themes } from './Themes';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <Preferences />;
		case 1:
			return <ListUsers />;
		case 2:
			return <Themes />;
		default:
			break;
	}
}

import { ListUsers } from './ListUsers/ListUsers';
import { UserData } from './UserData/UserData';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <UserData />;
		case 1:
			return <ListUsers />;
		default:
			break;
	}
}

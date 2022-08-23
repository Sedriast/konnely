import { EditRabbitData } from '../../F-EditRabbitData/EditRabbitData';
import { List } from './List';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <List />;
		case 1:
			return <EditRabbitData />;
		default:
			break;
	}
}

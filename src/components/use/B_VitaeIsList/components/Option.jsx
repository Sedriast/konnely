import { SendRabbitData } from './F-SendRabbitData/SendRabbitData';
import { List } from './List';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <List />;
		case 1:
			return <SendRabbitData />;
		default:
			break;
	}
}

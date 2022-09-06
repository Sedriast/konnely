import { SendRabbitData } from './FormSend/SendRabbitData';
import { List } from './List/List';

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

import { Form } from './Form/Form';
import { List } from './List';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <List />;
		case 1:
			return <Form />;
		default:
			break;
	}
}

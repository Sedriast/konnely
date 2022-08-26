import { Login } from './Login';
import { Register } from './Register';

export function Option({ op }) {
	switch (op) {
		case 0:
			return <Login />;
		case 1:
			return <Register />;
		default:
			break;
	}
}

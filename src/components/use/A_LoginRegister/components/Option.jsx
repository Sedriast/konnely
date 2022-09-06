import { Login } from './Login/Login';
import { Register } from './Register/Register';

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

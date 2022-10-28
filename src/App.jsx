import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';

export function App() {
	return (
		<>
			<AuthProvider>
				<Layout />
			</AuthProvider>
		</>
	);
}

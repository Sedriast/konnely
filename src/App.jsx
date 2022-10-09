import st from './App.module.css';

import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';

export function App() {
	return (
		<>
			<AuthProvider>
				<Layout clsName={st.Layout} />
			</AuthProvider>
		</>
	);
}

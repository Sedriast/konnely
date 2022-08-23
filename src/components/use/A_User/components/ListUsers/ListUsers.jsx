import { UserCards } from './components/UserCards';
import st from './styles/ListUsers.module.css';

export function ListUsers() {
	return (
		<>
			<div className={st.container}>
				<div className={st.panelList}>
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
					<UserCards userId="1076669813" userName="Sedriast" userEmail="sedriast@gmail.com" />
				</div>
			</div>
		</>
	);
}

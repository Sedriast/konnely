import st from './styles/ListUsers.module.css';
import { UserCards } from './components/UserCards';
import { SearchAll } from '../../../../firebase/funtions/SearchAll';

export function ListUsers() {
	const data = SearchAll('usuarios').props.children;
	return (
		<>
			<div className={st.panelSearchBar}>
				<input placeholder="Buscar" />
				<button type="submit" className={st.btnSearch} onClick={() => {}}>
					🔎
				</button>
			</div>
			<div className={st.container}>
				<div className={st.panelList}>
					{data[0].uid !== null && (
						<>
							{data.map((users, index) => (
								<UserCards key={index} userName={users.user} userEmail={users.email} />
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
}

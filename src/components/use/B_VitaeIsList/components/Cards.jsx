import { Link } from 'react-router-dom';
import st from '../styles/Cards.module.css';

export function Cards() {
	return (
		<>
			<Link to="/users">
				<button className={st.container}>
					<p></p>
					<img src="" alt="" />
				</button>
			</Link>
		</>
	);
}

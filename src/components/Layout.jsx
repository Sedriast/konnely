import style from './css/Layout.module.css';
import { Navbar } from './NavbarCom/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form } from './FormCom/Form';
import { ListViews} from './ListView/ListViews';
import { Login } from './Login/Login';

export function Layout(){
	return(
		<div className={style.principalPanel} >
			<Router>
				<Navbar />
				<Routes >
					<Route exact path='/form' element={<Form/>}> </Route>
					<Route exact path='/listView' element={<ListViews idImage='10dKfWHgApJ5ElbXCaOyrdguN8sac2jpA'/>}> </Route>
					<Route exact path='/login' element={<Login/>}> </Route>
				</Routes>
			</Router>
		</div>
	);
}
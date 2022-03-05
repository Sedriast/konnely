import style_L from './css/Layout/Layout.module.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './use/Menu/Navbar';
import { Customer } from './use/Customer/Customer';

export function Layout() {
	return (
	<>
		<div className={style_L.principalPanel}>
			<Router>
				<Navbar />
				<Routes >
					<Route exact path='/customer' element={<Customer />}> </Route>
				</Routes>
			</Router>
		</div>
	</>
	);
}
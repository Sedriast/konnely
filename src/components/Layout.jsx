import style from "./css/Layout.module.css";
import { Navbar } from "./NavbarCom/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./FormCom/Form";
import { ListViews } from "./ListView/ListViews";
import { Login } from "./Login/Login";
import { UserView } from "./UserView_/UserView";
import { DataView } from "./DataView/DataView";

export function Layout() {
	return (
		<div className={style.principalPanel}>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/form" element={<Form />}>
						{" "}
					</Route>
					<Route
						exact
						path="/listView"
						element={
							<ListViews idImage="10dKfWHgApJ5ElbXCaOyrdguN8sac2jpA" />
						}
					>
						{" "}
					</Route>
					<Route exact path="/login" element={<Login />}>
						{" "}
					</Route>
					<Route exact path="/user" element={<UserView />}></Route>
					<Route exact path="/data" element={<DataView />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

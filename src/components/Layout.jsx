import style_L from "../components/css/Layout/Layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./use/Menu/Navbar";
import { Customer } from "./use/Customer/Customer";
import { Form } from "./use/Form/Form";

export function Layout(props) {
	return (
		<>
			<div className={props.clsName} id="Layout">
				<div className={style_L.panel_}>
					<Router>
						<Routes>
							<Route
								exact
								path="/customer"
								element={
									<Customer clsName={style_L.customer} />
								}
							/>
							<Route
								exact
								path="/form"
								element={<Form clsName={style_L.panelF} />}
							>
								{" "}
							</Route>
						</Routes>
						<Navbar clsName={style_L.menu} />
					</Router>
				</div>
			</div>
		</>
	);
}

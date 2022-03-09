import style_L from "../components/css/Layout/Layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./use/Menu/Navbar";
import { Customer } from "./use/Customer/Customer";
import { Form } from "./use/Form/Form";
import { PanelButtons } from "./use/PanelButons/PanelButtons";
import { Login } from "./use/Login/Login";


export function Layout(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_L.panel_}>
					<Router>
						<Routes>
							<Route
								exact
								path="/"
								element={
									<Login clsName={style_L.login}/>
								}
							/>
							<Route
								exact
								path="/customer"
								element={
									<Customer clsName={style_L.customer} cl_={props.cl_} />
								}
							/>
							<Route
								exact
								path="/form"
								element={<>
											<PanelButtons clsName={style_L.panelButtons} />
											<Form clsName={style_L.form_} />
										</>}
							/>
			<Route
								exact
								path="/list"
								element={<>
											<PanelButtons clsName={style_L.panelButtons} />
											
										</>}
							/>
						</Routes>
						<Navbar clsName={style_L.menu} />
					</Router>
				</div>
			</div>
		</>
	);
}

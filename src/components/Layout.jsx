import style_L from "../components/css/Layout/Layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./use/Menu/Navbar";
import { Customer } from "./use/Customer/Customer";
import { Form } from "./use/Form/Form";
import { PanelButtons } from "./use/PanelButons/PanelButtons";
import { Login } from "./use/Login/Login";
import { List } from "./use/List/List";
import { Users } from "./use/Users/Users";


export function Layout(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_L.panel_} id='lay'>
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
									<Customer clsName={style_L.customer} />
								}
							/>
							<Route
								exact
								path="/users"
								element={
									<Users 
											clsName={style_L.users} 
											src_='https://drive.google.com/uc?export=download&id=1rmZYMQhdaMSTkGVcgD2JCKvo5ZD24QGW'
											title="Nombre"
											label="y demas cosas"
									/>
											
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
											<List clsName={style_L.list}/>
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

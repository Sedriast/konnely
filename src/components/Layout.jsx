import style_L from "../components/css/Layout/Layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./use/Menu/Navbar";
import { Customer } from "./use/Customer/Customer";
import { Form } from "./use/Form/Form";
import { PanelButtons } from "./use/PanelButons/PanelButtons";
import { Login } from "./use/Login/Login";
import { List } from "./use/List/List";
import { Users } from "./use/Users/Users";
import { Loading } from "./use/Tools/Loading";
import { Search } from "./firebase/funtions/Search";
import { useState } from "react";

export function Layout(props) {
	const [init, setInit] = useState(false);

	const st = Search("usuarios").props.children[0].datos.tema;

	const s = () => {
		document.getElementById("lay").style.setProperty("background", st);
		document
			.getElementById("lay")
			.style.setProperty("background-repeat", "no-repeat");
		document
			.getElementById("lay")
			.style.setProperty("background-size", "cover");
	};

	const changeLoad = () => {
		setInit(true);
		setTimeout(() => {
			setInit(false);
		}, 3000);
	};

	return (
		<>
			<div className={props.clsName}>
				<div className={style_L.panel_} id="lay" onLoad={s}>
					{init ? (
						<Loading clsName={style_L.loading} />
					) : (
						<Router>
							<Routes>
								<Route
									exact
									path="/test"
									element={
										<Loading
											clsName={style_L.loading}
											src_="https://drive.google.com/uc?export=download&id=13Y8ati6Sodd1r7tzlPawB2C1aH8xUCPZ"
										/>
									}
								/>
								<Route
									exact
									path="/"
									element={<Login clsName={style_L.login} />}
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
											src_="https://drive.google.com/uc?export=download&id=1E7CWChneuESSmcVQ-CpZHTMQxLwbedyi"
											title={
												Search("usuarios").props
													.children[0].datos.usuario
											}
											label="Adminitrador"
										/>
									}
								/>
								<Route
									exact
									path="/form"
									element={
										<>
											<PanelButtons
												clsName={style_L.panelButtons}
												loading_={changeLoad}
											/>
											<Form clsName={style_L.form_} />
										</>
									}
								/>
								<Route
									exact
									path="/list"
									element={
										<>
											<PanelButtons
												clsName={style_L.panelButtons}
												loading_={changeLoad}
											/>
											<List clsName={style_L.list} />
										</>
									}
								/>
							</Routes>
							<Navbar clsName={style_L.menu} />
						</Router>
					)}
				</div>
			</div>
		</>
	);
}

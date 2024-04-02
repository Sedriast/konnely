import { RabbitListProvider, useAuth } from "../../../hooks/useContexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ProtectedRoute } from "../../../hooks/ProtectedRoute";
import { language_keys } from "../../../constants/keys";
import "../app.module.css";

// import { Vitae } from "../../Vitae";
// import { Print } from "../../Print";
// import { Login } from "../../LRaccount/Login";
// import { RabbitList } from "../../RabbitList";
// import { LitterList } from "../../LitterList";
// import { AddLitter } from "../../Forms/AddLitter";
// import { AddRabbit } from "../../Forms/AddRabbit";
// import { Register } from "../../LRaccount/Register";
import { Litter } from "../../Litter";

export function UI() {
	const {
		// user,
		// email,
		// login,
		// register,
		// setEmail,
		// forgotPassword,
		// isEmailRegistered,
		language,
	} = useAuth();

	return (
		<main id="lay">
			<BrowserRouter>
				<Routes>
					{/*<Route
						exact
						path="/"
						element={
							<Login
								login={login}
								email={email}
								setEmail={setEmail}
								forgotPassword={forgotPassword}
								isRegistered={isEmailRegistered}
								language={language[language_keys.ACCOUNT].LOGIN}
							/>
						}
					/>

					<Route
						exact
						path="/register"
						element={
							<Register
								email={email}
								register={register}
								isRegistered={isEmailRegistered}
								language={language[language_keys.ACCOUNT].REGISTER}
							/>
						}
					/>

					<Route
						exact
						path="/rabbitList"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<RabbitList
										user={user}
										language={language[language_keys.RABBITLIST]}
									/>
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/rabbitList/addRabbit"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<AddRabbit language={language[language_keys.ADDRABBIT]} />
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/vitae"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<Vitae user={user} language={language[language_keys.VITAE]} />
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/vitae/print"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<Print user={user} language={language[language_keys.PRINT]} />
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/litterRecord"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<LitterList language={language[language_keys.LITTERLIST]} />
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/vitae/addLitter"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<AddLitter
										language={language[language_keys.ADDLITTER]}
										user={user}
									/>
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>*/}

					<Route
						exact
						path="/"
						element={
							<RabbitListProvider>
								<Litter language={language[language_keys.LITTER]} />
							</RabbitListProvider>
						}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

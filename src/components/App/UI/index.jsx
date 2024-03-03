import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../../../hooks/ProtectedRoute";
import { language_keys } from "../../../constants/keys";
import { RabbitListProvider, useAuth } from "../../../hooks/useContexts";
import "../app.module.css";

import { Login } from "../../LRaccount/Login";
import { RabbitList } from "../../RabbitList";
import { Register } from "../../LRaccount/Register";
import { Natural } from "../../Forms/AddRabbit/Natural";
import { Transferred } from "../../Forms/AddRabbit/Transferred";
import { Vitae } from "../../Vitae";
import { Print } from "../../Print";

export function UI() {
	const {
		user,
		email,
		login,
		register,
		language,
		setEmail,
		forgotPassword,
		isEmailRegistered,
	} = useAuth();

	return (
		<main id="lay">
			<BrowserRouter>
				<Routes>
					<Route
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
									<RabbitList language={language[language_keys.RABBITLIST]} />
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/rabbitList/addRabbitNatural"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<Natural
										user={user}
										language={language[language_keys.ADDRABBIT]}
									/>
								</RabbitListProvider>
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/rabbitList/addRabbitTransferred"
						element={
							<ProtectedRoute>
								<RabbitListProvider>
									<Transferred
										user={user}
										language={language[language_keys.ADDRABBIT]}
									/>
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
				</Routes>
			</BrowserRouter>
		</main>
	);
}

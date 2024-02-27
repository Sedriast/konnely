import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../../../hooks/ProtectedRoute";
import { language_keys } from "../../../constants/keys";
import { useAuth, useRabbits } from "../../../hooks/useContexts";
import "../app.module.css";

import { Login } from "../../LRaccount/Login";
import { RabbitList } from "../../RabbitList";
import { Register } from "../../LRaccount/Register";
import { Natural } from "../../Forms/AddRabbit/Natural";
import { Transferred } from "../../Forms/AddRabbit/Transferred";

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
	const { refreshData, litters, rabbitsList } = useRabbits();

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
								<RabbitList language={language[language_keys.RABBITLIST]} />
							</ProtectedRoute>
						}
					/>

					<Route
						exact
						path="/rabbitList/addRabbitNatural"
						element={
							<Natural
								user={user}
								litters={litters}
								rabbits={rabbitsList}
								refreshData={refreshData}
								language={language[language_keys.ADDRABBIT]}
							/>
						}
					/>

					<Route
						exact
						path="/rabbitList/addRabbitTransferred"
						element={
							<Transferred
								user={user}
								litters={litters}
								rabbits={rabbitsList}
								refreshData={refreshData}
								language={language[language_keys.ADDRABBIT]}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

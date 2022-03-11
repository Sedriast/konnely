import { Layout } from "./components/Layout";
import style_A from './components/css/App/App.module.css';
import React from "react";

const bk = "";

export function App() {
	return (
		<>
			<React.StrictMode>
				<Layout clsName={style_A.Layout} cl_={bk} />
			</React.StrictMode>
		</>
	);
}
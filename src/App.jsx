import { Layout } from "./components/Layout";
import style_A from './components/css/App/App.module.css';

import React from "react";

const back = () => {

	const v ='black';

	window.setInterval(function(){
	document.getElementById('root').style.setProperty('background', v);
	}, 100);

	console.log(v+"		v");
}

export function App() {
	return (
		<>
			<React.StrictMode>
				<Layout clsName={style_A.Layout} cl_={back}/>
			</React.StrictMode>
		</>
	);
}

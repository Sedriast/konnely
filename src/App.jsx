import { Layout } from "./components/Layout";
import style_A from './components/css/App/App.module.css';

import React from "react";
const bk = "hola";

const back = () => {

	const v ='linear-gradient(0deg, rgba(236, 224, 216, 0.65), rgba(236, 224, 216, 0.65)), url(https://drive.google.com/uc?export=download&id=1rOlGY6t5QqpGusJE_TW4Z3HgOO2islVl)';

	window.setInterval(function(){
	document.getElementById('root').style.setProperty('background', v);
	}, 1);

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

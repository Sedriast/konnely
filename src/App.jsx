import { Layout } from "./components/Layout";
import style_A from './components/css/App/App.module.css';

import React from "react";

const back = () => {

	const v ='url(https://drive.google.com/uc?export=download&id=1rOlGY6t5QqpGusJE_TW4Z3HgOO2islVl)';

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

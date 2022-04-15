import stLogin from '../../css_C/Login/Login.module.css';
import { Buttons } from '../Tools/Buttons';
import { Paragraphs } from '../Tools/Paragraphs';
import { auth } from '../../firebase_C/credentials_';
import { login_, logout_ } from '../../firebase_C/auth_.js';
import { useState } from 'react';
import exit from '../../css_C/Login/exit.png';
import conf from '../../css_C/Login/conf.png';
import google from '../../css_C/Login/google.jpg';

export function Login(props) {
	const [currentUser, setCurrentUser] = useState();
	const [photo, setPhoto] = useState();
	const [name, setName] = useState();
	const [Id, setId] = useState();

	auth.onAuthStateChanged(async (us) => {
		if (us) {
			setCurrentUser(true);
			setPhoto(us.photoURL);
			setName(us.displayName);
			setId(us.uid);
		} else {
			setCurrentUser(false);
		}
	});
	return (
		<>
			<div className={props.clsName}>
				<div className={stLogin.panel}>
					<Buttons clsName={stLogin.back} label=">" to="/" />
					{currentUser ? (
						<>
							<div className={stLogin.panelData}>
								<div className={stLogin.ribbon}>
									<img src={photo} href="" alt="" />
								</div>
								<Paragraphs clsName={stLogin.text} t1={name} b1={Id} />
								<Buttons clsName={stLogin.conf} src={conf} label="Preferencias" to="/login" />
								<Buttons
									clsName={stLogin.exit}
									src={exit}
									click={logout_}
									label="Exit"
									to="/login"
								/>
							</div>
						</>
					) : (
						<>
							<h1 className={stLogin.leyend}>Ingresar con:</h1>
							<Buttons clsName={stLogin.googleAPI} src={google} click={login_} to="/login" />
						</>
					)}
				</div>
			</div>
		</>
	);
}

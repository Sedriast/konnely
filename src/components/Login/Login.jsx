import app from '../firebase/credenciales';
import React, { useState } from "react";
import styles from '../css/Login.module.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);


export function Login() {

  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(usuario, email, password) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docuRef = doc(db, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { usuario: usuario, correo: email });
  }

  function submitHandler(e) {
    const usuario = e.target.elements.usuario.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (isRegistrando) {
      // registrar
      registrarUsuario(usuario, email, password);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
  <>
          <div className={styles.basePanelLogin}>
            <form onSubmit={submitHandler}>
				<div className={styles.user}>
					<input id="usuario" type="text" placeholder="Usuario"/>
				</div>
				<div  className={styles.email}>
					<input id="email" type="email" placeholder="Correo electr&oacute;nico"/>
				</div>
				<div className={styles.pass}>
					<input id="password" type="password" placeholder="Contrase&ntilde;a"/>
				</div>
				<div  className={styles.iniciar} >
					<input id ="iniciar" type="submit" value={isRegistrando ? "Registrar" : "Iniciar sesión"}/>
				</div>
            </form>
              <button className={styles.estado} onClick={() => setIsRegistrando(!isRegistrando)}>{isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
              </button>
          </div>
  </>
  );
}
import React, { useState } from "react";
import app from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import styles from '../css/Login.module.css';

const auth = getAuth(app);


export function Login() {

  const firestore = getFirestore(app);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(usuario, email, password) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
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
    <div className={styles.baseLogin}>
      <div className={styles.basePanelLogin}>
        <form onSubmit={submitHandler}>
          <input id="usuario" className={styles.user} type="text" placeholder="Usuario"/>
          <input id="email" className={styles.email} type="text" placeholder="Correo electr&oacute;nico"/>
          <input id="password" className={styles.pass} type="password" placeholder="Contrase&ntilde;a"/>
          <input id="iniciar" type="submit" value={isRegistrando ? "Registrar" : "Iniciar sesión"}/>
        </form>
          <button id="estado" onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
          </button>
      </div>
    </div>
  </>
  );
}
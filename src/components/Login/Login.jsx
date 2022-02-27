import { Btn } from "../Buttons/Btn";
import style from "../css/Login.module.css";

export function Login() {
  return (
    <>
      <div className={style.subPanelL}>
        <h1 className={style.laU}>Usuario</h1>
        <input className={style.userIn} type="text" />
        <h1 className={style.laC}>Contraseña</h1>
        <input className={style.passIn} type="password" />
        <Btn clName={style.submitLo} itemPath="/test" text_="Ingresar" />
      </div>
    </>
  );
}

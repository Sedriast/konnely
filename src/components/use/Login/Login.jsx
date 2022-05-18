import style_Lo from "../../css/Login/Login.module.css";
import { Buttons } from "../Tools/Buttons";
import { Inputs } from "../Tools/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export function Login(props) {
    const { login, notification_err } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate("/list");
        } catch (error) {
            notification_err(error.code, "error", "aceptar");
        }
    };

    const navigate_ = () => {
        navigate("/register");
    };
    return (
        <>
            <div className={props.clsName}>
                <div className={style_Lo.panel_}>
                    <Inputs
                        clsName={style_Lo.userName}
                        name_="email"
                        type_="email"
                        leyend="Correo electronico"
                        handleChange={handleChange}></Inputs>
                    <Inputs
                        clsName={style_Lo.userPass}
                        name_="password"
                        type_="password"
                        leyend="Contraseña"
                        handleChange={handleChange}></Inputs>
                    <Buttons
                        clsName={style_Lo.submit_Lo}
                        click_={handleSubmit}
                        link_="#"></Buttons>
                    <Buttons
                        clsName={style_Lo.submit_Lo_re}
                        click_={navigate_}
                        link_="#"></Buttons>
                </div>
            </div>
        </>
    );
}

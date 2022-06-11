import style_Lo from "../../css/Register/Register.module.css";
import { Buttons } from "../Tools/Buttons";
import { Inputs } from "../Tools/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ValidationErrors } from "../Login/ValidationErrors";

export function Register(props) {
    const { signup, notification_err } = useAuth();

    const [user, setUser] = useState({
        userName: "",
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
            await signup(user.userName, user.email, user.password);
            navigate("/list");
        } catch (error) {
            ValidationErrors(error.code);
        }
    };
    return (
        <>
            <div className={props.clsName}>
                <div className={style_Lo.panel_}>
                    <Inputs
                        clsName={style_Lo.userName}
                        name_="userName"
                        type_="text"
                        leyend="Usuario"
                        handleChange={handleChange}></Inputs>
                    <Inputs
                        clsName={style_Lo.userEmail}
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
                        link_="#"
                        text_="Crear"></Buttons>
                    <Buttons
                        clsName={style_Lo.submit_Lo_re}
                        link_="/"
                        text_="Ya tengo cuenta"></Buttons>
                </div>
            </div>
        </>
    );
}

import style_Lo from "../../css/Login/Login.module.css";
import { Buttons } from "../Tools/Buttons";
import { Inputs } from "../Tools/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ValidationErrors } from "./ValidationErrors";

export function Login(props) {
    const { login } = useAuth();

    const [newuser, setNewuser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setNewuser({ ...newuser, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(newuser.email, newuser.password);
            navigate("/list");
        } catch (error) {
            ValidationErrors(error.code);
            console.log(error);
        }
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
                        text_="Iniciar sección"
                        link_="#"></Buttons>
                    <Buttons
                        clsName={style_Lo.submit_Lo_re}
                        text_="Registrar"
                        link_="/register"></Buttons>
                </div>
            </div>
        </>
    );
}

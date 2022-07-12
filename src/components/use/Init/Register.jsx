// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import st from "./css/Register.module.css";
import swal from "sweetalert";
import { Buttons } from "../Tools/Buttons/Buttons";
import { Inputs } from "../Tools/Inputs/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ValidationErrors } from "./ValidationErrors";

export function Register() {
    const { signup, logout } = useAuth();
    const navigate = useNavigate();
    // const [otp, setOtp] = useState(false);
    const [newuser, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        phone: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...newuser, [name]: value });
    }

    const handleSubmit = async (e) => {
        // if (e.target.id === "telefono") {
        //     setOtp(true);
        // }
        try {
            await signup(
                e.target.id,
                newuser.userName,
                newuser.email,
                newuser.password,
                "+57" + newuser.phone
            );
            swal({
                title: "Debe verificar su cuenta en la bandeja de entrada de tu correo, si no lo encuentra hay puede buscarlo en el apartado de “spam” o “correos no deseados”.",
                icon: "warning",
                buttons: "Aceptar",
            }).then((respuesta) => {
                if (respuesta) {
                    cerrarSesion();
                    document.getElementById("formulario").reset();
                    navigate("/#tab1");
                } else {
                    cerrarSesion();
                    document.getElementById("formulario").reset();
                    navigate("/#tab1");
                }
            });
        } catch (error) {
            ValidationErrors(error.code);
            console.log(error);
        }
    };
    const cerrarSesion = async () => {
        await logout();
    };
    return (
        <>
            <form id="formulario">
                <div className={st.container}>
                    <Inputs
                        clsName={st.userName}
                        name_="userName"
                        type_="text"
                        leyend="Usuario"
                        handleChange={handleChange}></Inputs>
                    <Inputs
                        clsName={st.userEmail}
                        name_="email"
                        type_="email"
                        leyend="Correo electrónico"
                        handleChange={handleChange}></Inputs>
                    <Inputs
                        clsName={st.userPass}
                        name_="password"
                        type_="password"
                        leyend="Contraseña"
                        handleChange={handleChange}></Inputs>
                    {/* <Inputs
                        clsName={st.userPhone}
                        name_="phone"
                        type_="number"
                        leyend="Número telefónico"
                        handleChange={handleChange}></Inputs> */}
                    {/* {otp && (
                        <Inputs
                            clsName={st.otp}
                            name_="verification"
                            type_="number"
                            leyend="Codigo de verificación"
                            handleChange={(e) => {
                                verifyOtp(
                                    e.target.value,
                                    newuser.userName,
                                    newuser.email
                                );
                            }}></Inputs>
                    )} */}
                    {/* <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                    /> */}
                    <div className={st.submit}>
                        <Buttons
                            id_="correo"
                            click_={handleSubmit}
                            link_="#"
                            text_="Crear"></Buttons>
                        {/* <Buttons
                            id_="telefono"
                            click_={handleSubmit}
                            link_="#"
                            text_="Crear"></Buttons> */}
                    </div>
                </div>
            </form>
        </>
    );
}

import swal from "sweetalert";

export const ValidationErrors = (props) => {
    const error_message = {
        "auth/user-not-found": "El usuario no existe",
        "auth/wrong-password": "La contraseña es incorrecta",
        "auth/invalid-email": "El correo electronico ingresado es incorrecto",
        "auth/email-already-exists":
            "El correo electronico ingresado ya esta en uso",
        "auth/too-many-requests":
            "Existen demasiadas solicitudes de inicio de sesion con este correo, intente ingresar mas tarde",
        "auth/email-already-in-use":
            "La dirección de correo electrónico ya está en uso por otra cuenta.",
    };
    const error_message_default =
        "Se produjo un error interno revise sus credenciales";

    const notificacion = () => {
        const error = error_message[props] || error_message_default;
        swal({
            title: error,
            icon: "error",
            button: "aceptar",
        });
    };
    return <>{notificacion()}</>;
};

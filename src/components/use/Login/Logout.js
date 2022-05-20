import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../../context/AuthContext";

export function Logout() {
    const { logout, user } = useAuth();
    const Logout_ = () => {
        try {
            swal({
                title: "¿Desea cerrar sección?",
                icon: "warning",
                buttons: ["No", "Si"],
            }).then(async (respuesta) => {
                if (respuesta) {
                    console.log("Hola");
                    <Navigate to="/" />;
                    await logout();
                }
            });
        } catch (error) {}
    };
    if (!user) {
        Logout_();
    }
}

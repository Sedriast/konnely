import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <h1>Loading...</h1>;
    if (!user) {
        swal({
            title: "Debes iniciar sección primero",
            icon: "error",
            button: "aceptar",
        });
        return <Navigate to="/" />;
    }

    return <>{children}</>;
}

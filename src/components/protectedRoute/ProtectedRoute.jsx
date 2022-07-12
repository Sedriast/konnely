import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <h1>Loading...</h1>;
    if (!user) {
        swal({
            title: "Esta ventana puede aparecer porque no ha verificado su cuenta o porque intenta acceder sin autorización",
            icon: "error",
            button: "aceptar",
        });
        return <Navigate to="/" />;
    }

    return <>{children}</>;
}

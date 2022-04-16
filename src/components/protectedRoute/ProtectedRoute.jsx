import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
	const { user } = useAuth();

	if (!user) {
		swal({
			title: "Debes iniciar sección primer",
			icon: "error",
			button: "aceptar",
		});
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}

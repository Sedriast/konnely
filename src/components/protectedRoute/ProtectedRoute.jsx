import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return <h1>Loading...</h1>;
	console.log("3");

	if (!user) {
		console.log("2");
		swal({
			title: "Debes iniciar sección primer",
			icon: "error",
			button: "aceptar",
		});
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}

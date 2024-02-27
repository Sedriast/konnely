import { Navigate } from "react-router-dom";
import { errorAlert, useAuth } from "./useContexts";
import { Loading } from "../components/Fragments/Loading";

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return <Loading />;
	if (!user) {
		errorAlert("permises-denied");
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}

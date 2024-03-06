import { Navigate, useLocation } from "react-router-dom";
import { errorAlert, useAuth } from "../useContexts";
import { Loading } from "../../components/Fragments/Loading";
import { DownRigthMenu } from "./DownRigthMenu";

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) return <Loading />;
	if (!user) {
		errorAlert("permises-denied");
		return <Navigate to="/" />;
	}

	return (
		<>
			{children}
			{(location.pathname === "/rabbitList" ||
				location.pathname === "/litterList") && <DownRigthMenu />}
		</>
	);
}

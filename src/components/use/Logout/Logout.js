import swal from "sweetalert";
import { useAuth } from "../../../context/AuthContext";

export const Logout = () => {
    const { logout, user } = useAuth();
    const Logout_ = async () => {
        try {
            await logout();
        } catch (error) {}
    };
    if (!user) {
        Logout_();
    }
};

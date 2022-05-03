import { useAuth } from "../context/AuthContext";

export function logout() {
    auth.signOut();
}

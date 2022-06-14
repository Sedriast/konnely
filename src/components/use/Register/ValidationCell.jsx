import { Inputs } from "../Tools/Inputs";
import { useAuth } from "../../../context/AuthContext";
export const ValidationCell = () => {
    const { createRecaptcha } = useAuth();
    return (
        <>
            <div>
                <Inputs id_/>
            </div>
        </>
    );
};

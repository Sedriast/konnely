import swal from "sweetalert";
import st from "./css/Customer.module.css";
import { useState } from "react";
import { Data } from "./Data.js";
import { useAuth } from "../../../context/AuthContext";
import { UpdateInfoProfile } from "../../firebase/funtions/AddInformation";

export function Customer() {
    const { user } = useAuth();
    const [f, setF] = useState({ user: null, data: {} });

    const ca = (e) => {
        setF({ ...f, user: user.uid, data: { tema: e.target.id } });
    };

    const c = () => {
        swal({
            title: "¿Desea cambiar el tema predeterminado?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then((respuesta) => {
            if (respuesta) {
                UpdateInfoProfile(f);
                setTimeout(recargar, 1000);
            }
        });
    };

    function recargar() {
        window.location.reload(true);
    }
    return (
        <>
            <div className={st.container}>
                {Data.map((a, index) => {
                    return (
                        <div className={st.ops} key={index}>
                            <button onMouseEnter={ca}>
                                <img
                                    className={st.preview_}
                                    id={a.backgroud}
                                    src={a.miniature}
                                    onClick={c}
                                    href=""
                                    alt=""
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

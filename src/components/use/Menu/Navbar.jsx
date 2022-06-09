import "../../css/Menu/Active.css";
import { useNavigate } from "react-router-dom";
import { Data } from "./Data";
import { useState } from "react";
import style_M from "../../css/Menu/Navbar.module.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Tools/Buttons";
import swal from "sweetalert";
import { useAuth } from "../../../context/AuthContext";

export function Navbar(props) {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const Logout_ = () => {
        try {
            swal({
                title: "¿Desea cerrar sesión?",
                icon: "warning",
                buttons: ["No", "Si"],
            }).then((respuesta) => {
                if (respuesta) {
                    handleSubmit2();
                    navigate("/");
                }
            });
        } catch (error) {}
    };
    const handleSubmit2 = async () => {
        await logout();
    };

    return (
        <>
            <div className={props.clsName}>
                <div className={style_M.panel_}>
                    <Link className={style_M.link_} to="#">
                        <div className={style_M.gradient_} onClick={showSidebar}>
                            <div className={style_M.moon_} />
                        </div>
                    </Link>
                </div>
                <nav className={sidebar ? "menu_ active" : "menu_"}>
                    <ul className={style_M.items_} onClick={showSidebar}>
                        <Buttons clsName={style_M.toggle_} link_="#" />
                        <div className={style_M.gridMenu}>
                            {Data.map((item, index) => {
                                return (
                                    <Buttons
                                        key={index}
                                        clsName={style_M.options}
                                        text_={item.title}
                                        link_={item.path}
                                    />
                                );
                            })}
                            <Buttons
                                clsName={style_M.options}
                                text_="Cerrar sección"
                                click_={() => {
                                    if (user) {
                                        Logout_();
                                    }
                                }}
                                link_="#"
                            />
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}

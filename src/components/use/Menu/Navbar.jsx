import "../../css/Menu/Active.css";
import { Data } from "./Data";
import { useState } from "react";
import style_M from "../../css/Menu/Navbar.module.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Tools/Buttons";
import { Logout } from "../Logout/Logout";

export function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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
                                link_="/"
                                click_={Logout()}
                            />
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}

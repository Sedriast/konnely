import app from "../components/firebase/credentials";
import style_L from "../components/css/Layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import g from "./css/load.png";
import { Users } from "../components/use/Users/Users";
import { Navbar } from "./use/Menu/Navbar";
import { Customer } from "./use/Customer/Customer";
import { Form } from "./use/Form/Form";
import { PanelButtons } from "./use/PanelButons/PanelButtons";
import { Login } from "./use/Login/Login";
import { List } from "./use/List/List";
import { Loading } from "./use/Tools/Loading";
import { useState, useEffect } from "react";
import { Register } from "./use/Register/Register";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import { Invoice } from "./use/Invoice/Invoice";
import { useAuth } from "../context/AuthContext";
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";

const db = getFirestore(app);

export function Layout(props) {
    const { user } = useAuth();
    const [init, setInit] = useState(false);
    const [user_, setUser_] = useState([
        {
            tema: "",
            usuario: "",
            email: "",
            rol: "",
            uid: "",
        },
    ]);

    useEffect(() => {
        if (user) {
            const q = query(
                collection(db, "usuarios"),
                where("uid", "==", user.uid)
            );
            onSnapshot(q, (snapshot) =>
                setUser_(snapshot.docs.map((doc) => ({ ...doc.data() })))
            );
        }
    }, [user]);

    const s = () => {
        document
            .getElementById("lay")
            .style.setProperty("background", user_[0].tema);
        document
            .getElementById("lay")
            .style.setProperty("background-repeat", "no-repeat");
        document.getElementById("lay").style.setProperty("background-size", "cover");
    };
    const changeLoad = () => {
        setInit(true);
        setTimeout(() => {
            setInit(false);
        }, 3000);
    };

    return (
        <>
            <div className={props.clsName}>
                <div className={style_L.panel_} id="lay" onLoad={s}>
                    {init ? (
                        <>
                            <Loading clsName={style_L.loading} src_={g} />
                        </>
                    ) : (
                        <Router>
                            <Routes>
                                <Route exact path="/test" element={<></>} />
                                <Route
                                    exact
                                    path="/"
                                    element={<Login clsName={style_L.login} />}
                                />
                                <Route
                                    exact
                                    path="/register"
                                    element={<Register clsName={style_L.login} />}
                                />
                                <Route
                                    exact
                                    path="/"
                                    element={<Login clsName={style_L.login} />}
                                />
                                <Route
                                    exact
                                    path="/customer"
                                    element={
                                        <>
                                            <ProtectedRoute>
                                                <Customer
                                                    clsName={style_L.customer}
                                                />
                                            </ProtectedRoute>
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/users"
                                    element={
                                        <>
                                            <ProtectedRoute>
                                                <Users
                                                    clsName={style_L.users}
                                                    src_="https://drive.google.com/uc?export=download&id=1E7CWChneuESSmcVQ-CpZHTMQxLwbedyi"
                                                    title={user_[0].usuario}
                                                    label="Adminitrador"
                                                />
                                            </ProtectedRoute>
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/form"
                                    element={
                                        <>
                                            <PanelButtons
                                                clsName={style_L.panelButtons}
                                                loading_={changeLoad}
                                            />
                                            <Form clsName={style_L.form_} />
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/list"
                                    element={
                                        <>
                                            <ProtectedRoute>
                                                <PanelButtons
                                                    clsName={style_L.panelButtons}
                                                    loading_={changeLoad}
                                                />
                                                <List clsName={style_L.list} />
                                            </ProtectedRoute>
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/invoice"
                                    element={
                                        <>
                                            <PanelButtons
                                                clsName={style_L.panelButtons}
                                                loading_={changeLoad}
                                            />
                                            <Invoice
                                                clsName={style_L.invoice}
                                                name="sadfadf"
                                                nit="safasdfa"
                                                email="sadfads@asdfasdfaf.com"
                                                date="asdfasdf"
                                                userID="asdfassdfad"
                                            />
                                        </>
                                    }
                                />
                            </Routes>
                            <Navbar clsName={style_L.menu} />
                        </Router>
                    )}
                </div>
            </div>
        </>
    );
}

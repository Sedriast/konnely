import { Layout } from "./components/Layout";
import style_A from "./components/css/App/App.module.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext";

export function App() {
    return (
        <>
            <React.StrictMode>
                <AuthProvider>
                    <Layout clsName={style_A.Layout} />
                </AuthProvider>
            </React.StrictMode>
        </>
    );
}

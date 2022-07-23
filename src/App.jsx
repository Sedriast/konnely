import React from 'react';
import st from './App.module.css';
import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';

export function App() {
    return (
        <>
            <React.StrictMode>
                <AuthProvider>
                    <Layout clsName={st.Layout} />
                </AuthProvider>
            </React.StrictMode>
        </>
    );
}

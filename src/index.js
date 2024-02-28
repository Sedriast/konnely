import React from 'react';
import { App } from './components/App';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/useContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode >
);

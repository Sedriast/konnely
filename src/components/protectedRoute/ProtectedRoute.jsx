import swal from 'sweetalert';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../use/0-GeneralComp/1-Loading/Loading';

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <Loading />;
    if (!user) {
        swal({
            title: 'Puede estar viendo este mensaje por las siguientes razones: el administrador ha deshabilitado su acceso a la plataforma, esta intentado acceder a una ruta protegida sin iniciar sesión o no ha verificado su correo electronico',
            icon: 'warning',
            button: 'aceptar',
        });
        return <Navigate to='/' />;
    }

    return <>{children}</>;
}

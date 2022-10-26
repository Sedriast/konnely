import swal from 'sweetalert';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../use/0-GeneralComp/1-Loading/Loading';

export function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return <Loading />;
	if (!user) {
		swal({
			title:
				'Para iniciar sección debe ingresar credenciales registradas o verificar su cuenta en la bandeja de entrada de su correo electronico (si no lo encuentra puede buscarlo en el apartado de “spam/correos no deseados”)',
			icon: 'error',
			button: 'aceptar',
		});
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}

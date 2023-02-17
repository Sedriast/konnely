import swal from 'sweetalert';

export const ValidationErrors = (props) => {
    const error_message = {
        'auth/user-not-found': 'El usuario no existe',
        'auth/wrong-password': 'La contraseña ingresada no es la correcta',
        'auth/invalid-email': 'El correo electronico ingresado es incorrecto',
        'auth/email-already-exists': 'El correo electronico ingresado ya esta en uso',
        'auth/too-many-requests':
            'Existen demasiadas solicitudes desde con este correo, intente realizar la acción mas tarde',
        'auth/email-already-in-use': 'La dirección de correo electrónico ya está en uso por otra cuenta.',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
        'auth/operation-not-allowed':
            'La operación no está permitida. Debe habilitar esta opción en la consola de Firebase.',
        'auth/user-disabled': 'El usuario ha sido deshabilitado.',
        'auth/invalid-credential':
            'La credencial de autenticación no es válida. El token de acceso puede haber caducado, la credencial puede haber sido revocada o la credencial de autenticación no puede ser usada con este proyecto.',
        'auth/invalid-verification-code': 'El código de verificación no es válido o ha caducado.',
        'auth/invalid-verification-id': 'El ID de verificación no es válido.',
        'auth/missing-verification-code': 'El código de verificación no se ha proporcionado.',
        'auth/missing-verification-id': 'El ID de verificación no se ha proporcionado.',
        'auth/credential-already-in-use': 'Esta credencial ya está asociada con una cuenta de usuario diferente.',
        'auth/custom-token-mismatch':
            'El token personalizado no corresponde con la identidad de la cuenta de usuario.',
        'auth/missing-email': 'El correo electrónico no se ha proporcionado.',
        'auth/missing-password': 'La contraseña no se ha proporcionado.',
        'auth/missing-phone-number': 'El número de teléfono no se ha proporcionado.',
        'not-found': 'No se encontró el recurso solicitado',
        'not-authorized': 'No autorizado',
        'invalid-credentials': 'Credenciales inválidas',
        'invalid-params': 'Parámetros inválidos',
    };
    const error_message_default = 'Se produjo un error interno, intente nuevamente mas tarde';

    const notificacion = () => {
        const error = error_message[props] || error_message_default;
        return swal({
            title: error,
            icon: 'error',
            button: 'aceptar',
        });
    };
    return <>{notificacion()}</>;
};
